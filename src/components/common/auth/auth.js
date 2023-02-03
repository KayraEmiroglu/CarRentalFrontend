
import React from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import logo from "../../../assets/img/logo/logo.png";
import { settings } from "../../../helpers/settings";
import { RiCloseCircleLine, RiHome7Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import "./auth.scss";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="auth">
      <Row>
        <Col lg={7} className="banner">
          <img src={logo} alt={settings.siteName} />
          <div className="toolbar">
            <RiCloseCircleLine onClick={() => navigate(-1)} />
            <RiHome7Line onClick={() => navigate("/")} />
          </div>
        </Col>
        <Col lg={5} className="forms">
          <Card className="py-4">
            <Tabs defaultActiveKey="login">
              <Tab eventKey="login" title="Login">
                <LoginForm/>
              </Tab>
              <Tab eventKey="register" title="Register">
                <RegisterForm/>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;