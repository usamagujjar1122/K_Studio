import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import {URL} from '../url'

const Login = ({ setAlert, setMsg, setType }) => {
    const [email, setEmail] = useState()
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleclick = async () => {
        setLoading(true)
        const res = await axios.post(`${URL}/user/login`, {email,password})
        if (res.data.success === true) {
            setAlert(true)
            setMsg(res.data.message)
            setType('success')
            localStorage.setItem('token',res.data.token)
            setLoading(false)
            navigate('/')
            window.location.reload();
        } else {
            setAlert(true)
            setMsg(res.data.message)
            setType('error')
            setLoading(false)
        }

    }
    return ( 
        <>
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
            <Stack sx={{alignItems:'center',gap:'20px'}}>
                    <Typography sx={{fontWeight:'bold',fontSize:'32px'}}>LOGIN</Typography>
                    <Box sx={{ border: '1px solid lightgray', width: {xs:'100%',md:'60%'} }}>
                            <input type="email" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none',padding:'10px' }} placeholder='Email' vlaue={email} onChange={(e) => { setEmail(e.target.value) }}/>
                        </Box>
                        <Box sx={{ border: '1px solid lightgray', width: {xs:'100%',md:'60%'} }}>
                            <input type="password" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none',padding:'10px' }} placeholder='Password' vlaue={password} onChange={(e) => { setPassword(e.target.value) }}/>
                        </Box>
                        <Link to="/forgot"><Typography sx={{alignSelf:'end'}}>Forgot Passowrd?</Typography></Link>
                        <Box sx={{ backgroundColor: '#009603', padding: '16px 32px',width:'fit-content',cursor:'pointer' }} onClick={handleclick}>
                        {loading ? 
                        <CircularProgress sx={{ color: 'white', width: "28px !important", height: '28px !important', padding: "0px 16px" }} />
                        :
                        <Typography sx={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Typography>
                    }
                            </Box>
            </Stack>
            </Box>
        </>
     );
}
 
export default Login;