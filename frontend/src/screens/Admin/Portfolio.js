import { Box, Button, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import { useNavigate } from "react-router-dom";
const Portfolio = ({ setAlert, setMsg, setType }) => {
    const [imgs, setImgs] = useState()
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()
    const loadimgs = async () => {
        const res = await axios.get('http://localhost:5000/user/loadimgs')
        setImgs(res.data.data)
        console.log(res.data.data)
    }
    const deleteimg= async (id) => {
        const res = await axios.post('http://localhost:5000/user/deleteimg', {id:id})
        if (res.data.status==='success') {
            setAlert(true)
            setMsg(res.data.message)
            setType('success')
            setRefresh((prev)=>!prev)
        }
    }
    useEffect(()=>{
        loadimgs()
    },[refresh])
    return (
        <>
            <Stack sx={{ padding: '20px', backgroundColor: '#f8f8f8', minHeight: '80vh' }}>
                <Stack direction={"row"} sx={{justifyContent:'space-between',marginBottom:'20px'}}>
                    <Typography sx={{fontWeight:'bold',fontSize:'22px'}}>Upload New Images</Typography>
                    <IconButton onClick={()=>{navigate('/admin/upload')}}><UploadIcon /></IconButton>
                </Stack>
                {imgs &&
                    <Grid container spacing={2}>
                        {imgs.reverse().map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginRight: '0px', marginBottom: '0px', }}>
                                <Box sx={{ position: 'relative', backgroundImage: `url(${item.img})`, minHeight: '400px', backgroundPosition: 'center', backgroundSize: 'cover', '&:hover': { '& > div': { opacity: 1 } } }}>
                                    <Stack sx={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', width: '100%', minHeight: '400px', top: '0', justifyContent: 'space-between', opacity: '0' }}>
                                        <Box sx={{ opacity: '0', mb: '10px' }}>...</Box>
                                        <IconButton onClick={()=>deleteimg(item._id)}><DeleteIcon sx={{ color: 'white', fontSize: '36px' }} /></IconButton>
                                        <Stack sx={{ alignItems: 'center' }}>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: '28px', color: 'white' }}>COLORS SPEAK</Typography>
                                            <Typography sx={{ fontSize: '18px', color: 'lime' }}>{item.value}</Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                }
            </Stack>
        </>
    );
}

export default Portfolio;