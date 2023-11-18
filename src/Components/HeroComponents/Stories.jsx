import React from "react";
import { Card } from "react-bootstrap";

import YouTube from "react-youtube";

const InstructorCard = () => {
  const video1 = "x1llcVvm8vs";
  return (
    <div className="d-flex ">
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
