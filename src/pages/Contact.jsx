import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../assets/css/contact.css";
import {
  ClockFill,
  Facebook,
  GeoAltFill,
  Instagram,
  TelephoneFill,
} from "react-bootstrap-icons";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="page-container">
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className="page-banner">
              <div className="banner-text">
                <h1 className="animate__animated animate__fadeInDown">
                  Contact Us
                </h1>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Card className="address-card">
              <div className="text-md-end card-content">
              <p className="animate__animated animate__fadeInDown">
                    <ClockFill color="green" /> <span className="text-success">Mon to Sat:</span> 12pm to 10pm
                  </p>
                  <p className="animate__animated animate__fadeInDown">
                    <GeoAltFill color="green" /> 88 Konstiole Rd. Labone - Accra,
                    Ghana
                  </p>
                  <p className="animate__animated animate__fadeInDown">
                    <TelephoneFill color="green" /> 0302956232
                  </p>
                  <a
                    className="icon-box animate__animated animate__fadeInDown"
                    title="Facebook"
                    href="#">
                    <Facebook size={24} />
                  </a>
                  <a
                    className="icon-box animate__animated animate__fadeInDown"
                    title="Instagram"
                    href="#">
                    <Instagram size={24} />
                  </a>
              </div>
            </Card>
          </Col>

          <Col md={6}>
          <ContactForm />
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
