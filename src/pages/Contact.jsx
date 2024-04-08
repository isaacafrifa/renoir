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
// import GenericCard from "../components/GenericCard";

const Contact = () => {
  return (
    <>
      <div className="page-banner">
        <div className="banner-text">
          <h1 className="animate__animated animate__fadeInDown">Contact Us</h1>
        </div>
      </div>

      <Container fluid>
        <Row>
          <Col md={6}>
            {/* <GenericCard /> */}
            <Card style={{border: "0px solid #892a2a"}} className="address-card">
              <div className="text-md-center card-content">
                <p className="animate__animated animate__fadeInDown">
                  <ClockFill color="green" />{" "}
                  Mon to Sat: 12pm to 10pm
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
    </>
  );
};

export default Contact;
