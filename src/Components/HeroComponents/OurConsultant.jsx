import React from "react";
import { Button, Card } from "react-bootstrap";
import Instructor from "../../Assets/Images/Instructor.png";

const InstructorCard = () => {
  return (
    <div className="d-flex justify-content-between  ">
      {" "} 
      <Card
        style={{ width: "18rem" }}
        className="bg-dark justify-content-center "
      >
        <Card.Img
          variant="top"
          src={Instructor}
          style={{ width: "150px", alignSelf: "center", marginTop: "20px" }}
        />
        <Card.Body className="d-grid text-center">
          <Card.Title>Adeena</Card.Title>
          <Button className="BtnBar my-3">View More</Button>
        </Card.Body>
      </Card>

      
      <Card
        style={{ width: "18rem" }}
        className="bg-dark justify-content-center "
      >
        <Card.Img
          variant="top"
          src={Instructor}
          style={{ width: "150px", alignSelf: "center", marginTop: "20px" }}
        />
        <Card.Body className="d-grid text-center">
          <Card.Title>Ayana</Card.Title>
          <Button className="BtnBar my-3">View More</Button>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        className="bg-dark justify-content-center "
      >
        <Card.Img
          variant="top"
          src={Instructor}
          style={{ width: "150px", alignSelf: "center", marginTop: "20px" }}
        />
        <Card.Body className="d-grid text-center">
          <Card.Title>Leeza</Card.Title>
          <Button  className="BtnBar my-3">View More</Button>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        className="bg-dark justify-content-center "
      >
        <Card.Img
          variant="top"
          src={Instructor}
          style={{ width: "150px", alignSelf: "center", marginTop: "20px" }}
        />
        <Card.Body className="d-grid text-center">
          <Card.Title>Shimra</Card.Title>
          <Button className="BtnBar my-3">View More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InstructorCard;
