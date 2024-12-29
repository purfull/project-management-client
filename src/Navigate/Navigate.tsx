import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import LoginPage from "../Components/LoginPage.tsx";
import DashboardScreen from "../Components/DashBorad.tsx";
import ChatBot from "../Components/ChatBot.tsx";

function Navigates(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login"/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/dashboard" element={<DashboardScreen/>}/>
                <Route path="/chatbot" element={<ChatBot/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigates;