import React from "react";
import { Menu } from "antd"
import { useState } from "react";
import { ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined } from "@ant-design/icons";
import "./SideNavBar.scss";
import BrandLogo from "../Images/Logo.tsx";

const SideNavBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const items: any = [
        { key: '0', icon: <span style={{color: "#666cff"}}><BrandLogo /></span>, label: <div>Materialize</div> },
        { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
        { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
        { key: '3', icon: <ContainerOutlined />, label: 'Option 3' }
    ];

    return (
        <div className="side-nav-bar-container">
            <Menu onMouseEnter={() => setCollapsed(!collapsed)}
                onMouseLeave={() => setCollapsed(!collapsed)}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                // theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                // style={{width: }}
                className="menu-bar"
            />
        </div>
    )
}

export default SideNavBar;