import logo from "./logo.svg";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import WebDesign from "./Pages/WebDesign";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Container fluid >
      <Row>
        <WebDesign/>
      </Row>
     
    </Container>
  );
}

export default App;
