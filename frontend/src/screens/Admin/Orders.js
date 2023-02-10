import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import axios from 'axios';
import { useEffect, useState } from "react";
const OrdersAD = ({ setAlert, setMsg, setType }) => {
    const [orders,setorders] = useState()
    const [refresh,setrefresh] = useState(false)
    const getorders = async () => {
        const res = await axios.get('http://localhost:5000/user/getorders')
        setorders(res.data.data)
    }
    const approve = async (item) => {
        const res = await axios.post('http://localhost:5000/user/approve', {item})
        if(res.data.status==="success"){
            setrefresh((prev)=>!prev)
        }
        console.log(res.data)
    }
    const cancle = async (item) => {
        const res = await axios.post('http://localhost:5000/user/cancle', {item})
        if(res.data.status==="success"){
            setrefresh((prev)=>!prev)
        }
        console.log(res.data)
    }
    const complete = async (item) => {
        const res = await axios.post('http://localhost:5000/user/complete', {item})
        if(res.data.status==="success"){
            setrefresh((prev)=>!prev)
        }
        console.log(res.data)
    }
    const deleteorder = async (item) => {
        const res = await axios.post('http://localhost:5000/user/deleteorder', {item})
        if(res.data.status==="success"){
            setAlert(true)
            setMsg(res.data.message)
            setType('success')
            setrefresh((prev)=>!prev)
        }
        
    }
    useEffect(()=>{
        getorders()
    },[refresh])
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
        <Stack sx={{padding:'20px',backgroundColor:'#f8f8f8'}}>
                <Paper>
                    <Typography sx={{padding:'20px',fontWeight:'bold',fontSize:'26px'}}>Orders List</Typography>
                    <Divider />
                    {orders.reverse().map((item)=>
                    { console.log(item)
                        return(
                        <>
                    <Stack sx={{padding:'30px 20px'}}>
                        <Stack direction="row" sx={{alignItems:'center',justifyContent:'space-between'}}>
                        <Stack direction="row" sx={{alignItems:'center',gap:'20px'}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'26px'}}>{item.fullname}</Typography>
                            <Typography sx={{
                                color:'white',
                                borderRadius:'25px',
                                padding:'2px 10px', 
                                backgroundColor: setbg(item.status)
                                }}>{item.status}</Typography>
                        </Stack>
                        {item.status==='pending' &&
                        <Stack direction="row" sx={{gap:"10px"}}>
                            <Button sx={{color:'#868e96',backgroundColor:'#e9ecef',borderRadius:'20px',padding:'5px 16px','&:hover':{backgroundColor:'#28a745',color:'white'}}} onClick={()=>{approve(item)}}>Approve</Button>
                            <Button sx={{color:'#868e96',backgroundColor:'#e9ecef',borderRadius:'20px',padding:'5px 16px','&:hover':{backgroundColor:'#dc3545',color:'white'}}} onClick={()=>{cancle(item)}}>Cancle</Button>
                        </Stack>
                        }
                        {item.status==='approved' &&
                        <Stack direction="row" sx={{gap:"10px"}}>
                            <Button sx={{color:'#868e96',backgroundColor:'#e9ecef',borderRadius:'20px',padding:'5px 16px','&:hover':{backgroundColor:'#28a745',color:'white'}}} onClick={()=>{complete(item)}}>Complete</Button>
                        </Stack>
                        }
                        {item.status==='completed' &&
                        <Stack direction="row" sx={{gap:"10px"}}>
                            <Button sx={{color:'#868e96',backgroundColor:'#e9ecef',borderRadius:'20px',padding:'5px 16px','&:hover':{backgroundColor:'#dc3545',color:'white'}}} onClick={()=>{deleteorder(item)}}>Delete</Button>
                        </Stack>
                        }
                        </Stack>
                        <Stack direction={"row"} sx={{gap:"50px"}}>
                            <Stack>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Package : </Typography>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Date : </Typography>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Time :</Typography>

                            </Stack>
                            <Stack>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>{item.value}</Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>{item.date}</Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>{item.time.replace('/',' ')}</Typography>

                            </Stack>
                        </Stack>
                        {/* <Stack direction="row" sx={{alignItems:'center',gap:'20px'}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Package : </Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>BASIC $99</Typography>
                        </Stack>
                        <Stack direction="row" sx={{alignItems:'center',gap:'20px'}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Booking date : </Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>03/02/2023</Typography>
                        </Stack>
                        <Stack direction="row" sx={{alignItems:'center',gap:'20px'}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>Booking time : </Typography>
                            <Typography sx={{color:'gray',fontSize:'18px'}}>01:00 AM</Typography>
                        </Stack> */}
                    </Stack>
                    <Divider />
                    </>
                    )})}

                </Paper>
            </Stack>
            }
        </>
     );
}
 
export default OrdersAD;