import Footer from "../components/Footer";
import Header from "../components/Header";
import { Box, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const Services = () => {
    const md = useMediaQuery('(min-width:1000px)');
    return (
        <>
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' },margin:'50px 0px' }}>
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={6} lg={4}>
                        <Paper sx={{ padding: '10px' }}>
                            <Stack sx={{ alignItems: 'center', gap: '10px' }}>
                                <img src="img/services/service-1.jpg" alt="" style={{ width: '100%' }} />
                                <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>SHOOTING</Typography>
                                <Typography sx={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod totam suscipit aperiam, nesciunt dicta!</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Paper sx={{ padding: '10px' }}>
                            <Stack sx={{ alignItems: 'center', gap: '10px' }}>
                                <img src="img/services/service-2.jpg" alt="" style={{ width: '100%' }} />
                                <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>VIDEOS</Typography>
                                <Typography sx={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod totam suscipit aperiam, nesciunt dicta!</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Paper sx={{ padding: '10px' }}>
                            <Stack sx={{ alignItems: 'center', gap: '10px' }}>
                                <img src="img/services/service-3.jpg" alt="" style={{ width: '100%' }} />
                                <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>EDITING</Typography>
                                <Typography sx={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod totam suscipit aperiam, nesciunt dicta!</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Stack direction={md?'row':'column'} sx={{gap:'30px'}}>
                    <Stack sx={{gap:'30px'}}>
                        <Stack sx={{gap:'10px'}}>
                            <Stack direction="row" sx={{gap:'10px',alignItems:'center'}}>
                                <Box sx={{padding:'8px',backgroundColor:'#009603'}}>
                                    <Typography sx={{color:'white',fontWeight:'bold',fontSize:'18px'}}>01</Typography>
                                </Box>
                                <Typography sx={{fontSize:'20px',fontWeight:'bold',}}>FILMING AND EDITING</Typography>
                            </Stack>
                            <Typography sx={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis non sint voluptate quisquam natus amet quae ullam ex et!</Typography>
                        </Stack>
                        <Stack sx={{gap:'10px'}}>
                            <Stack direction="row" sx={{gap:'10px',alignItems:'center'}}>
                                <Box sx={{padding:'8px',backgroundColor:'#009603'}}>
                                    <Typography sx={{color:'white',fontWeight:'bold',fontSize:'18px'}}>02</Typography>
                                </Box>
                                <Typography sx={{fontSize:'20px',fontWeight:'bold',}}>ENGAGEMENT PHOTOGRAPHY</Typography>
                            </Stack>
                            <Typography sx={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis non sint voluptate quisquam natus amet quae ullam ex et!</Typography>
                        </Stack>
                        <Stack sx={{gap:'10px'}}>
                            <Stack direction="row" sx={{gap:'10px',alignItems:'center'}}>
                                <Box sx={{padding:'8px',backgroundColor:'#009603'}}>
                                    <Typography sx={{color:'white',fontWeight:'bold',fontSize:'18px'}}>03</Typography>
                                </Box>
                                <Typography sx={{fontSize:'20px',fontWeight:'bold',}}>COMMERCIAL PHOTOGRAPHY</Typography>
                            </Stack>
                            <Typography sx={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis non sint voluptate quisquam natus amet quae ullam ex et!</Typography>
                        </Stack>
                    </Stack>

                    <Stack sx={{gap:'30px'}}>
                        <Stack sx={{gap:'10px'}}>
                            <Stack direction="row" sx={{gap:'10px',alignItems:'center'}}>
                                <Box sx={{padding:'8px',backgroundColor:'#009603'}}>
                                    <Typography sx={{color:'white',fontWeight:'bold',fontSize:'18px'}}>04</Typography>
                                </Box>
                                <Typography sx={{fontSize:'20px',fontWeight:'bold',}}>SOCIAL MEDIA PHOTOGRAPHY</Typography>
                            </Stack>
                            <Typography sx={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis non sint voluptate quisquam natus amet quae ullam ex et!</Typography>
                        </Stack>
                        <Stack sx={{gap:'10px'}}>
                            <Stack direction="row" sx={{gap:'10px',alignItems:'center'}}>
                                <Box sx={{padding:'8px',backgroundColor:'#009603'}}>
                                    <Typography sx={{color:'white',fontWeight:'bold',fontSize:'18px'}}>05</Typography>
                                </Box>
                                <Typography sx={{fontSize:'20px',fontWeight:'bold',}}>EVENT PHOTOGRAPHY</Typography>
                            </Stack>
                            <Typography sx={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis non sint voluptate quisquam natus amet quae ullam ex et!</Typography>
                        </Stack>
                        <Stack sx={{gap:'10px'}}>
                            <Stack direction="row" sx={{gap:'10px',alignItems:'center'}}>
                                <Box sx={{padding:'8px',backgroundColor:'#009603'}}>
                                    <Typography sx={{color:'white',fontWeight:'bold',fontSize:'18px'}}>06</Typography>
                                </Box>
                                <Typography sx={{fontSize:'20px',fontWeight:'bold',}}>PERSONAL PHOTOGRAPHY</Typography>
                            </Stack>
                            <Typography sx={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis non sint voluptate quisquam natus amet quae ullam ex et!</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default Services;