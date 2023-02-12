import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import PortFolio from "./screens/Portfolio";
import Pricing from "./screens/Pricing";
import Services from "./screens/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./screens/NoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./screens/Register";
import Checkout from "./screens/Checkout";
import Login from "./screens/Login";
import Alertt from "./components/Alert";
import { useState } from "react";
import Orders from "./screens/Orders";
import Success from "./screens/Success";
import Dashboard from "./screens/Admin/Dashboard";
import Studio from "./screens/Sttudio";
import Messages from "./screens/Admin/Messages";
import OrdersAD from "./screens/Admin/Orders";
import Users from "./screens/Admin/Users";
import Forgot from "./screens/Admin/Forgot";


function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Studio />} ></Route>
      <Route path="/admin/*" element={<Dashboard />}></Route>
    </Routes>

  </BrowserRouter>
  </>
  );
}

export default App;
