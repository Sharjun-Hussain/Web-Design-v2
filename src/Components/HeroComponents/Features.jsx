import React from "react";
import { Button, Card } from "react-bootstrap";
import Instructor from "../../Assets/Images/Instructor.png";
import YouTube from "react-youtube";

const InstructorCard = () => {

  return (
    <div className="d-flex gap-2 ">
      {" "}
      <Card style={{ width: "18rem" }} className="bg-white  ">
        <Card.Body className="d-grid  text-center">
          <Card.Title >Cutting Edge Curriculam</Card.Title>
          <Card.Text>
            Dive into the latest web design trends, tools, and techniques to
            create stunning websites.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="bg-white  ">
        <Card.Body className="d-grid  text-center">
          <Card.Title>Cutting Edge Curriculam</Card.Title>
          <Card.Text>
            Learn from seasoned professionals with a wealth of industry
            knowledge.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="bg-white  ">
        <Card.Body className="d-grid  text-center">
          <Card.Title>Cutting Edge Curriculam</Card.Title>
          <Card.Text>
            Gain practical experience through real-world projects, building a
            professional portfolio.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InstructorCard;
