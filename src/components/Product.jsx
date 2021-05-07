import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import AddProductModal from './AddProductModal';

class Product extends Component {
  render() {
    const {
      imageUrl,
      name,
      description,
      brand,
      price,
      category,
      id,
    } = this.props;
    console.log(this.props);
    return (
      <Card className='h-100'>
        <Card.Img variant='top' src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            variant='primary'
            onClick={() => this.props.history.push(`${id}/details`)}
          >
            Details
          </Button>
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

export default withRouter(Product);
