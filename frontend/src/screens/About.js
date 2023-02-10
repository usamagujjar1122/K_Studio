import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useMediaQuery from '@mui/material/useMediaQuery';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
    const md = useMediaQuery('(min-width:1000px)');
    const navigate = useNavigate()
    return (
        <>
            {/* Firste */}
            <Stack direction={md ? 'row' : 'column'} sx={{ marginBottom: '50px' }}>
                <Box sx={{ flex: 1, minHeight: "100vh", backgroundImage: 'url(img/about/about-pic.jpg)',backgroundPosition:'center' }}></Box>
                <Stack sx={{ flex: 1, padding: '50px', backgroundColor: '#f5f5f5', gap: '20px' }}>
                    <Typography sx={{ fontSize: '38px', fontWeight: 'bold', textTransform: 'uppercase' }}>Capturing the moments that captivate your heart</Typography>
                    <Typography sx={{ color: 'gray'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, saepe. Tempora laborum libero velit nihil quia accusantium, at nobis ipsa, laboriosam voluptates dolorem nesciunt deleniti quasi dolorum ducimus autem doloribus!</Typography>
                    <Stack direction="row" sx={{ gap: '30px' }}>
                        <Box sx={{ padding: '20px', backgroundColor: 'white' }}><img src="img/about/list-1.png" alt="" /></Box>
                        <Stack>
                            <Typography sx={{ FontWeight: 'bold', fontSize: '24px' }}>PROFESSIONALISM</Typography>
                            <Typography sx={{ color: 'gray' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam cupiditate a tempora eius rem, veniam voluptas mollitia suscipit sint aliquid?</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" sx={{ gap: '30px' }}>
                        <Box sx={{ padding: '20px', backgroundColor: 'white' }}><img src="img/about/list-2.png" alt="" /></Box>
                        <Stack>
                            <Typography sx={{ FontWeight: 'bold', fontSize: '24px' }}>INDIVIDUAL APPROACH</Typography>
                            <Typography sx={{ color: 'gray' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam cupiditate a tempora eius rem, veniam voluptas mollitia suscipit sint aliquid?</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" sx={{ gap: '30px' }}>
                        <Box sx={{ padding: '20px', backgroundColor: 'white' }}><img src="img/about/list-3.png" alt="" /></Box>
                        <Stack>
                            <Typography sx={{ FontWeight: 'bold', fontSize: '24px' }}>FLEXIBLE SCHEDULE</Typography>
                            <Typography sx={{ color: 'gray' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam cupiditate a tempora eius rem, veniam voluptas mollitia suscipit sint aliquid?</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" sx={{ gap: '30px' }}>
                        <Box sx={{ padding: '20px', backgroundColor: 'white' }}><img src="img/about/list-4.png" alt="" /></Box>
                        <Stack>
                            <Typography sx={{ FontWeight: 'bold', fontSize: '24px' }}>EXPERIENCE</Typography>
                            <Typography sx={{ color: 'gray' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam cupiditate a tempora eius rem, veniam voluptas mollitia suscipit sint aliquid?</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            {/* TEAM */}

            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <Stack sx={{ gap: '10px' }}>
                        <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>OUR TEAM</Typography>
                        <Typography sx={{ maxWidth: '500px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod totam suscipit aperiam, nesciunt dicta!</Typography>
                    </Stack>
                    <Box sx={{ backgroundColor: '#009603', padding: '20px',cursor:'pointer' }} onClick={()=>{navigate('/pricing')}}>
                        <Typography sx={{ color: 'white', fontWeight: 'bold' }}>APPOINTMENT</Typography>
                    </Box>
                </Stack>

                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3} >
                        <Box sx={{ backgroundColor: '#f5f5f5' }}>
                            <Stack>
                                <Box sx={{ backgroundImage: 'url(img/team/team-1.jpg)', minHeight: { xs: '400px', sm: '300px' }, backgroundPosition: 'center', backgroundSize: 'cover' }}></Box>
                                <Stack sx={{ alignItems: 'center', margin: '20px 0px' }}>
                                    <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>ALLAN WALKER</Typography>
                                    <Typography sx={{ color: 'green' }}>Photographer</Typography>
                                    <Stack direction='row' sx={{ gap: "20px", margin: '20px 0px' }}>
                                        <FacebookIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <TwitterIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <YouTubeIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <InstagramIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ backgroundColor: '#f5f5f5' }}>
                            <Stack>
                                <Box sx={{ backgroundImage: 'url(img/team/team-2.jpg)', minHeight: { xs: '400px', sm: '300px' }, backgroundPosition: 'center', backgroundSize: 'cover' }}></Box>
                                <Stack sx={{ alignItems: 'center', margin: '20px 0px' }}>
                                    <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>AVA MAX</Typography>
                                    <Typography sx={{ color: 'green' }}>Director</Typography>
                                    <Stack direction='row' sx={{ gap: "20px", margin: '20px 0px' }}>
                                        <FacebookIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <TwitterIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <YouTubeIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <InstagramIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ backgroundColor: '#f5f5f5' }}>
                            <Stack>
                                <Box sx={{ backgroundImage: 'url(img/team/team-3.jpg)', minHeight: { xs: '400px', sm: '300px' }, backgroundPosition: 'center', backgroundSize: 'cover' }}></Box>
                                <Stack sx={{ alignItems: 'center', margin: '20px 0px' }}>
                                    <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>BILLIE ELLISH</Typography>
                                    <Typography sx={{ color: 'green' }}>Manager</Typography>
                                    <Stack direction='row' sx={{ gap: "20px", margin: '20px 0px' }}>
                                        <FacebookIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <TwitterIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <YouTubeIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <InstagramIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ backgroundColor: '#f5f5f5' }}>
                            <Stack>
                                <Box sx={{ backgroundImage: 'url(img/team/team-4.jpg)', minHeight: { xs: '400px', sm: '300px' }, backgroundPosition: 'center', backgroundSize: 'cover' }}></Box>
                                <Stack sx={{ alignItems: 'center', margin: '20px 0px' }}>
                                    <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>KAMRAN KHAN</Typography>
                                    <Typography sx={{ color: 'green' }}>Assistant</Typography>
                                    <Stack direction='row' sx={{ gap: "20px", margin: '20px 0px' }}>
                                        <FacebookIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <TwitterIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <YouTubeIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                        <InstagramIcon sx={{ color: 'gray', fontSize: '18px' }} />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* AD */}
            <Box sx={{ position: 'relative', }}>
                <Box sx={{ minHeight: '70vh', minWidth: '100%', backgroundImage: 'url(img/cta-bg.jpg)', backgroundPosition: 'center' }}></Box>
                <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%,-50%)", alignItems: 'center', gap: "16px",width:{xs:'90%',lg:'70%'} }}>
                    <Typography sx={{ color: "white", fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>WANNA PROMOTE YOUR BRAND</Typography>
                    <Typography sx={{ color: "white", textAlign: 'center' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos suscipit velit, esse laudantium itaque sunt expedita perferendis molestias dolorem nostrum. </Typography>
                    <Box sx={{ backgroundColor: '#009603', padding: '20px' }}>
                        <Typography sx={{ color: 'white', fontWeight: 'bold' }}>CONTACT US</Typography>
                    </Box>
                </Stack>
            </Box>


            {/* REVIEWS */}

            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Stack sx={{alignItems:'center'}}>
                    <Typography sx={{fontWeight:'bold',fontSize:'32px'}}>WHAT CLIENT SAYS</Typography>
                    <Typography sx={{color:'gray',width:{xs:"90%",md:"50%",textAlign:'center'}}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis deserunt iusto sunt, quia, tempore beatae sapiente veritatis commodi fuga enim iste inventore? Incidunt explicabo ipsam dolorum molestiae? Fugit, culpa?</Typography>
                </Stack>

                <Grid container sx={{marginTop:'70px'}} spacing={8}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Stack sx={{position:'relative',gap:'10px','&:before':{content:'""',position:'absolute',top:'-14%',backgroundImage:'url(img/testimonial/quote.png)',backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'26px',width:'26px'}}}>
                            <Box sx={{position:'absolute',height:'5px',backgroundColor:'lightgray',right:'0%',width:'90%',top:'-9%'}}> </Box>
                            <Stack direction="row" sx={{alignItems:'center',justifyContent:'space-between'}}>
                                <Avatar src="img/testimonial/ta-1.jpg" sx={{width:'100px',height:'100px'}}></Avatar>
                                <Stack>
                                    <Typography sx={{fontWeight:'bold',fontSize:'24px'}}>ANDREW FILDER</Typography>
                                    <Typography sx={{color:'gray',fontSize:'18px'}}>@andrew_filder</Typography>
                                </Stack>
                            </Stack>
                            <Typography sx={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus amet soluta dolor dignissimos at sunt eligendi repellat recusandae enim maxime quidem, vero eius illum error porro? Suscipit, ea deleniti.</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Stack sx={{position:'relative',gap:'10px','&:before':{content:'""',position:'absolute',top:'-14%',backgroundImage:'url(img/testimonial/quote.png)',backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'26px',width:'26px'}}}>
                            <Box sx={{position:'absolute',height:'5px',backgroundColor:'lightgray',right:'0%',width:'90%',top:'-9%'}}> </Box>
                            <Stack direction="row" sx={{alignItems:'center',justifyContent:'space-between'}}>
                                <Avatar src="img/testimonial/ta-2.jpg" sx={{width:'100px',height:'100px'}}></Avatar>
                                <Stack>
                                    <Typography sx={{fontWeight:'bold',fontSize:'24px'}}>DAVID AXAR</Typography>
                                    <Typography sx={{color:'gray',fontSize:'18px'}}>@david_axar</Typography>
                                </Stack>
                            </Stack>
                            <Typography sx={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus amet soluta dolor dignissimos at sunt eligendi repellat recusandae enim maxime quidem, vero eius illum error porro? Suscipit, ea deleniti.</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Stack sx={{position:'relative',gap:'10px','&:before':{content:'""',position:'absolute',top:'-14%',backgroundImage:'url(img/testimonial/quote.png)',backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'26px',width:'26px'}}}>
                            <Box sx={{position:'absolute',height:'5px',backgroundColor:'lightgray',right:'0%',width:'90%',top:'-9%'}}> </Box>
                            <Stack direction="row" sx={{alignItems:'center',justifyContent:'space-between'}}>
                                <Avatar src="img/testimonial/ta-3.jpg" sx={{width:'100px',height:'100px'}}></Avatar>
                                <Stack>
                                    <Typography sx={{fontWeight:'bold',fontSize:'24px'}}>BEBE REXA</Typography>
                                    <Typography sx={{color:'gray',fontSize:'18px'}}>@bebe_rexa</Typography>
                                </Stack>
                            </Stack>
                            <Typography sx={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus amet soluta dolor dignissimos at sunt eligendi repellat recusandae enim maxime quidem, vero eius illum error porro? Suscipit, ea deleniti.</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Stack sx={{position:'relative',gap:'10px','&:before':{content:'""',position:'absolute',top:'-14%',backgroundImage:'url(img/testimonial/quote.png)',backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'26px',width:'26px'}}}>
                            <Box sx={{position:'absolute',height:'5px',backgroundColor:'lightgray',right:'0%',width:'90%',top:'-9%'}}> </Box>
                            <Stack direction="row" sx={{alignItems:'center',justifyContent:'space-between'}}>
                                <Avatar src="img/testimonial/ta-4.jpg" sx={{width:'100px',height:'100px'}}></Avatar>
                                <Stack>
                                    <Typography sx={{fontWeight:'bold',fontSize:'24px'}}>SARA LOGAN</Typography>
                                    <Typography sx={{color:'gray',fontSize:'18px'}}>@sara_logan</Typography>
                                </Stack>
                            </Stack>
                            <Typography sx={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus amet soluta dolor dignissimos at sunt eligendi repellat recusandae enim maxime quidem, vero eius illum error porro? Suscipit, ea deleniti.</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default About;