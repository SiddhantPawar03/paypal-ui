import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Logo from "./Logo";


function card(props) {
  return (
    <>
      <Card>
        <Card.Body>
        <Logo />
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.date} . {props.mode}</Card.Text>
          <Card.Title>-${props.payment}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default card;
