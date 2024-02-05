import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/home.css";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div>
            <div className="bg"></div>
            <div className="bg-text">
              <h1>Renoir</h1>
              <p>
                Renoir is an afro-french restaurant that serves authentic and
                delicious local and continental dishes.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
