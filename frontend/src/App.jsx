import React from 'react'
import { BrowserRouter, Route, Routes, useRoutes} from "react-router-dom";
import Navbar from './NavbarNFooter/Navbar3.jsx';
import Footer from './NavbarNFooter/Footer2.jsx';
import Home from './Home/Home2.jsx';
import './App.css'
import Project from './Projects/Project.jsx';
import Team from './Team/Team.jsx';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/teams" element={<Team />} />
                <Route path="/projects" element={<Project />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}