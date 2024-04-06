import { Outlet, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/navbar.css";
import logo from "../assets/images/navbar-brand.svg"

export default function Layout() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar"
        fixed="top">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
          <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Restaurant logo"
            />
            </NavLink>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <NavLink
                to="/"
                activeClassName="active"
                className="nav-links">
                Home
              </NavLink>
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
