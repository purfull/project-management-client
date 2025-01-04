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
                <div style={{ display: "flex", alignItems: "center" }}>
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
                <div>
                    <div>
                        <UserOutlined />
                        <span>Settings</span>
                    </div>
                </div>
            ),
            key: '1',
        },
        {
            label: (
                <div className="logout-button">
                    <Button type="link">Logout</Button>
                </div>
            ),
            key: '2',
        }
    ];

    const itemsToRender: MenuProps['items'] = [
        {
            label: (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                        Notification
                    </div>
                    <div>8 New</div>
                </div>
            ),
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <div style={{ display: "flex" }}>
                    <Avatar shape="circle" icon={<UserOutlined />} />
                    <div>
                        <div>
                            New Message
                        </div>
                        <div>
                            You have 4 new messages from Natalie
                        </div>
                        <div>
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
            {/* <SideNavBar /> */}
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
                        <Dropdown menu={{ items: itemsToRender }} trigger={['hover']} placement="bottomRight" className="avatar-dropdown">
                            <Badge dot color="red">
                                <BellOutlined className="bell-icon" style={{ fontSize: "20px" }} />
                            </Badge>
                        </Dropdown>
                        <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight" className="avatar-dropdown">
                            <Badge dot color="green" className="avatar-badge">
                                <Avatar shape="circle" icon={<UserOutlined />} />
                            </Badge>
                        </Dropdown>
                    </div>
                </>
                }
            </div>
        </>
    )
}

export default TopNavBar;