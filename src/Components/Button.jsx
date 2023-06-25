import React from 'react';
import Button from 'react-bootstrap/Button';

function button(props) {
  return (
    <>
      <Button variant="outline-info" >{props.filter}</Button>{' '}
    </>
  );
}

export default button;