import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from 'axios';
import {URL} from '../url'

export default function Successs() {
    const [searchParams,setSearchParams] = useSearchParams()
    const value = searchParams.get('value')
    const date = searchParams.get('date')
    const time = searchParams.get('time')
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [msg,setMsg] = useState()
    const order = async () => {
        const res = await axios.post(`${URL}/user/loaduser`, { token: token })
        const id = res.data.data._id
        const fullname = res.data.data.fullname
        const response = await axios.post(`${URL}/user/order`, { value, date, time,id,fullname })
        if(response.data.success){
        searchParams.delete('value')
        searchParams.delete('date')
        searchParams.delete('time')
        setSearchParams(searchParams)
        }
        setMsg(response.data.message)
        
    }
    useEffect(() => {
        order()
    }, [])
    return (
        <>
        {msg && <>
            <Stack sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px', minHeight: '70vh' }, margin: '50px 0px', alignItems: 'center' }}>
                <Typography sx={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold', color: '#009603' }}>{msg}</Typography>
                <Typography sx={{ textAlign: 'center', width: { xs: '90%', lg: '60%' } }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quod sit natus expedita veniam. Totam, laboriosam quasi! Libero impedit architecto minima modi possimus! Molestiae repudiandae, ipsa corrupti esse saepe earum? </Typography>
            </Stack>
            </>
            }   

            {!msg &&
            <Box sx={{width:'100%',margin:'400px auto',}}>
            <CircularProgress color="success" sx={{position:'absolute',top:"50%",left:'50%',transform:'translate(-50%,-50%)'}}/>
            </Box>
            }
        </>
    );
}
