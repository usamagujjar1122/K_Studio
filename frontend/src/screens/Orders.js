import { Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react";
import {URL} from '../url'

const Orders = () => {
    const token = localStorage.getItem('token')
    const [orders, setOrders] = useState()
    const loadorders = async () => {
        const res = await axios.post(`${URL}/user/loadorders`, { token: token })
        setOrders(res.data.data)
    }
    useEffect(() => {
        loadorders()
    }, [])
    const setbg = (status) => {
        if(status === 'pending'){
            return '#fd7e14'
        } else if (status === 'cancelled') {
            return '#dc3545'
        } else {
            return '#28a745'
        }
    }
    return (
        <>
            {orders &&

                <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>ORDERS</Typography>

                    <Stack direction={"column"} sx={{ justifyContent: 'space-between', border: '1px solid black', padding: '20px',gap:"20px" }}>
                        {/* <Stack direction="row" sx={{alignItems: 'center', gap: '20px' }}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Plan</Typography>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Status</Typography>
                        </Stack>
                        <Stack direction="row" sx={{ alignItems: 'center', gap: '20px' }}>
                            {orders.reverse().map((item) => (
                                <   Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>{item.value}</Typography>
                            ))}
                            {orders.reverse().map((item) => (
                                <Typography sx={{ fontWeight: 'bold', fontSize: '20px', backgroundColor: item.status === "completed" ? 'green' : 'gray', borderRadius: '25px', padding: '5px 20px', color: 'white', textTransform: 'capitalize' }}>{item.status}</Typography>
                            ))}
                        </Stack> */}
                        <Stack direction="row" sx={{justifyContent:'space-between',alignItemsL:'center'}}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Plan</Typography>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Status</Typography>
                        </Stack>
                            {orders.reverse().map((item) => (

                        <Stack direction="row" sx={{justifyContent:'space-between', alignItems: 'center', gap: '20px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>{item.value}</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '20px', backgroundColor: setbg(item.status), borderRadius: '25px', padding: '5px 20px', color: 'white', textTransform: 'capitalize' }}>{item.status}</Typography>
                        </Stack>
                            ))}

                    </Stack>
                </Box>
            }

            <Typography sx={{ color: 'gray', padding: '100px', textAlign: 'center', fontSize: '22px' }}>No more data</Typography>

        </>
    );
}

export default Orders;