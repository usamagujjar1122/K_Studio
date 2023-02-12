import {URL} from '../../url'
import { Box, Paper, Stack, Typography } from "@mui/material";
import DraftsIcon from '@mui/icons-material/Drafts';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PersonIcon from '@mui/icons-material/Person';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { Link } from "react-router-dom";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Orders per month',
      },
    },
  };
  
  
const Analytics = () => {
  
  const [msgs,setmsgs] = useState()
  const [orders,setorders] = useState()
  const [imgs,setimgs] = useState()
  const [users,setusers] = useState()
  const [data,setdata] = useState()

  const date = new Date()
  const CreatedAt = []
    const No_Orders = []
  const loaddata = async () =>{
    
      const res = await axios.get(`${URL}/user/getmsgs`)
      setmsgs(res.data.data)
      const res1 = await axios.get(`${URL}/user/getorders`)
      setorders(res1.data.data)
      const res3 = await axios.get(`${URL}/user/loadimgs`)
      setimgs(res3.data.data)
      let createdat 
      let total_orders = 0
      let array = res1.data.data.length-1
      res1.data.data.map( (item,index)=>{
        if(item.createdat.slice(0,10)===createdat){
          total_orders = total_orders + 1
          if(index===array){
            // setCreatedAt(oldArray => [...oldArray, createdat])
            // setNo_Orders(oldArray => [...oldArray, total_orders])
            total_orders = total_orders + 1
            CreatedAt.push(createdat)
            No_Orders.push(total_orders)
          }
        } else {
          if(index===0){
            total_orders = total_orders + 1
            createdat = item.createdat.slice(0,10)
          } else {
            CreatedAt.push(createdat)
            No_Orders.push(total_orders)
            createdat = item.createdat.slice(0,10)
            total_orders = 0
          }
        }
      })
      const labels = CreatedAt;
        setdata({
          labels,
          datasets: [
            {
              fill: true,
              label: 'Orders',
              data: No_Orders,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        })
       const res2= await axios.get(`${URL}/user/getusers`)
       setusers(res2.data.data)
  }
  // var weekday =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  //   var next = weekday.slice(date.getDay()+1)
  //   var prev = weekday.reverse().slice(date.getDay())
    
  //   var days = prev.concat(next.reverse())
  useEffect(()=>{
    loaddata()
  },[])
  
    return ( 
        <>
        {msgs && orders && users && imgs &&
            <Stack sx={{padding:'20px',backgroundColor:'#f8f8f8'}}>
                <Stack direction="row" sx={{gap:'20px',marginBottom:'50px'}}>
                    <Paper sx={{gap:"26px",backgroundColor:'#007bff',flex:1,display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                        <Stack direction="row" sx={{padding:"20px",gap:'20px'}}>
                            <Typography sx={{color:'white',fontWeight:'bold',fontSize:'24px'}}>{msgs.length} Messages</Typography>
                            <DraftsIcon sx={{color:'white',opacity:'0.5',fontSize:'40px'}}/>
                        </Stack>
                        <Link to="messages" style={{textDecoration:'none'}}><Stack direction="row" sx={{backgroundColor:'rgba(0,0,0,0.03)',padding:"10px",gap:'20px',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}}>
                            <Typography sx={{color:'white'}}>View details</Typography>
                            <KeyboardArrowRightIcon sx={{color:'white',opacity:'0.5',fontSize:'18px'}}/>
                        </Stack></Link>
                    </Paper>
                    <Paper sx={{gap:"26px",backgroundColor:'#ffc107',flex:1,display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                        <Stack direction="row" sx={{padding:"20px",gap:'20px'}}>
                            <Typography sx={{color:'white',fontWeight:'bold',fontSize:'24px'}}>{orders.length} Orders</Typography>
                            <BeenhereIcon sx={{color:'white',opacity:'0.5',fontSize:'40px'}}/>
                        </Stack>
                        <Link to="ordersAD" style={{textDecoration:'none'}}><Stack direction="row" sx={{backgroundColor:'rgba(0,0,0,0.03)',padding:"10px",gap:'20px',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}}>
                            <Typography sx={{color:'white'}}>View details</Typography>
                            <KeyboardArrowRightIcon sx={{color:'white',opacity:'0.5',fontSize:'18px'}}/>
                        </Stack></Link>
                    </Paper>
                    <Paper sx={{gap:"26px",backgroundColor:'#28a745',flex:1,display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                        <Stack direction="row" sx={{padding:"20px",gap:'20px'}}>
                            <Typography sx={{color:'white',fontWeight:'bold',fontSize:'24px'}}>{users.length} Users</Typography>
                            <PersonIcon sx={{color:'white',opacity:'0.5',fontSize:'40px'}}/>
                        </Stack>
                        <Link to="users" style={{textDecoration:'none'}}><Stack direction="row" sx={{backgroundColor:'rgba(0,0,0,0.03)',padding:"10px",gap:'20px',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}}>
                            <Typography sx={{color:'white'}}>View details</Typography>
                            <KeyboardArrowRightIcon sx={{color:'white',opacity:'0.5',fontSize:'18px'}}/>
                        </Stack></Link>
                    </Paper>
                    <Paper sx={{gap:"26px",backgroundColor:'#dc3545',flex:1,display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                        <Stack direction="row" sx={{padding:"20px",gap:'20px'}}>
                            <Typography sx={{color:'white',fontWeight:'bold',fontSize:'24px'}}>{imgs.length} Images</Typography>
                            <StarIcon sx={{color:'white',opacity:'0.5',fontSize:'40px'}}/>
                        </Stack>
                        <Link to="portfolio" style={{textDecoration:'none'}}><Stack direction="row" sx={{backgroundColor:'rgba(0,0,0,0.03)',padding:"10px",gap:'20px',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}}>
                            <Typography sx={{color:'white'}}>View details</Typography>
                            <KeyboardArrowRightIcon sx={{color:'white',opacity:'0.5',fontSize:'18px'}}/>
                        </Stack></Link>
                    </Paper>
                </Stack>
                <Box sx={{minHeight:'50vh'}}>
                {data && <Line options={options} data={data} />}
                </Box>
            </Stack>
          }

        </>
     );
}
 
export default Analytics;