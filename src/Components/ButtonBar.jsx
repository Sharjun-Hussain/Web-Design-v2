import React from "react";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import InstructorCard from "./HeroComponents/InstructorCard";
import Consultant from "./HeroComponents/OurConsultant";
import Feedback from "./HeroComponents/Feedback";
import Stories from "./HeroComponents/Stories";
import Webinars from "./HeroComponents/RelatedWebinar";
import Features from "./HeroComponents/Features";
import RelatesPosters from "./HeroComponents/RelatesPosters";


const ButtonBar = () => {
  return (
    <Container className="my-3">
      <Row>
        <Col md={12} className="d-flex justify-content-center ">
          <Stack direction="horizontal">
            <Button
              variant="outline-warning rounded-pill "
              aria-pressed="true"
              className="BtnBar"
            >
              {" "}
              All
            </Button>
            {"  "}
            <Button
              variant="outline-warning ms-auto rounded-pill active "
              aria-pressed="true"
              className="BtnBar"
            >
              {" "}
              Instructor
            </Button>
            {"  "}
            <Button
              variant="outline-warning ms-auto rounded-pill active "
              aria-pressed="true"
              className="BtnBar"
            >
              {" "}
              Our Consultant{" "}
            </Button>
            {"  "}
            <Button
              variant="outline-warning ms-auto rounded-pill active "
              aria-pressed="true"
              className="BtnBar"
            >
              {" "}
              Feedback
            </Button>
            {"  "}
            <Button
              variant="outline-warning ms-auto rounded-pill active "
              aria-pressed="true"
              className="BtnBar"
            >
              {" "}
              stories
            </Button>
            {"  "}
            <Button
              variant="outline-warning ms-auto rounded-pill active "
              aria-pressed="true"
              className="BtnBar"
            >
              {" "}
              Related Webinars{" "}
            </Button>
            {"  "}
          </Stack>
        </Col>
      </Row>

      {/* Instructor */}

      <Container fluid className=" text-white">
        <Row className="mt-5 mb-5 text-center">
          <Col>
            <h3>Instructor</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center ">
            <InstructorCard />
          </Col>
        </Row>

        <Row className="mt-5 mb-5 text-center">
          <Col>
            <h3> Our Consultant</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center ">
            <Consultant />
          </Col>
        </Row>

        <Row className="mt-5 mb-5 text-center">
          <Col>
            <h3> Feedback</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center ">
            <Feedback />
          </Col>
        </Row>

        <Row className="mt-5 mb-5 text-center">
          <Col>
            <h3>Stories</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center ">
            <Stories />
          </Col>
        </Row>

        <Row className="mt-5 mb-5 text-center">
          <Col>
            <h3>Related Webinars</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center ">
            <Webinars />
          </Col>
        </Row>

        <Row className="mt-5 mb-5 ">
          <Col>
            <h3>Features</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center ">
            <Features />
          </Col>
        </Row>

        <Row className="mt-5 mb-5 ">
          <Col>
            <h3>Related Images And Posters</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center ">
            <RelatesPosters />
          </Col>
        </Row>

        
      </Container>
    </Container>
  );
};

export default ButtonBar;
