import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import LoginPage from "../Components/LoginPage.tsx";
import TopNavBar from "../Components/TopNavBar.tsx";
import DashboardScreen from "../Components/DashBorad.tsx";

function Navigates(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login"/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/dashboard" element={<DashboardScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigates;