import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/menu.css"
import { Button } from "react-bootstrap";
import {RENOIR_MENU_URL} from "../constants/urls"

const Menu = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className="menu-page-background">
              <div className="banner-text">
                <h1 className="animate__animated animate__fadeInDown">Menu</h1>
                <p className="animate__animated animate__fadeInDown">
                At Renoir, we believe that exceptional food starts with the finest ingredients. 
                That is why we source our produce from local farms. 
                From savoury dishes to fresh juice, our menu celebrates the 
                diversity of food with an African touch.
                </p>
                <Button href={RENOIR_MENU_URL}
              variant="outline-success" className="download-btn animate__animated animate__fadeInDown animate__slow">
              View Menu</Button>
              </div>
            </div>
          </Col>
          </Row>
          </Container>
    </div>
  )
}

export default Menu