import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import image from "../assets/name.png";

function Logo() {
  const myImageStyle = { width: '55px', height: '50px' };
  return (
    <>
      <Container>
      {/* <Col xs={2} md={1}>
        <Row> */}
          
            <Image src={image} style={myImageStyle} roundedCircle />
          
        {/* </Row>
        </Col> */}
      </Container>
    </>
  );
}

export default Logo;
