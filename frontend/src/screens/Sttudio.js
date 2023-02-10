import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import PortFolio from "./Portfolio";
import Pricing from "./Pricing";
import Services from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./NoPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Register from "./Register";
import Checkout from "./Checkout";
import Login from "./Login";
import Alertt from "../components/Alert";
import { useState } from "react";
import Orders from "./Orders";
import Success from "./Success";
import Forgot from "./Admin/Forgot";


function Studio() {
const[alert,setAlert] = useState(false)
const[msg,setMsg] = useState()
const[type,setType] = useState()
const[user,setUser] = useState()
  return (
    <>

    <Header setUser={setUser}/>
    <Alertt type={type} msg={msg} alert={alert} setAlert={setAlert}/>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/forgot" element={<Forgot setAlert={setAlert} setMsg={setMsg} setType={setType}/>} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<PortFolio />} />
      <Route path="/contact" element={<Contact alert={alert} setAlert={setAlert} setMsg={setMsg} setType={setType}/>} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/register" element={<Register setAlert={setAlert} setMsg={setMsg} setType={setType}/>} />
      <Route path="/login" element={<Login setAlert={setAlert} setMsg={setMsg} setType={setType} />} />
      <Route path="/checkout" element={<Checkout setAlert={setAlert} setMsg={setMsg} setType={setType} />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/success" element={<Success user={user}/>} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  <Footer />

  </>
  );
}

export default Studio;
