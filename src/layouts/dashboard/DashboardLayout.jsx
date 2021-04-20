import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class DashboardLayout extends Component {
  render() {
    return (
      <Container fluid className='pt-5'>
        <Row>
          <Col className='bg-dark pt-5' md={4}>
            <SideBar />
          </Col>
          <Col className='bg-secondary pt-5' md={8}>
            <NavBar />
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}
