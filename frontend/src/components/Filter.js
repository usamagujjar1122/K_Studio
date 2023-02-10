import { Box, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Model from "../components/Model";
import axios from "axios";

const FIlter = ({active}) => {
    // const handlefilter = (value) => {
    //     imgs.map((item) => {
    //         if (item.value === value) {
    //             console.log(value)
    //         }
    //     })
    // }
    const [filter, setFilter] = useState()
    const [imgs, setImgs] = useState()
    const loadimgs = async () => {
        const res = await axios.get('http://localhost:5000/user/loadimgs')
        setImgs(res.data.data)
        setFilter(res.data.data)
    }
    useEffect(() => {
        loadimgs()
    }, [])
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState()
    return ( 
        <>
        {active === 0 && filter && <>
            <Box>
                <Grid container spacing={2}>
                    {filter.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginRight: '0px', marginBottom: '0px', }}>
                            <Box sx={{ position: 'relative', backgroundImage: `url(${item.img})`, minHeight: '400px', backgroundPosition: 'center', backgroundSize: 'cover', '&:hover': { '& > div': { opacity: 1 } } }}>
                                <Stack sx={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', width: '100%', minHeight: '400px', top: '0', justifyContent: 'space-between', opacity: '0' }}>
                                    <Box sx={{ opacity: '0', mb: '10px' }}>...</Box>
                                    <IconButton onClick={() => { setImg(item.img); setOpen(true) }}><AddIcon sx={{ color: 'white', fontSize: '36px' }} /></IconButton>
                                    <Stack sx={{ alignItems: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '28px', color: 'white' }}>COLORS SPEAK</Typography>
                                        <Typography sx={{ fontSize: '18px', color: 'lime' }}>{item.value}</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
        }
        {active === 1 && <>
            <Box>
                <Grid container spacing={2}>
                    {filter.filter((item)=>item.value==="Fashion").map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginRight: '0px', marginBottom: '0px', }}>
                            <Box sx={{ position: 'relative', backgroundImage: `url(${item.img})`, minHeight: '400px', backgroundPosition: 'center', backgroundSize: 'cover', '&:hover': { '& > div': { opacity: 1 } } }}>
                                <Stack sx={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', width: '100%', minHeight: '400px', top: '0', justifyContent: 'space-between', opacity: '0' }}>
                                    <Box sx={{ opacity: '0', mb: '10px' }}>...</Box>
                                    <IconButton onClick={() => { setImg(item.img); setOpen(true) }}><AddIcon sx={{ color: 'white', fontSize: '36px' }} /></IconButton>
                                    <Stack sx={{ alignItems: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '28px', color: 'white' }}>COLORS SPEAK</Typography>
                                        <Typography sx={{ fontSize: '18px', color: 'lime' }}>{item.value}</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
        }
        {active === 2 && <>
            <Box>
                <Grid container spacing={2}>
                    {filter.filter((item)=>item.value==="Lifestyle").map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginRight: '0px', marginBottom: '0px', }}>
                            <Box sx={{ position: 'relative', backgroundImage: `url(${item.img})`, minHeight: '400px', backgroundPosition: 'center', backgroundSize: 'cover', '&:hover': { '& > div': { opacity: 1 } } }}>
                                <Stack sx={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', width: '100%', minHeight: '400px', top: '0', justifyContent: 'space-between', opacity: '0' }}>
                                    <Box sx={{ opacity: '0', mb: '10px' }}>...</Box>
                                    <IconButton onClick={() => { setImg(item.img); setOpen(true) }}><AddIcon sx={{ color: 'white', fontSize: '36px' }} /></IconButton>
                                    <Stack sx={{ alignItems: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '28px', color: 'white' }}>COLORS SPEAK</Typography>
                                        <Typography sx={{ fontSize: '18px', color: 'lime' }}>{item.value}</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
        }
        {active === 3 && <>
            <Box>
                <Grid container spacing={2}>
                    {filter.filter((item)=>item.value==="Nature").map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginRight: '0px', marginBottom: '0px', }}>
                            <Box sx={{ position: 'relative', backgroundImage: `url(${item.img})`, minHeight: '400px', backgroundPosition: 'center', backgroundSize: 'cover', '&:hover': { '& > div': { opacity: 1 } } }}>
                                <Stack sx={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', width: '100%', minHeight: '400px', top: '0', justifyContent: 'space-between', opacity: '0' }}>
                                    <Box sx={{ opacity: '0', mb: '10px' }}>...</Box>
                                    <IconButton onClick={() => { setImg(item.img); setOpen(true) }}><AddIcon sx={{ color: 'white', fontSize: '36px' }} /></IconButton>
                                    <Stack sx={{ alignItems: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '28px', color: 'white' }}>COLORS SPEAK</Typography>
                                        <Typography sx={{ fontSize: '18px', color: 'lime' }}>{item.value}</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
        }
        {active === 4 && <>
            <Box>
                <Grid container spacing={2}>
                    {filter.filter((item)=>item.value==="Wedding").map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginRight: '0px', marginBottom: '0px', }}>
                            <Box sx={{ position: 'relative', backgroundImage: `url(${item.img})`, minHeight: '400px', backgroundPosition: 'center', backgroundSize: 'cover', '&:hover': { '& > div': { opacity: 1 } } }}>
                                <Stack sx={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', width: '100%', minHeight: '400px', top: '0', justifyContent: 'space-between', opacity: '0' }}>
                                    <Box sx={{ opacity: '0', mb: '10px' }}>...</Box>
                                    <IconButton onClick={() => { setImg(item.img); setOpen(true) }}><AddIcon sx={{ color: 'white', fontSize: '36px' }} /></IconButton>
                                    <Stack sx={{ alignItems: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '28px', color: 'white' }}>COLORS SPEAK</Typography>
                                        <Typography sx={{ fontSize: '18px', color: 'lime' }}>{item.value}</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
        }
        {active === 5 && <>
            <Box>
                <Grid container spacing={2}>
                    {filter.filter((item)=>item.value==="Video").map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginRight: '0px', marginBottom: '0px', }}>
                            <Box sx={{ position: 'relative', backgroundImage: `url(${item.img})`, minHeight: '400px', backgroundPosition: 'center', backgroundSize: 'cover', '&:hover': { '& > div': { opacity: 1 } } }}>
                                <Stack sx={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', width: '100%', minHeight: '400px', top: '0', justifyContent: 'space-between', opacity: '0' }}>
                                    <Box sx={{ opacity: '0', mb: '10px' }}>...</Box>
                                    <IconButton onClick={() => { setImg(item.img); setOpen(true) }}><AddIcon sx={{ color: 'white', fontSize: '36px' }} /></IconButton>
                                    <Stack sx={{ alignItems: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '28px', color: 'white' }}>COLORS SPEAK</Typography>
                                        <Typography sx={{ fontSize: '18px', color: 'lime' }}>{item.value}</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
        }
    <Model open={open} img={img} setOpen={setOpen} />
    </>
     );
}
 
export default FIlter;