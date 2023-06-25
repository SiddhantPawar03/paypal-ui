import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import bell from "../assets/bell-fill.svg";
import gear from "../assets/gear-fill.svg";

function NavBar() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#253B80" }} expand="lg">
        <Container>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {/* <Nav className="me-auto"> */}
          <Nav.Link style={{ color: "#F5F5F5" }} href="#home">
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "#F5F5F5" }} href="#finances">
            Finances
          </Nav.Link>
          <Nav.Link style={{ color: "#F5F5F5" }} href="#sendNRequest">
            Send and Request
          </Nav.Link>
          <Nav.Link style={{ color: "#F5F5F5" }} href="#deals">
            Deals
          </Nav.Link>
          <Nav.Link style={{ color: "#F5F5F5" }} href="#wallet">
            Wallet
          </Nav.Link>
          <Nav.Link style={{ color: "#F5F5F5" }} href="#activity">
            Activity
          </Nav.Link>
          <Nav.Link style={{ color: "#F5F5F5" }} href="#help">
            Help
          </Nav.Link>
          <img
            alt=""
            src={bell}
            width="15"
            height="15"
            style={{ color: "#F5F5F5" }}
            className="d-inline-block align-top"
          />
          <img
            alt=""
            src={gear}
            width="15"
            height="15"
            className="d-inline-block align-top"
          />
          <Nav.Link style={{ color: "#F5F5F5" }} href="#logout">
            LOG OUT
          </Nav.Link>
        </Container>
      </Navbar>

      <br />
    </>
  );
}

export default NavBar;
