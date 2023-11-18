import React from "react";
import {  Card } from "react-bootstrap";

import YouTube from "react-youtube";

const InstructorCard = () => {
  const video1 = "x1llcVvm8vs";
  const video2 = "FQB2W-Yxldc";
  return (
    <div className="d-flex gap-2 ">
      {" "}
      <Card
        style={{ width: "18rem" }}
        className="bg-dark justify-content-center "
      >
        <YouTube videoId={video1} opts={{ width: "100%", height: "100%" }} />
        <Card.Body className="d-grid ">
          <Card.Title className="mt-3">Product Management Basic - Course</Card.Title>
          <Card.Text className="mb-3" style={{fontSize:14}}>
            Product Management Masterclass, you will learn with Sarah Johnson -
            Head of Product Customer Platform Gojek Indonesia.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        className="bg-dark justify-content-center "
      >
        <YouTube videoId={video2} opts={{ width: "100%", height: "100%" }} />
        <Card.Body className="d-grid ">
          <Card.Title className="mt-3">Front End Developer - Basic</Card.Title>
          <Card.Text style={{fontSize:14}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            magna enim fermentum porttitor.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        className="bg-dark justify-content-center "
      >
        <YouTube videoId={video2} opts={{ width: "100%", height: "100%" }} />
        <Card.Body className="d-grid ">
          <Card.Title className="mt-3">Front End Developer - Basic</Card.Title>
          <Card.Text style={{fontSize:14}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            magna enim fermentum porttitor.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InstructorCard;
