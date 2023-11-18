import React from "react";
import Heroimg from "../Assets/Images/Hero_Image.png";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Container fluid style={{ padding: "0px", margin: "0px" }}>
        <div className="heroText" style={{ position: "absolute", zIndex: 2 }}>
          <h1>
            Let's Stud <span className="Web-Designing "> Web Designing </span>{" "}
          </h1>
          <h2 className="training">2 Month Course + Training </h2>
          <Button className="HeroBtn">Entoll Now</Button>
        </div>
        <div>
          <img
            src={Heroimg}
            alt="HeroImg"
            fluid
            style={{
              width: "100vw",
              height: "654px",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>
      </Container>

      <Container className="pt-4 text-white">
        <Row>
          <Col md={12}>
            <div style={{fontSize:23, textAlign:"justify"}}>
              Welcome to our online Web Designing class, where excellence meets
              experience. Our academy has a long-standing tradition of
              delivering top-quality courses, and our Web Designing program is
              no exception. Join us and learn from the industry's finest
              instructors, setting the stage for your journey to becoming a
              proficient web designer.
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="my-3">
            <div className=" d-flex justify-content-between  ">
              <h2>Details</h2>
              <Button variant="outline-warning ms-auto ">Show All</Button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
