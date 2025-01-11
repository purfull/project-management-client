import { EllipsisOutlined, PhoneOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Input } from "antd";
import React, { useState } from "react";
import './ChatBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneLines, faPaperclip, faVideo } from '@fortawesome/free-solid-svg-icons';
const ChatBox = () => {
    const [selectedMessage, setSelectedMessage] = useState<Boolean>(false);
    const usersMessage = [
        {
            id: 1,
            isSender: 1,
            sender: "Alice",
            receiver: "Bob",
            message: "Hey Bob! How's it going?"
        },
        {
            id: 2,
            isSender: 0,
            sender: "Bob",
            receiver: "Alice",
            message: "Hey Alice, I'm doing well, thanks! How about you?"
        },
        {
            id: 3,
            isSender: 1,
            sender: "Alice",
            receiver: "Bob",
            message: "I'm good too! Got any plans for the weekend?"
        },
        {
            id: 4,
            isSender: 0,
            sender: "Bob",
            receiver: "Alice",
            message: "Nothing much, just planning to relax. What about you?"
        }
    ]

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

    const UserMessage = () => {
        return (
            <div className="message_container">
                <div className="user_actions_container">
                    <div className="user_profile_container">
                        <Badge dot color="green" className="avatar-badge">
                            <Avatar shape="circle" icon={<UserOutlined />} />
                        </Badge>
                        <div className="user_name_role">
                            <div className="message-_sender">Waldemer mannering</div>
                            <div className="user_role">Next js Developer</div>
                        </div>

                    </div>
                    <div className="user_action_icons">
                        <PhoneOutlined style={{ transform: "rotate(90deg)", fontSize: "20px", color: '#676b7b', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faVideo} style={{ fontSize: "20px", color: '#676b7b', cursor: 'pointer' }} />
                        <SearchOutlined style={{ fontSize: "20px", color: '#676b7b', cursor: 'pointer' }} />
                        <EllipsisOutlined style={{ transform: "rotate(90deg)", fontSize: "20px", color: '#676b7b', cursor: 'pointer' }} />
                    </div>
                </div>

                {usersMessage?.map((item: any, index: any) => {
                    return (
                        <div className={!item?.isSender ? "message_display_container" : "message_display_container message_sender"}>
                            <Badge dot color="green" className="avatar-badge">
                                <Avatar shape="circle" icon={<UserOutlined />} />
                            </Badge>
                            <div className={!item?.isSender ? "message_content" : "message_content message_sender"} key={item?.id}>
                                {item?.message}
                            </div>
                        </div>
                    );
                })}
                <div className="input_container">
                    <Input placeholder="Type a message" suffix={
                        <div>
                            <FontAwesomeIcon icon={faMicrophoneLines} fontSize={'20px'} style={{marginRight: "10px",cursor:"pointer"}}/>
                            <FontAwesomeIcon icon={faPaperclip} fontSize={'20px'} style={{marginRight: "10px",cursor:"pointer"}}/>
                            <Button className="sender_button" style={{
                                height: "40px",
                                width: "100px",
                                color: "white",
                                background: "#666cff"
                            }}>Send</Button>
                        </div>
                    } />
                </div>
            </div>
        )
    }
    return (
        <div className="chat-bot-container">
            <MessageAndContacts />
            <UserMessage />
        </div>
    )
};

export default ChatBox;