import { Divider, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {URL} from '../../url'

const Messages = () => {
    const [msgs,setmsgs] = useState()
    const [refresh,setrefresh] = useState(false)
    const getmsgs = async () => {
        const res = await axios.get(`${URL}/user/getmsgs`)
        setmsgs(res.data.data)
        console.log(res.data)
    }
    useEffect(()=>{
        getmsgs()
    },[refresh])
    const changestatus = async (item) => {
        const res = await axios.post(`${URL}/user/msgstatus`, {item})
        if(res.data.status==="success"){
            setrefresh((prev)=>!prev)
        }
        console.log(res.data)
    }
    return ( 
        <>
        {msgs && 
        
            <Stack sx={{padding:'20px',backgroundColor:'#f8f8f8'}}>
                <Paper>
                    <Typography sx={{padding:'20px',fontWeight:'bold',fontSize:'26px'}}>Inbox</Typography>
                    <Divider />
                    {msgs.reverse().map((item)=>(
                    <Stack sx={{padding:'30px 20px'}} onClick={()=>{changestatus(item)}}>
                        <Stack direction="row" sx={{alignItems:'center',justifyContent:'space-between'}}>
                            <Stack  sx-={{}}>
                                <Stack direction="row" sx={{alignItems:'center',gap:"20px"}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'26px'}}>{item.name}</Typography>
                            <Typography sx={{
                                display: item.status === 'new' ? 'flex' : 'none',
                                color:'white',
                                borderRadius:'25px',
                                padding:'2px 10px', 
                                backgroundColor: '#dc3545',
                                textTransform:'capitalize'
                                }}>{item.status}</Typography>
                                </Stack>
                            <Typography sx={{color:'gray',marginLeft:'10px'}}>{item.email}</Typography>
                            </Stack>
                            <Stack>
                            <Typography sx={{color:'gray'}}>Date : {item.createdat.slice(0,10)}</Typography>
                            <Typography sx={{color:'gray'}}>Time: {item.createdat.slice(11,19)}</Typography>
                            </Stack>
                        </Stack>
                        <Typography sx={{fontSize:'20px',color:'gray',marginTop:'10px'}}>Subject: {item.subject}</Typography>
                        <Typography sx={{fontSize:'18px',color:'gray'}}>{item.msg}</Typography>
                    </Stack>
                    ))}
                    <Divider />

                </Paper>
            </Stack>
            }
        </>
     );
}
 
export default Messages;