import { Box, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Model from "../components/Model";
import axios from "axios";
import FIlter from "../components/Filter";

const PortFolio = () => {
    
    const [active, setActive] = useState(0)
    return (
        <>
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
        </>
    );
}

export default PortFolio;