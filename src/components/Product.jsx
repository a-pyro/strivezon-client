import React, { Component } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';

export default class Product extends Component {
  render() {
    const { imgUrl, name, description, brand, price, category } = this.props;
    return (
      <Card className='h-100'>
        <Card.Img variant='top' src={imgUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant='primary'>Reviews</Button>
        </Card.Body>
      </Card>
    );
  }
}
