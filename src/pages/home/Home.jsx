import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

export default class Admin extends Component {
  state = {
    products: [],
  };
  render() {
    return (
      <Container className='mt-3'>
        <Row></Row>
      </Container>
    );
  }
}
