import React from "react";
import { Card } from "react-bootstrap";
import Instructor from '../../Assets/Images/Instructor.png'

const InstructorCard = () => {
  return (
    <div>
      {" "}
      <Card style={{ width: "18rem" }} className="bg-dark justify-content-center ">
        <Card.Img variant="top" src={Instructor} style={{width:"150px",alignSelf:"center", marginTop:"20px" }} />
        <Card.Body className="d-grid text-center">
          <Card.Title>MSM. Imthiyas</Card.Title>
          <Card.Text>Content Writer @Company</Card.Text>
        
        </Card.Body>
      </Card>
    </div>
  );
};

export default InstructorCard;
