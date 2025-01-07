import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Input } from "antd";
import React, { useState } from "react";
import './ChatBot.scss';
const ChatBot = () => {
    const [selectedMessage, setSelectedMessage] = useState<Boolean>(false);
    const MessageAndContacts = () => {
        return (
            <div className="message-and-contacts">
                <div className="avatar-and-contacts">
                    <Badge dot color="green" className="avatar-badge">
                        <Avatar shape="circle" icon={<UserOutlined />} />
                    </Badge>
                    <Input prefix={<SearchOutlined />} className="contact-search-box" placeholder="Search.." />
                </div>
                {/* chatlist  */}
                <div className="message-container">

                    <div className="chat-list-header">
                        Chats
                    </div>
                    <div className="message-box-selected">
                        <Badge dot color="green" className="avatar-badge">
                            <Avatar shape="circle" icon={<UserOutlined />} />
                        </Badge>
                        <div className="name-message-content">
                            <div className="sender-name">Waldemer mannering  <span className="message-min">5 minutes</span></div>
                            <div className="message">Hi, How can I help you?</div>
                        </div>
                    </div>

                    <div className="message-box">
                        <Badge dot color="green" className="avatar-badge">
                            <Avatar shape="circle" icon={<UserOutlined />} />
                        </Badge>
                        <div className="name-message-content">
                            <div className="sender-name">Waldemer mannering  <span className="message-min">5 minutes</span></div>
                            <div className="message">Hi, How can I help you?</div>
                        </div>
                    </div>

                    <div className="message-box">
                        <Badge dot color="green" className="avatar-badge">
                            <Avatar shape="circle" icon={<UserOutlined />} />
                        </Badge>
                        <div className="name-message-content">
                            <div className="sender-name">Waldemer mannering  <span className="message-min">5 minutes</span></div>
                            <div className="message">Hi, How can I help you?</div>
                        </div>
                    </div>

                    <div className="message-box">
                        <Badge dot color="green" className="avatar-badge">
                            <Avatar shape="circle" icon={<UserOutlined />} />
                        </Badge>
                        <div className="name-message-content">
                            <div className="sender-name">Waldemer mannering  <span className="message-min">5 minutes</span></div>
                            <div className="message">Hi, How can I help you?</div>
                        </div>
                    </div>

                    <div className="message-box">
                        <Badge dot color="green" className="avatar-badge">
                            <Avatar shape="circle" icon={<UserOutlined />} />
                        </Badge>
                        <div className="name-message-content">
                            <div className="sender-name">Waldemer mannering  <span className="message-min">5 minutes</span></div>
                            <div className="message">Hi, How can I help you?</div>
                        </div>
                    </div>

                    <div className="message-box">
                        <Badge dot color="green" className="avatar-badge">
                            <Avatar shape="circle" icon={<UserOutlined />} />
                        </Badge>
                        <div className="name-message-content">
                            <div className="sender-name">Waldemer mannering  <span className="message-min">5 minutes</span></div>
                            <div className="message">Hi, How can I help you?</div>
                        </div>
                    </div>

                    <div className="chat-list-header">
                        Contacts
                    </div>

                    <div className="contact-box">
                        <Badge dot color="green" className="avatar-badge">
                            <Avatar shape="circle" icon={<UserOutlined />} />
                        </Badge>
                        <div className="name-role-content">
                            <div className="contact-name">
                                Natalie Maxwell
                            </div>
                            <div className="contact-role">
                                UI/UX developer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="chat-bot-container">
            <MessageAndContacts />
        </div>
    )
};

export default ChatBot;