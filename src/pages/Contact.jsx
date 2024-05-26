import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/contact.css";
import { lazy } from 'react';
import useShowBackground from "../hooks/useShowBackground";
import { cardData, socialLinks } from "../constants/contactData";

const ContactForm = lazy(() => import('../components/ContactForm'));
const GenericCard = lazy(() => import('../components/GenericCard'));

const Contact = () => {
  const showBackground = useShowBackground();

  return (
    <>
      <div className={showBackground ? "page-banner show" : "page-banner"}>
        <div className="banner-text">
          <h1 className="animate__animated animate__fadeInDown">Contact Us</h1>
          {socialLinks.map((link) => (
            <a
              key={link.title} // Add a unique key for each link
              className="icon-box animate__animated animate__fadeInDown"
              title={link.title}
              href={link.href}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <Container fluid>
        <Row>
          {cardData.map((card) => (
            <Col md={4} key={card.title}>
              <GenericCard {...card} />
            </Col>
          ))}
        </Row>

        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
