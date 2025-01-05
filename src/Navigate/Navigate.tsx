import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import LoginPage from "../Components/LoginPage.tsx";
import DashboardScreen from "../Components/DashBorad.tsx";
import ChatBox from "../Components/ChatBox.tsx";

function Navigates(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login"/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/dashboard" element={<DashboardScreen/>}/>
                <Route path="/chatbot" element={<ChatBox/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigates;