import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import Alertt from "../components/Alert";
import { useNavigate } from "react-router-dom";

const Register = ({ setAlert, setMsg, setType }) => {
    const [fullname, setFullname] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const navigate = useNavigate()
    const handleclick = async () => {
       
        const res = await axios.post('http://localhost:5000/user/signup', {fullname,email,password,address,phone})
        console.log(res.data)
        if (res.data.success === true) {
            setAlert(true)
            setMsg(res.data.message)
            setType('success')
            navigate('/')
        } else {
            setAlert(true)
            setMsg(res.data.message)
            setType('error')
        }

    }
    return (
        <>
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '32px' }}>REGISTER</Typography>
                    <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                        <input type="text" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Full Name' vlaue={fullname} onChange={(e) => { setFullname(e.target.value) }} />
                    </Box>
                    <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                        <input type="text" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Address' vlaue={address} onChange={(e) => { setAddress(e.target.value) }} />
                    </Box>
                    <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                        <input type="number" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Phone Number' vlaue={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    </Box>
                    <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                        <input type="email" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Email' vlaue={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </Box>
                    <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                        <input type="password" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Password' vlaue={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </Box>
                    <Box sx={{ backgroundColor: '#009603', padding: '16px 32px', width: 'fit-content', cursor: 'pointer' }} onClick={handleclick} >
                        <Typography sx={{ color: 'white', fontWeight: 'bold' }}>REGISTER</Typography>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}

export default Register;