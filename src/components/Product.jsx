import React, { Component } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import AddProductModal from './AddProductModal';

export default class Product extends Component {
  render() {
    const { imageUrl, name, description, brand, price, category } = this.props;
    return (
      <Card className='h-100'>
        <Card.Img variant='top' src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant='primary'>Reviews</Button>
          <span>
            <AddProductModal
              product={{ imageUrl, name, description, brand, price, category }}
              mode='edit'
            />
          </span>
        </Card.Body>
      </Card>
    );
  }
}
