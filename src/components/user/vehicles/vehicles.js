import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../common/section-header/section-header";
import VehicleCard from "./vehicle-card";

const Vehicles = () => {
  return (
    <Container>
      <SectionHeader
        title1="Vehicle"
        title2="Models"
        desc="To contribute to positive change and achieve our sustainability goals with many extraordinary"
      />

        <Row className="gy-5">
            <Col>
                <VehicleCard/>
            </Col>
        </Row>
    </Container>
  );
};

export default Vehicles;
