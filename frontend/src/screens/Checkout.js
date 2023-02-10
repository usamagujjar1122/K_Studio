import { Box, Button, CircularProgress, Divider, FormControlLabel, IconButton, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// 
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from 'axios';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { StaticDateTimePicker } from "@mui/x-date-pickers";

const Checkout = ({ setAlert, setMsg, setType }) => {
    // 
    const stripePromise = loadStripe('pk_test_51MYavWFKy8Ssys2PPcjacLyiCil4HjqiIzEKdLrboZQU4x6lmv8ySQoDCoeooh4rD54Hr6rCAXaHCKjYkllE5lsp00s0bN1gYs');
    const [searchParams] = useSearchParams()
    const val = searchParams.get('val')
    const [checked, setChecked] = useState(false)
    const [value, setValue] = useState(val)
    const [method, setMethod] = useState('card')
    const [loading, setLoading] = useState(false)
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const handleclick = async () => {
        if (localStorage.getItem('token')) {
            console.log(date.toLocaleString())
            setLoading(true)
            const res = await axios.post('http://localhost:5000/user/payment', {
                date:date.toLocaleString(),
                time:time.toLocaleString(),
                value,
            });
            if (res.data.success === false) {
                setAlert(true)
                setMsg(res.data.message)
                setType('error')
            }
            if (res.data.url) {
                window.location.href = res.data.url
            } else {
                setLoading(false)
            }
        } else {
            setAlert(true)
            setMsg('Please Log in to continue')
            setType('error')
        }
    }

    useEffect(() => {


    }, [])
    return (
        <>
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, margin: '50px 0px' }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>CHECKOUT</Typography>
                <Stack sx={{ gap: "20px", alignItems: 'center' }}>
                    <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' }, position: 'relative' }}>
                        <Stack direction='row' sx={{ justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => { setChecked((prev) => !prev) }}>
                            <Typography sx={{ fontSize: '18px', padding: '16px' }}>{value}</Typography>
                            <IconButton disabled>{checked ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</IconButton>
                        </Stack>

                        <Paper sx={{ position: 'absolute', top: '105%', width: '100%', opacity: checked ? 1 : 0, transition: 'opacity 0.5s', zIndex: checked ? 1 : -1, backgroundCOlor: 'white' }} >
                            <Typography sx={{ fontSize: '18px', padding: '16px', cursor: 'pointer' }} onClick={() => { setValue('BASIC $99'); setChecked(false) }}>
                                BASIC $99
                            </Typography>
                            <Divider />
                            <Typography sx={{ fontSize: '18px', padding: '16px', cursor: 'pointer' }} onClick={() => { setValue('STANDARD $199'); setChecked(false) }}>
                                STANDARD $199
                            </Typography>
                            <Divider />
                            <Typography sx={{ fontSize: '18px', padding: '16px', cursor: 'pointer' }} onClick={() => { setValue('EXTENDED $299'); setChecked(false) }}>
                                EXTENDED $299
                            </Typography>
                            <Divider />
                            <Typography sx={{ fontSize: '18px', padding: '16px', cursor: 'pointer' }} onClick={() => { setValue('ULTIMATE $399'); setChecked(false) }}>
                                ULTIMATE $399
                            </Typography>
                            <Divider />
                        </Paper>

                    </Box>
                    <Stack sx={{ width: { xs: '100%', md: '60%' } }} direction="row">
                        <Stack direction="row" sx={{ justifyContent: 'space-between', width: '100%' }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    disablePast
                                    label="Date"
                                    value={date}
                                    onChange={(e) => {
                                        setDate(e.$d)
                                        
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker
                                    label="Time"
                                    value={time}
                                    onChange={(e)=>{
                                        setTime(e.$d)
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Stack>
                    </Stack>
                    <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={method}
                            name="radio-buttons-group"
                            onChange={(e) => { setMethod(e.target.value) }}
                        >
                            <FormControlLabel value="card" control={<Radio />} label="Pay with card" sx={{ margin: "16px" }} />
                        </RadioGroup>
                    </Box>
                    {/* <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                        <input type="text" style={{ border: 'none', width: '95%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Name on card' />
                    </Box> */}
                    {/* <Stack direction="row" sx={{ width: { xs: '100%', md: '60%' }, gap: '20px' }}>
                        <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                            <input type="text" style={{ border: 'none', width: '90%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='Expiry date' />
                        </Box>
                        <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' } }}>
                            <input type="text" style={{ border: 'none', width: '90%', fontSize: '18px', outline: 'none', padding: '10px' }} placeholder='CVV' />
                        </Box>
                    </Stack> */}

                    <Button sx={{ backgroundColor: '#009603', '&:hover': { backgroundColor: '#009603' }, padding: '16px 32px', width: 'fit-content', display: 'flex', alignItems: 'center', gap: '20px' }} onClick={handleclick}>
                        <Typography sx={{ color: 'white', fontWeight: 'bold' }} >CHECKOUT</Typography>
                        {loading && <CircularProgress sx={{ color: 'white', width: '30px !important', height: '30px !important' }} />}
                    </Button>

                </Stack>
            </Box>
        </>
    );
}

export default Checkout;