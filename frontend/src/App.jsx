import React from 'react'
import { BrowserRouter, Route, Routes, useRoutes} from "react-router-dom";
import './App.css'
import Navbar from './NavbarNFooter/Navbar3.jsx';
import Footer from './NavbarNFooter/Footer.jsx';
import Home from './Home/Home2.jsx';
import Project from './Projects/Project.jsx';
import Team from './Team/Team.jsx';
import Contactus from './Contact/Contactus.jsx';

 

// import NavbarFlowbite from './NavbarNFooter/NavbarFlowbite.jsx';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/teams" element={<Team />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/contactus" element={<Contactus />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}