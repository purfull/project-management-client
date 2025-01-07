import React, { useState } from "react";
import BrandLogo from "../Images/Logo.tsx";
import "./TopNavBar.scss";
import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Input, Menu, MenuProps } from "antd";
import SideNavBar from "./SideNavBar.tsx";

const TopNavBar = () => {
    const [isSearch, setIsSearch] = useState<Boolean>(false);

    const handleSearch = () => {
        setIsSearch(false);
    }

    const items: MenuProps['items'] = [
        {
            label: (
                <div style={{ display: "flex", alignItems: "center" }} className="profile-container">
                    <div className="avatar-profile">
                        <Avatar shape="circle" icon={<UserOutlined />} />
                    </div>
                    <div className="profile-details">
                        <div className="profile-name">
                            John Doe
                        </div>
                        <div className="role-name">Admin</div>
                    </div>

                </div>
            ),
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <div className="user-setting-container">
                    <UserOutlined style={{fontSize: '20px'}}/>
                    <span className="user-setting">My Profile</span>
                </div>
            ),
            key: '1',
        },
        {
            label: (
                <div className="user-setting-container">
                    <UserOutlined style={{fontSize: '20px'}}/>
                    <span className="user-setting">Setting</span>
                </div>
            ),
            key: '2',
        },
        {
            label: (
                <div className="logout-button">
                    <Button type="link">Logout</Button>
                </div>
            ),
            key: '3',
        }
    ];

    const itemsToRender: MenuProps['items'] = [
        {
            label: (
                <div className="notification-header">
                    <div className="notification-title">
                        Notification
                    </div>
                    <div className="message">8 New</div>
                </div>
            ),
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <div className="notification-item">
                    <Avatar shape="circle" icon={<UserOutlined />} />
                    <div className="notification-content">
                        <div className="new-message">
                            New Message
                        </div>
                        <div className="message-received">
                            You have 4 new messages from Natalie
                        </div>
                        <div className="message-time">
                            1 hour ago
                        </div>
                    </div>
                </div>

            ),
            key: '1',
        },
    ];

    return (
        <>
            <div className="top-nav-container">
                {/* <span className="brand-logo">
                <BrandLogo />
            </span> */}
                {isSearch ? <Input allowClear onClear={handleSearch} onBlur={handleSearch} /> : <>
                    <div className="search-bar-container" onClick={() => setIsSearch(true)}>
                        <SearchOutlined style={{ fontSize: "20px" }} />
                        <span className="searchText">Search (Ctrl+/)</span>
                    </div>
                    {/* <div className="bell-icon-container">

            </div> */}
                    <div className="avatar-container">
                        <div className="notification-container">
                            <Dropdown className="notification-dropdown" menu={{ items: itemsToRender }} trigger={['hover']} placement="bottomRight" >
                                <Badge dot color="red">
                                    <BellOutlined className="bell-icon" style={{ fontSize: "20px" }} />
                                </Badge>
                            </Dropdown>
                        </div>
                        <div>
                            <Dropdown className="avatar-dropdown" menu={{ items }} trigger={['hover']} placement="bottomRight" >
                                <Badge dot color="green" className="avatar-badge">
                                    <Avatar shape="circle" icon={<UserOutlined />} />
                                </Badge>
                            </Dropdown>
                        </div>
                    </div>
                </>
                }
            </div>
        </>
    )
}

export default TopNavBar;