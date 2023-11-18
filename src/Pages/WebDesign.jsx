import React from "react";

import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ButtonBar from "../Components/ButtonBar";
import { Container } from "react-bootstrap";
import Payments from "../Components/HeroComponents/Payments";
import Topic from "../Components/HeroComponents/Topic";


const WebDesign = () => {
  return (
    <div style={{backgroundColor: "black" }} >
    
        <Header />
        <Hero />
        <ButtonBar />
        <Container fluid className="p-0">
          <Payments/>
        </Container>
        <Topic/>
    
    </div>
  );
};

export default WebDesign;
