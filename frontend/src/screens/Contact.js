import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
    const Contact = ({ setAlert, setMsg, setType,alert }) => {
    const navigate = useNavigate()
    const md = useMediaQuery('(min-width:1000px)');
    const token = localStorage.getItem('token')
    const [name,setname] = useState()
    const [email,setemail] = useState()
    const loadUser = async () => {
        if(token) {
        const res = await axios.post('http://localhost:5000/user/loaduser', { token: token })
        setname(res.data.data.fullname)
        setemail(res.data.data.email)
        }
    }
    const sendmsg = async () => {
        const res = await axios.post('http://localhost:5000/user/msg', {name,email,subject,msg}) 
        console.log(res.data)
        if (res.data.success) {
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
    useEffect(()=>{
        loadUser()
    },[])
 
    const [subject,setsubject] = useState()
    const [msg,setmsg] = useState()
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19895.796147709065!2d-0.07089430178187445!3d51.44026184657587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603c1647410e9%3A0x1bb92367ed35de98!2sForest%20Hill%2C%20London%2C%20UK!5e0!3m2!1sen!2sbd!4v1584297571592!5m2!1sen!2sbd"
                width="100%"
                height="650"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />

            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Stack direction={md ? 'row' : 'column'} sx={{ marginBottom: '50px' }}>
                    <Stack sx={{ gap: '30px',flex:1 }}>
                        <Stack >
                            <Typography sx={{ fontWeight: 'bold', fontSize: '28px' }}>GET IN TOUCH</Typography>
                            <Typography sx={{ color: 'gray', width: { xs: '90%' } }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque explicabo id impedit voluptatem expedita dolore?</Typography>
                        </Stack>
                        <Stack direction="row" sx={{ gap: '20px', alignItems: 'center' }}>
                            <Box sx={{ padding: '20px 22px', backgroundColor: '#009603', borderRadius: '50%' }}>
                                <LocationOnIcon sx={{ fontSize: '30px', color: 'white' }} />
                            </Box>
                            <Stack>
                                <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>ADDRESS</Typography>
                                <Typography sx={{ fontSize: "18px" }}>Lorem ipsum dollar sit.</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" sx={{ gap: '20px', alignItems: 'center' }}>
                            <Box sx={{ padding: '20px 22px', backgroundColor: '#009603', borderRadius: '50%' }}>
                                <CallIcon sx={{ fontSize: '30px', color: 'white' }} />
                            </Box>
                            <Stack>
                                <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>PHONE</Typography>
                                <Typography sx={{ fontSize: "18px" }}>+92301 0952136</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" sx={{ gap: '20px', alignItems: 'center' }}>
                            <Box sx={{ padding: '20px 22px', backgroundColor: '#009603', borderRadius: '50%' }}>
                                <EmailIcon sx={{ fontSize: '30px', color: 'white' }} />
                            </Box>
                            <Stack>
                                <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>EMAIL</Typography>
                                <Typography sx={{ fontSize: "18px" }}>tkproduction786@gmail.com</Typography>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack sx={{ flex: 1,gap:'20px' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '28px' }}>WORK WITH ME!</Typography>
                        <Box sx={{ border: '1px solid lightgray', width: '100%' }}>
                            <input type="text" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none',padding:'10px' }} placeholder='Name' value={name} onChange={(e)=>{setname(e.target.value)}} />
                        </Box>
                        <Box sx={{ border: '1px solid lightgray', width: '100%' }}>
                            <input type="text" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none',padding:'10px' }} placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                        </Box>
                        <Box sx={{ border: '1px solid lightgray', width: '100%' }}>
                            <input type="text" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none',padding:'10px' }} placeholder='Subject' value={subject} onChange={(e)=>{setsubject(e.target.value)}}/>
                        </Box>
                        <Box sx={{ border: '1px solid lightgray', width: '100%',minHeight:'150px' }}>
                            <input type="text" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none',padding:'10px' }} placeholder='Message' value={msg} onChange={(e)=>{setmsg(e.target.value)}}/>
                        </Box>
                        <Box sx={{ backgroundColor: '#009603', padding: '16px 32px',width:'fit-content',cursor:'pointer' }} onClick={sendmsg}>
                                <Typography sx={{ color: 'white', fontWeight: 'bold' }}>SUBMIT</Typography>
                            </Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default Contact; <>

</>