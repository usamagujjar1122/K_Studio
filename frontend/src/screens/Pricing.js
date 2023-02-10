import { Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createSearchParams, useNavigate } from "react-router-dom";

const Pricing = () => {
    const md = useMediaQuery('(min-width:1000px)');
    const navigate = useNavigate()
    return ( 
        <>
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Stack sx={{alignItems:'center'}}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '32px', textAlign: 'center', marginBottom: '10px' }}>SERVICES AND OPTIONAL PRICES</Typography>
                    <Typography sx={{color:'gray',width:{xs:"90%",md:'50%'},textAlign:'center'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sunt consequuntur ipsam eligendi ratione exercitationem laboriosam quae odit vero provident. </Typography>
                </Stack>
            </Box>
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} lg={3} sx={{marginTop:"100px"}} onClick={()=>{navigate({pathname:'/checkout',search:createSearchParams({val:'BASIC $99'}).toString()})}}>
                        <Paper sx={{'&:hover':{'& .text':{color:'white'},'& .effect':{backgroundColor:'#009603',color:'white'}},position:'relative'}}>
                            <Box className="effect" sx={{width:'150px',height:'150px',borderRadius:'50%',position:'absolute',left:'50%',top:"-18%",transform:'translateX(-50%)'}}>
                                <Stack sx={{alignItems:'center',justifyContent:'center',padding:'20px'}}>
                                    <Typography className="text" sx={{color:'#009603',fontSize:'38px',fontWeight:'bold'}}>$99</Typography>
                                    <Typography sx={{}}>1 hour</Typography>
                                </Stack>
                            </Box>
                            <Stack sx={{alignItems:'center'}}>
                            <Box className="effect" sx={{width:'100%',padding:'70px 0px 20px 0px'}}><Typography sx={{ fontWeight: 'bold', fontSize: '32px', textAlign: 'center', marginBottom: '10px' }}>BASIC</Typography></Box>
                            <Divider sx={{width:'100%'}}/>
                            <Stack sx={{gap:'20px',marginTop:'20px'}}>
                            <Typography sx={{color:'gray'}}>upto 30 photos</Typography>
                            <Typography sx={{color:'gray'}}>no retouched photots</Typography>
                            <Typography sx={{color:'gray'}}>no makeup</Typography>
                            <Typography sx={{color:'gray'}}>no stylish assistance</Typography>
                            <Box sx={{padding:'10px',backgroundColor:"#ebebeb",marginBottom:'20px'}} className="effect"><Typography sx={{fontWeight:'bold',fontSize:'20px'}}>GET APPOINTMENT</Typography></Box>
                            </Stack>
                            </Stack>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} sx={{marginTop:"100px"}} onClick={()=>{navigate({pathname:'/checkout',search:createSearchParams({val:'STANDARD $199'}).toString()})}}>
                        <Paper sx={{'&:hover':{'& .text':{color:'white'},'& .effect':{backgroundColor:'#009603',color:'white'}},position:'relative'}}>
                            <Box className="effect" sx={{width:'150px',height:'150px',borderRadius:'50%',position:'absolute',left:'50%',top:"-18%",transform:'translateX(-50%)'}}>
                                <Stack sx={{alignItems:'center',justifyContent:'center',padding:'20px'}}>
                                    <Typography className="text" sx={{color:'#009603',fontSize:'38px',fontWeight:'bold'}}>$199</Typography>
                                    <Typography sx={{}}>2 hour</Typography>
                                </Stack>
                            </Box>
                            <Stack sx={{alignItems:'center'}}>
                            <Box className="effect" sx={{width:'100%',padding:'70px 0px 20px 0px'}}><Typography sx={{ fontWeight: 'bold', fontSize: '32px', textAlign: 'center', marginBottom: '10px' }}>STANDARD</Typography></Box>
                            <Divider sx={{width:'100%'}}/>
                            <Stack sx={{gap:'20px',marginTop:'20px'}}>
                            <Typography sx={{color:'gray'}}>upto 30 photos</Typography>
                            <Typography sx={{color:'gray'}}>no retouched photots</Typography>
                            <Typography sx={{color:'gray'}}>no makeup</Typography>
                            <Typography sx={{color:'gray'}}>no stylish assistance</Typography>
                            <Box sx={{padding:'10px',backgroundColor:"#ebebeb",marginBottom:'20px'}} className="effect"><Typography sx={{fontWeight:'bold',fontSize:'20px'}}>GET APPOINTMENT</Typography></Box>
                            </Stack>
                            </Stack>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} sx={{marginTop:"100px"}} onClick={()=>{navigate({pathname:'/checkout',search:createSearchParams({val:'EXTENDED $299'}).toString()})}}>
                        <Paper sx={{'&:hover':{'& .text':{color:'white'},'& .effect':{backgroundColor:'#009603',color:'white'}},position:'relative'}}>
                            <Box className="effect" sx={{width:'150px',height:'150px',borderRadius:'50%',position:'absolute',left:'50%',top:"-18%",transform:'translateX(-50%)'}}>
                                <Stack sx={{alignItems:'center',justifyContent:'center',padding:'20px'}}>
                                    <Typography className="text" sx={{color:'#009603',fontSize:'38px',fontWeight:'bold'}}>$299</Typography>
                                    <Typography sx={{}}>3 hour</Typography>
                                </Stack>
                            </Box>
                            <Stack sx={{alignItems:'center'}}>
                            <Box className="effect" sx={{width:'100%',padding:'70px 0px 20px 0px'}}><Typography sx={{ fontWeight: 'bold', fontSize: '32px', textAlign: 'center', marginBottom: '10px' }}>EXTENDED</Typography></Box>
                            <Divider sx={{width:'100%'}}/>
                            <Stack sx={{gap:'20px',marginTop:'20px'}}>
                            <Typography sx={{color:'gray'}}>upto 30 photos</Typography>
                            <Typography sx={{color:'gray'}}>no retouched photots</Typography>
                            <Typography sx={{color:'gray'}}>no makeup</Typography>
                            <Typography sx={{color:'gray'}}>no stylish assistance</Typography>
                            <Box sx={{padding:'10px',backgroundColor:"#ebebeb",marginBottom:'20px'}} className="effect"><Typography sx={{fontWeight:'bold',fontSize:'20px'}}>GET APPOINTMENT</Typography></Box>
                            </Stack>
                            </Stack>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} sx={{marginTop:"100px"}} onClick={()=>{navigate({pathname:'/checkout',search:createSearchParams({val:'ULTIMATE $399'}).toString()})}}>
                        <Paper sx={{'&:hover':{'& .text':{color:'white'},'& .effect':{backgroundColor:'#009603',color:'white'}},position:'relative'}}>
                            <Box className="effect" sx={{width:'150px',height:'150px',borderRadius:'50%',position:'absolute',left:'50%',top:"-18%",transform:'translateX(-50%)'}}>
                                <Stack sx={{alignItems:'center',justifyContent:'center',padding:'20px'}}>
                                    <Typography className="text" sx={{color:'#009603',fontSize:'38px',fontWeight:'bold'}}>$399</Typography>
                                    <Typography sx={{}}>5 hour</Typography>
                                </Stack>
                            </Box>
                            <Stack sx={{alignItems:'center'}}>
                            <Box className="effect" sx={{width:'100%',padding:'70px 0px 20px 0px'}}><Typography sx={{ fontWeight: 'bold', fontSize: '32px', textAlign: 'center', marginBottom: '10px' }}>ULTIMATE</Typography></Box>
                            <Divider sx={{width:'100%'}}/>
                            <Stack sx={{gap:'20px',marginTop:'20px'}}>
                            <Typography sx={{color:'gray'}}>upto 30 photos</Typography>
                            <Typography sx={{color:'gray'}}>no retouched photots</Typography>
                            <Typography sx={{color:'gray'}}>no makeup</Typography>
                            <Typography sx={{color:'gray'}}>no stylish assistance</Typography>
                            <Box sx={{padding:'10px',backgroundColor:"#ebebeb",marginBottom:'20px'}} className="effect"><Typography sx={{fontWeight:'bold',fontSize:'20px'}}>GET APPOINTMENT</Typography></Box>
                            </Stack>
                            </Stack>

                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            {/* FAQ */}

            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Stack sx={{alignItems:'center'}}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '32px', textAlign: 'center', marginBottom: '10px' }}>SERVICES AND OPTIONAL PRICES</Typography>
                </Stack>
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
                                <Typography sx={{fontSize:'24px',fontWeight:'bold',}}>EVENT PHOTOGRAPHY</Typography>
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
 
export default Pricing;