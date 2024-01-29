import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { HOME_URL } from "../constants/urls";
import "../assets/css/navbar.css";

export default function NavigationBar() {
  return (
    <header className="row">
      <div className="col-md-12">
        <Navbar
          className="navbar"
          collapseOnSelect
          fixed="top"
          expand="lg"
          bg=""
          variant="dark"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" activeKey={window.location.pathname}>
                <LinkContainer exact to={HOME_URL}>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}
