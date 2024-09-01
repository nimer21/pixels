import React from 'react'
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";

import 'bootstrap/dist/css/bootstrap.min.css';


import SidebarNavMenu from './components/SidebarNavMenu/SidebarNavMenu'
import SideBarNav from './components/SideBarNav/SideBarNav';
import Grid from './components/Grid/Grid';
import Home from './pages/Home';

const App = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const pixelSize = 10; // Each pixel is 10x10

  const rows = Math.floor(screenHeight / pixelSize);
  const cols = Math.floor(screenWidth / pixelSize);
/*
  console.log("rows", rows); // rows 73
  console.log("cols", cols); // cols 153
  console.log("screenWidth", screenWidth); // screenWidth 1536
  console.log("screenHeight", screenHeight); // screenHeight 730
*/
  return (
    <div>
      <Router>
      {/* <SidebarNavMenu> */}
      {/* <SideBarNav> */}
      <SideBar>
        {/* <Grid/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users rows={33} cols={67}/>} />
          {/* <Route path="/users" element={<Users rows={33} cols={67}/>} /> */}
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved rows={33} cols={67} />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
      {/* </SideBarNav> */}
        {/* </SidebarNavMenu> */}
      </Router>
    </div>
  )
}

export default App