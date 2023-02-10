import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from 'axios';
const Success = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const [value,setValue] = useState(searchParams.get('value'))
    const [date,setDate] = useState(searchParams.get('date'))
    const [time,setTime] = useState(searchParams.get('time'))
    const [user, setUser] = useState()
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [msg,setMsg] = useState()
    const order = async () => {
        const res = await axios.post('http://localhost:5000/user/loaduser', { token: token })
        const id = res.data.data._id
        const fullname = res.data.data.fullname
        const response = await axios.post('http://localhost:5000/user/order', { value, date, time,id,fullname })
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
        console.log(user)
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
        </>
    );
}

export default Success;