import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../../../assets/img/logo/logo.png";
import { settings } from "../../../../helpers/settings";
import {
  MdOutlineHome,
  MdDirectionsCar,
  MdInfoOutline,
  MdOutlineHeadphones,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import ContactInfo from "../../contact/contact-info/contact-info";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="g-5">
          <Col lg={6} xl={3}>
            <Link to="/">
              <img src={logo} alt={settings.siteName} className="img-fluid" />
            </Link>
            <p>
              Check out our new fleet of cars, latest offers, our advantages and
              free extras online. Choose from one of our new car models.
            </p>
          </Col>
          <Col lg={6} xl={3}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">
                  <MdOutlineHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/vehicles">
                  <MdDirectionsCar /> Vehicles
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <MdInfoOutline /> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <MdOutlineHeadphones /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy">
                  <MdOutlinePrivacyTip /> Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={6} xl={3}>
            <h2>Working Hours</h2>
            <ul>
              <li>Mon-Fri: 09:00AM - 09:00PM</li>
              <li>Saturday: 09:00AM - 07:00PM</li>
              <li>Sunday: 09:00AM - 05:00PM</li>
            </ul>
          </Col>
          <Col lg={6} xl={3}>
            <h2>Contact Us</h2>
            <ContactInfo/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;