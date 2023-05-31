import './App.css';
import Home from './views/home';
import Login from './views/login';
import Leftbar from './views/leftsidebar';
import styles from "./index.css"
import Sidebar1 from './views/sidebar';
import Rightsidebar from './views/rightsidebar';
import Econfirm from './emailverification/econfirm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  var [str,cstr]=React.useState(localStorage.getItem("Verified"))
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={str?<Leftbar/>:<Login />}>
        <Route index element={str?<Leftbar/>:<Login />}/>
        <Route path="home" element={str?<Leftbar/>:<Login />}/>
        <Route path="*" element={str?<Leftbar/>:<Login />}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
