import { Box, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <Grid container spacing={4} sx={{ backgroundColor: '#000', padding: '50px 50px',  justifyContent: 'space-between', '& p': { color: "gray" },  }}>
                <Grid item xs={12} sm={6} lg={3} sx={{  display:'flex',flexDirection:"column",gap: '10px' }}>
                    <Box><img src="img/f-logo.png" alt="" /></Box>
                    <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro optio rerum fugiat cumque non neque tempore provident fugit laboriosam unde.</Typography>
                    <Stack direction='row' sx={{ gap: "10px" }}>
                        <FacebookIcon sx={{ color: 'white' }} />
                        <TwitterIcon sx={{ color: 'white' }} />
                        <YouTubeIcon sx={{ color: 'white' }} />
                        <InstagramIcon sx={{ color: 'white' }} />
                    </Stack>
                </Grid >
                <Grid item xs={12} sm={6} lg={3} sx={{  display:'flex',flexDirection:"column",gap: '10px' }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: 'bold', color: 'white !important' }}>INSTAGRAM</Typography>
                    <Grid container spacing={1}>
                        <Grid item ><img src="img/instagram/insta-1.jpg" alt="" /></Grid>
                        <Grid item ><img src="img/instagram/insta-2.jpg" alt="" /></Grid>
                        <Grid item ><img src="img/instagram/insta-3.jpg" alt="" /></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} sx={{ display:'flex',flexDirection:"column", gap: "10px" }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: 'bold', color: 'white !important' }}>QUICK LINKS</Typography>
                    <Stack direction='row' sx={{ gap: "50px", '& p': { cursor: 'pointer' } }}>
                        <Stack sx={{ gap: "10px" }}>
                            <Link to="/" style={{textDecoration:'none'}}><Typography>Home</Typography></Link>
                            <Link to="/about" style={{textDecoration:'none'}}><Typography>About</Typography></Link>
                            <Link to="/contact" style={{textDecoration:'none'}}><Typography>Contact</Typography></Link>
                        </Stack>
                        <Stack sx={{ gap: '10px' }}>
                        <Link to="/portfolio" style={{textDecoration:'none'}}><Typography>Portfolio</Typography></Link>
                        <Link to="/services" style={{textDecoration:'none'}}><Typography>Services</Typography></Link>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} sx={{ display:'flex',flexDirection:"column", gap: '10px' }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: 'bold', color: 'white !important' }}>SUBSCRIBE</Typography>
                    <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero harum necessitatibus dignissimos quis beatae quas odio libero numquam. Excepturi, mollitia.</Typography>
                    <Box sx={{ border: "1px solid green", display: 'flex', justifyContent: 'space-between' }}>
                        <input type="text" style={{ backgroundColor: "transparent", flex: 10, border: 'none', outline: 'none', color: "white", paddingLeft: '5px', fontSize: "18px" }} />
                        <Box sx={{ backgroundColor: 'green', padding: '5px', flex: 1 }}><SendIcon sx={{ color: "white", marginLeft: '2px' }} /></Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;