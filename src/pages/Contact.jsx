import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/contact.css";
import { Clock,Facebook, Instagram, Pin, Telephone} from "react-bootstrap-icons";
import ContactForm from "../components/ContactForm";
import GenericCard from "../components/GenericCard";

const Contact = () => {
  const cardData = [
    {
      icon: <Pin size={24} />,
      title: "Address",
      description: "88 Konstiole Rd.",
      extra: "Labone, Accra",
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      description: "Mon to Sat",
      extra: "12pm to 10pm",
    },
    {
      icon: <Telephone size={24} />,
      title: "Call",
      description: "0302956232",
      extra: "0244578432",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={24} />,
      title: "Facebook",
      href: "#",
    },
    {
      icon: <Instagram size={24} />,
      title: "Instagram",
      href: "#",
    },
  ];

  return (
    <>
      <div className="page-banner">
        <div className="banner-text">
          <h1 className="animate__animated animate__fadeInDown">Contact Us</h1>
          {socialLinks.map((link) => (
            <a
              key={link.title} // Add a unique key for each link
              className="icon-box animate__animated animate__fadeInDown"
              title={link.title}
              href={link.href}>
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
