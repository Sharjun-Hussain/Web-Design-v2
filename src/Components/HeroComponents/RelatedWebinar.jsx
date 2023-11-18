import React from "react";
import { Button, Card } from "react-bootstrap";
import Instructor from "../../Assets/Images/Instructor.png";
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
      </Card>

      <Card
        style={{ width: "18rem" }}
        className="bg-dark justify-content-center "
      >
        <YouTube videoId={video1} opts={{ width: "100%", height: "100%" }} />
      </Card>

      <Card
        style={{ width: "18rem" }}
        className="bg-dark justify-content-center "
      >
        <YouTube videoId={video1} opts={{ width: "100%", height: "100%" }} />
      </Card>
      
    </div>
  );
};

export default InstructorCard;
