import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import OrdersAD from "./Orders";
import Analytics from "./Analytics";
import Menu from "./Menu";
import Messages from "./Messages";
import Nav from "./Nav";
import Users from "./Users";
import { useEffect, useState } from "react";
import AdminLogin from "./AdminLogin";
import Alertt from "../../components/Alert";
import Upload from "./Upload";
import Portfolio from "./Portfolio";
const Dashboard = () => {
    const admin = localStorage.getItem('admin')
    const [alert, setAlert] = useState(false)
    const [msg, setMsg] = useState()
    const [type, setType] = useState()
    useEffect(() => {

    }, [])
    return (
        <>
            {admin ?
                <>
                    <Nav />
                    <Stack direction="row" sx={{}}>
                        <Menu />
                        <Alertt type={type} msg={msg} alert={alert} setAlert={setAlert}/>
                        <Stack sx={{ flex: 4 }}>
                            <Routes>
                                <Route path="" element={<Analytics />} />
                                <Route path="messages" element={<Messages />} />
                                <Route path="ordersAD" element={<OrdersAD setMsg={setMsg} setAlert={setAlert} setType={setType}/>} />
                                <Route path="users" element={<Users />} />
                                <Route path="portfolio" element={<Portfolio setMsg={setMsg} setAlert={setAlert} setType={setType}/>} />
                                <Route path="upload" element={<Upload setMsg={setMsg} setAlert={setAlert} setType={setType}/>} />
                            </Routes>
                        </Stack>
                    </Stack>
                </>
                :
                <>
                    <Alertt type={type} msg={msg} alert={alert} setAlert={setAlert} />
                    <AdminLogin setMsg={setMsg} setAlert={setAlert} setType={setType}/>
                </>
            }
        </>
    );
}

export default Dashboard;