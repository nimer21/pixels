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

import SidebarNavMenu from './components/SidebarNavMenu/SidebarNavMenu'
import SideBarNav from './components/SideBarNav/SideBarNav';
import Grid from './components/Grid/Grid';

const App = () => {
  return (
    <div>
      <Router>
      {/* <SidebarNavMenu> */}
      {/* <SideBarNav> */}
      <SideBar>
        {/* <Grid/> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
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