import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import AddProductModal from './AddProductModal';
import { Spinner } from 'react-bootstrap';
const Product = ({
  imageUrl,
  name,
  description,
  brand,
  price,
  category,
  _id,
  fetchProducts,
}) => {
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const resp = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${_id}`,
        {
          method: 'DELETE',
        }
      );
      console.log(resp);
      fetchProducts();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant='primary'
          onClick={() => history.push(`${_id}/details`)}
        >
          Details
        </Button>
        <span>
          <AddProductModal
            product={{ imageUrl, name, description, brand, price, category }}
            mode='edit'
          />
        </span>
        {!loading && location.pathname === '/admin' && (
          <Button onClick={handleDelete} variant='danger'>
            Delete
          </Button>
        )}
        {loading && location.pathname === '/admin' && (
          <div className='d-flex justify-content-center'>
            <Spinner animation='grow' />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
