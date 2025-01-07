import React from "react";
import { Menu } from "antd"
import { useState } from "react";
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined } from "@ant-design/icons";
import "./SideNavBar.scss";
import BrandLogo from "../Images/Logo.tsx";
import { Link } from "react-router-dom";

const SideNavBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const items: any = [
        { key: '0', icon: <span style={{color: "#666cff"}}><BrandLogo /></span>, label: <div >Materialize</div > },
        { key: '1', icon: <PieChartOutlined />, label: <Link to="/dashboard">DashBoard</Link > },
        { key: '2', icon: <DesktopOutlined />, label: <Link to="/chatbot">Chat</Link > },
        { key: '3', icon: <ContainerOutlined />, label: <div >Calendar</div >  },
        { key: '4', icon: <ContainerOutlined />, label: <div >Kanban</div >  }
    ];

    return (
        <div className="side-nav-bar-container">
            <div className="side-nav-logo-container" style={{height: '70px'}} onMouseEnter={() => setCollapsed(false)}>
                <div className="" style={{display: "flex"}}>
                    <span style={{color: "#6200ed"}}>
                        <BrandLogo />
                    </span>
                    <div style={{marginLeft: '0.5rem',color: '#3b4056' ,fontSize: '1.5rem', display: collapsed ? 'none' : 'flex' }}>purfull</div>

                </div>
                <div className=""></div>
            </div>
            <Menu onMouseEnter={() => setCollapsed(false)}
                onMouseLeave={() => setCollapsed(true)}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                // theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                style={{backgroundColor: '#F7F7F9', border: 'none'}} // change this if needed
                className="menu-bar"
                
            />
        </div>
    )
}

export default SideNavBar;