import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Payments = () => {
  return (
    <Container fluid>
      <Row style={{ background: " rgb(254, 49, 34)", color: "White" }}>
        <Col md={6}>
          <div className="py-5">
            <h2
              style={{ fontSize: 32, textAlign: "center" }}
            >
              Payment Details
            </h2>
            <h3
              style={{
                fontSize: 25,
                textAlign: "center"
                
              }}
            >
              Fee : 18000.00
            </h3>
          </div>
        </Col>
        <Col md={6}>
          <div className="d-flex justify-content-around py-5 mr-5 ">
            <Button className="BtnFooter">Pay Online</Button>
            <Button className="BtnFooter ">Contact Consultant</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Payments;
