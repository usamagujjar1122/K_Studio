import { Box, Typography } from "@mui/material";

const NoPage = () => {
    return ( 
        <>
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Typography sx={{fontWeight:'bold',fontSize:'32px',textAlign:'center'}}>ERROR</Typography>
                <Typography sx={{fontWeight:'bold',fontSize:'22px',textAlign:'center',color:'gray'}}>404 NOT FOUND</Typography>

            </Box>
        </>
     );
}
 
export default NoPage;