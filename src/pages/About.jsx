import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/about.css";
import Table from "react-bootstrap/Table";

const About = () => {
  return (
    <>
      <div className="page-banner">
        <div className="banner-text">
          <h1 className="animate__animated animate__fadeInDown">Our Story</h1>
        </div>
      </div>

      <Container fluid>
        <Row>
          <Col md={12} lg={{ span: 6, offset: 3 }}>
            <div className="about-us">
              <p className="animate__animated animate__fadeInDown">
                Welcome to Renoir, Celebrating the Rich and Diverse Flavours of
                Africa & Beyond. Established in 2022 in the heart of Accra, our
                restaurant is a tribute to the rich culinary heritage of Ghana
                and the continent as a whole. We are passionate about bringing
                the vibrant tastes of Africa and beyond to your plate. We strive
                to create an unforgettable dining experience for our guests.
                From the moment you step through our doors, you will embark on a
                gastronomic journey that explores the authentic flavours and
                culinary traditions of Africa.
              </p>
              <div className="mt-5 text-center">
                <h2 className="animate__animated animate__fadeInDown animate__slow">
                  Working hours
                </h2>

                <Table
                  responsive
                  className="animate__animated animate__fadeInDown animate__slow">
                  <tbody>
                    <tr>
                      <td>Monday to Saturday</td>
                      <td>12pm to 10pm</td>
                    </tr>
                  </tbody>
                </Table>

                <p className="fw-light text-body-tertiary animate__animated animate__fadeInDown animate__slower">
                  (Including holidays)
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
