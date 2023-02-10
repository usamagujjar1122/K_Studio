import { Box, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
const Login = ({ setAlert, setMsg, setType }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleclick = async () => {

        const res = await axios.post('http://localhost:5000/user/login', {email,password})
        console.log(res.data)
        if (res.data.success === true) {
            setAlert(true)
            setMsg(res.data.message)
            setType('success')
            localStorage.setItem('token',res.data.token)
            navigate('/')
            window.location.reload();
        } else {
            setAlert(true)
            setMsg(res.data.message)
            setType('error')
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
                                <Typography sx={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Typography>
                            </Box>
            </Stack>
            </Box>
        </>
     );
}
 
export default Login;