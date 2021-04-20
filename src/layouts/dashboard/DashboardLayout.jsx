import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class DashboardLayout extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className='bg-dark pt-5' md={2}>
            <SideBar />
          </Col>
          <Col className='bg-secondary pt-5' md={10}>
            <NavBar />
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}
