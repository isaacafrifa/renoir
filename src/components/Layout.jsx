import { Outlet, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/navbar.css";

export default function Layout() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar"
        fixed="top">
        <Container>
          <Navbar.Brand href="/">Renoir</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/about"
                activeClassName="active"
                className="nav-links">
                About
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                to="/menu"
                activeClassName="active"
                className="nav-links">
                Menu
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="active"
                className="nav-links">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
