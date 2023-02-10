import { Box, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useEffect } from "react";
import Slider from "react-slick";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Model from "../components/Model";
import { Link } from "react-router-dom";
import FIlter from "../components/Filter";
const Home = () => {
    const images = [
        { src: 'img/portfolio/pf-1.jpg' },
        { src: 'img/portfolio/pf-2.jpg' },
        { src: 'img/portfolio/pf-3.jpg' },
        { src: 'img/portfolio/pf-4.jpg' },
        { src: 'img/portfolio/pf-5.jpg' },
        { src: 'img/portfolio/pf-6.jpg' },
        { src: 'img/portfolio/pf-7.jpg' },
        { src: 'img/portfolio/pf-8.jpg' },
        { src: 'img/portfolio/pf-9.jpg' },
        { src: 'img/portfolio/pf-10.jpg' },
        { src: 'img/portfolio/pf-11.jpg' },
    ]
    const [filter,setFilter] = useState(images)
    const [img, setImg] = useState()
    const [active, setActive] = useState(0)
    const sm = useMediaQuery('(min-width:0px)');
    const md = useMediaQuery('(min-width:700px)');
    const lg = useMediaQuery('(min-width:1200px)');
    const [x, X] = useState(3);
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        if (lg) {
            X(3)
        } else if (md) {
            X(2)
        } else if (sm) {
            X(1)
        }
    }, [lg, md, sm])

    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                style={{ ...style, right: '5%', top: '45%', position: 'absolute', zIndex: 1 }}
                onClick={onClick}
            >
                <IconButton sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.3)' }}><ChevronRightIcon /></IconButton></div>

        );
    }

    function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                style={{ ...style, left: '6%', top: '45%', position: 'absolute', zIndex: 1 }}
                onClick={onClick}
            >
                <IconButton sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.3)' }}><ChevronLeftIcon /></IconButton></div>
        );
    }

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const settings2 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: x,
        autoplay: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            {/* Main */}

            <Box sx={{ minHeight: '100vh' }}>
                <Slider {...settings}>
                    <Box sx={{ position: 'relative' }}>
                        <Box sx={{ minHeight: '100vh', minWidth: '100%', backgroundImage: 'url(img/hero/hero-1.jpg)', backgroundPosition: 'center' }}></Box>
                        <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%,-50%)", alignItems: 'center', gap: "16px" }}>
                            <Typography sx={{ color: "white", fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>PHOTOGRAPHY STUDIO</Typography>
                            <Typography sx={{ color: "white", textAlign: 'center' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos suscipit velit, esse laudantium itaque sunt expedita perferendis molestias dolorem nostrum. </Typography>
                            <Box sx={{ backgroundColor: '#009603', padding: '20px' }}>
                                <Typography sx={{ color: 'white', fontWeight: 'bold' }}>CONTACT US</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{ position: 'relative' }}>
                        <Box sx={{ minHeight: '100vh', minWidth: '100%', backgroundImage: 'url(img/hero/hero-2.jpg)', backgroundPosition: 'center' }}></Box>
                        <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%,-50%)", alignItems: 'center', gap: "16px" }}>
                            <Typography sx={{ color: "white", fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>PHOTOGRAPHY STUDIO</Typography>
                            <Typography sx={{ color: "white", textAlign: 'center' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos suscipit velit, esse laudantium itaque sunt expedita perferendis molestias dolorem nostrum. </Typography>
                            <Link to="contact" style={{textDecoration:'none'}}>
                            <Box sx={{ backgroundColor: '#009603', padding: '20px' }}>
                                <Typography sx={{ color: 'white', fontWeight: 'bold' }}>CONTACT US</Typography>
                            </Box>
                            </Link>
                        </Stack>
                    </Box>
                </Slider>
            </Box>

            {/* Services */}
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, transform: 'translateY(-50px)' }}>
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


            {/* Categories */}

            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <Stack sx={{ gap: '10px' }}>
                        <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>CATAGORIES</Typography>
                        <Typography sx={{ maxWidth: '500px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod totam suscipit aperiam, nesciunt dicta!</Typography>
                    </Stack>
                    <Link to="/portfolio" style={{textDecoration:'none'}}><Box sx={{ backgroundColor: '#009603', padding: '20px',cursor:'pointer' }}>
                        <Typography sx={{ color: 'white', fontWeight: 'bold' }}>VIEW ALL</Typography>
                    </Box></Link>
                </Stack>

                <Slider {...settings2}>
                    <Box sx={{ padding: '0px 10px' }}>
                        <img src="img/categories/cat-1.jpg" alt="" style={{ margin: 'auto', width: '95%', marginBottom: '20px' }} />
                        <Typography sx={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>ANIMAL</Typography>
                        <Typography sx={{ fontSize: '22px', textAlign: 'center', color: 'green' }}>120 pictures</Typography>
                    </Box>
                    <Box sx={{ padding: '0px 10px' }}>
                        <img src="img/categories/cat-2.jpg" alt="" style={{ margin: 'auto', width: '95%', marginBottom: '20px' }} />
                        <Typography sx={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>ANIMAL</Typography>
                        <Typography sx={{ fontSize: '22px', textAlign: 'center', color: 'green' }}>120 pictures</Typography>
                    </Box>
                    <Box sx={{ padding: '0px 10px' }}>
                        <img src="img/categories/cat-3.jpg" alt="" style={{ margin: 'auto', width: '95%', marginBottom: '20px' }} />
                        <Typography sx={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>ANIMAL</Typography>
                        <Typography sx={{ fontSize: '22px', textAlign: 'center', color: 'green' }}>120 pictures</Typography>
                    </Box>
                    <Box sx={{ padding: '0px 10px' }}>
                        <img src="img/categories/cat-4.jpg" alt="" style={{ margin: 'auto', width: '95%', marginBottom: '20px' }} />
                        <Typography sx={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>ANIMAL</Typography>
                        <Typography sx={{ fontSize: '22px', textAlign: 'center', color: 'green' }}>120 pictures</Typography>
                    </Box>
                    <Box sx={{ padding: '0px 10px' }}>
                        <img src="img/categories/cat-5.jpg" alt="" style={{ margin: 'auto', width: '95%', marginBottom: '20px' }} />
                        <Typography sx={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>ANIMAL</Typography>
                        <Typography sx={{ fontSize: '22px', textAlign: 'center', color: 'green' }}>120 pictures</Typography>
                    </Box>


                </Slider>
            </Box>

            {/* Latest Work */}
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '32px', textAlign: 'center', marginBottom: '10px' }}>OUR LATEST WORK</Typography>
                <Stack direction="row" sx={{ justifyContent: 'center', '& p': { cursor: 'pointer' }, marginBottom: '20px' }}>
                    <Typography sx={{ fontSize: '20px', margin: '0px 20px', color: active === 0 ? 'green' : 'gray' }} onClick={() => { setActive(0) }}>All</Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography sx={{ fontSize: '20px', margin: '0px 20px', color: active === 1 ? 'green' : 'gray' }} onClick={async () => { setActive(1) }}>Fashion</Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography sx={{ fontSize: '20px', margin: '0px 20px', color: active === 2 ? 'green' : 'gray' }} onClick={() => { setActive(2); }} >Lifestyle</Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography sx={{ fontSize: '20px', margin: '0px 20px', color: active === 3 ? 'green' : 'gray' }} onClick={() => { setActive(3); }}>Nature</Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography sx={{ fontSize: '20px', margin: '0px 20px', color: active === 4 ? 'green' : 'gray' }} onClick={() => { setActive(4); }}>Wedding</Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography sx={{ fontSize: '20px', margin: '0px 20px', color: active === 5 ? 'green' : 'gray' }} onClick={() => { setActive(5); }}>Videos</Typography>
                </Stack>
                <FIlter active={active}/>
            </Box>

            <Model open={open} img={img} setOpen={setOpen} />
        </>
    );
}

export default Home;