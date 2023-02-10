import { Box, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Collapse from '@mui/material/Collapse';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Popover from '@mui/material/Popover';
const Header = () => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [checked, setChecked] = useState(false)
    const [user, setUser] = useState()
    const [token, setToken] = useState(localStorage.getItem('token'))
    const loadUser = async () => {
        if(token) {
        const res = await axios.post('http://localhost:5000/user/loaduser', { token: token })
        setUser(res.data.data)
        }
    }
    useEffect(() => {

        setToken(localStorage.getItem('token'))
        
        loadUser()
    },[token])
    return (
        <>
            <Box sx={{ backgroundColor: 'white' }}>
                <Stack direction={"row"} sx={{ padding: '30px 40px', alignItems: 'center', justifyContent: 'space-between' }}>

                    <Link to=""><Box><img src="img/logo.png" alt="" /></Box></Link>
                    <Stack direction="row" sx={{ gap: '10px' }}>
                        {token ? user &&
                            <>
                                <Typography sx={{ position: 'relative', padding: '8px', border: '1px solid #009603', color: '#009603 !important', display: { xs: 'block', lg: 'none' } }} aria-describedby={id} onClick={handleClick}>{user.fullname}</Typography>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Box sx={{border:'1px solid black',padding:'16px',cursor:'pointer'}} onClick={()=>{localStorage.removeItem('token');window.location.reload()}}> <Typography sx={{fontWeight:'bold'}}>LOGOUT</Typography> </Box>
                                    <Box sx={{border:'1px solid black',padding:'16px',cursor:'pointer'}} onClick={()=>{navigate('/orders')}}> <Typography sx={{fontWeight:'bold'}}>Orders</Typography> </Box>
                                </Popover>
                            </>
                            :
                            <>
                                <Link to="/register" style={{ textDecoration: 'none' }}><Typography sx={{ position: 'relative', backgroundColor: '#009603', padding: '8px', color: 'white !important', display: { xs: 'block', lg: 'none' },marginLeft:'20px' }}>REGISTER</Typography></Link>
                                <Link to="/login" style={{ textDecoration: 'none' }}><Typography sx={{ position: 'relative', padding: '8px 24px', border: '1px solid #009603', display: { xs: 'block', lg: 'none' } }}>LOGIN</Typography></Link>
                            </>
                        }
                        <IconButton onClick={() => { setChecked((prev) => !prev) }}><MenuIcon sx={{ fontSize: "30px", display: { xs: 'block', lg: 'none' } }} /></IconButton>
                    </Stack>
                    <Stack direction={"row"} sx={{ alignItems: "center", gap: '30px', '& p': { color: 'black', fontSize: '18px', fontFamily: 'Quantico', fontWeight: "700", cursor: 'pointer' }, display: { xs: 'none', lg: 'flex' } }}>
                        <Link to="/" style={{ textDecoration: 'none' }}><Typography sx={{ position: 'relative', '&:after': { content: '""', height: "5px", backgroundColor: "#009603", width: '100%', position: 'absolute', left: 0, bottom: '-50%', opacity: '0' }, '&:hover': { '&:after': { opacity: 1 } } }}>HOME</Typography></Link>
                        <Link to="about" style={{ textDecoration: 'none' }}><Typography sx={{ position: 'relative', '&:after': { content: '""', height: "5px", backgroundColor: "#009603", width: '100%', position: 'absolute', left: 0, bottom: '-50%', opacity: '0' }, '&:hover': { '&:after': { opacity: 1 } } }}>ABOUT</Typography></Link>
                        <Link to="/services" style={{ textDecoration: 'none' }}><Typography sx={{ position: 'relative', '&:after': { content: '""', height: "5px", backgroundColor: "#009603", width: '100%', position: 'absolute', left: 0, bottom: '-50%', opacity: '0' }, '&:hover': { '&:after': { opacity: 1 } } }}>SERVICES</Typography></Link>
                        <Link to="/pricing" style={{ textDecoration: 'none' }}><Typography sx={{ position: 'relative', '&:after': { content: '""', height: "5px", backgroundColor: "#009603", width: '100%', position: 'absolute', left: 0, bottom: '-50%', opacity: '0' }, '&:hover': { '&:after': { opacity: 1 } } }}>PRICING</Typography></Link>
                        <Link to="/portfolio" style={{ textDecoration: 'none' }}><Typography sx={{ position: 'relative', '&:after': { content: '""', height: "5px", backgroundColor: "#009603", width: '100%', position: 'absolute', left: 0, bottom: '-50%', opacity: '0' }, '&:hover': { '&:after': { opacity: 1 } } }}>PORTFOLIO</Typography></Link>
                        <Link to="/contact" style={{ textDecoration: 'none' }}><Typography sx={{ position: 'relative', '&:after': { content: '""', height: "5px", backgroundColor: "#009603", width: '100%', position: 'absolute', left: 0, bottom: '-50%', opacity: '0' }, '&:hover': { '&:after': { opacity: 1 } } }}>CONTACT</Typography></Link>
                        {token ? user &&
                            <>
                                <Typography sx={{ position: 'relative', padding: '16px', border: '1px solid #009603', color: '#009603 !important' }}  aria-describedby={id} onClick={handleClick} >{user.fullname}</Typography>
                            </>
                            :
                            <>
                                <Link to="/register" style={{ textDecoration: 'none' }}><Typography sx={{ position: 'relative', backgroundColor: '#009603', padding: '16px', color: 'white !important' }}>REGISTER</Typography></Link>
                                <Link to="/login" style={{ textDecoration: 'none' }}><Typography sx={{ position: 'relative', padding: '16px 24px', border: '1px solid #009603' }}>LOGIN</Typography></Link>
                            </>
                        }
                    </Stack>
                </Stack>
                <Collapse in={checked}>
                    <Stack sx={{ margin: "0px 40px", backgroundColor: '#222', color: 'white' }}>
                        <Typography sx={{ position: 'relative', fontFamily: 'Quantico', padding: '16px', '&:hover': { backgroundColor: "green" } }}>HOME</Typography>
                        <Typography sx={{ position: 'relative', fontFamily: 'Quantico', padding: '16px', '&:hover': { backgroundColor: "green" } }}>ABOUT</Typography>
                        <Typography sx={{ position: 'relative', fontFamily: 'Quantico', padding: '16px', '&:hover': { backgroundColor: "green" } }}>SERVICES</Typography>
                        <Typography sx={{ position: 'relative', fontFamily: 'Quantico', padding: '16px', '&:hover': { backgroundColor: "green" } }}>PRICING</Typography>
                        <Typography sx={{ position: 'relative', fontFamily: 'Quantico', padding: '16px', '&:hover': { backgroundColor: "green" } }}>PORTFOLIO</Typography>

                    </Stack>
                </Collapse>
            </Box>
        </>

    );
}

export default Header;