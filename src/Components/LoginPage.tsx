import React from "react";
import AppImages from "../Globals/AppImages.ts";
import "./LoginPage.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const LoginPage = () => {
  const [form] = Form.useForm();
  return (
    <div className="login-component">
      <div className="login-image" />
      <div className="login-form-container">
        <div className="welcome-message">Welcome to Purfull! 👋</div>
        <div className="signin-message">
          Please sign-in to your account and start the adventure
        </div>
        {/* <div className="input-container"> */}
        <Form form={form}>
          <Input placeholder="Email or Username" className="inputBox" />
          <Input.Password
            className="inputBox"
            placeholder="input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          {/* </div> */}

          <div className="options-row">
            <Checkbox>Remember Me</Checkbox>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <Button className="sign-in-button">Sign In</Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
