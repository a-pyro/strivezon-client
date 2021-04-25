import Product from 'components/Product';
import AddProductModal from 'components/AddProductModal';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Admin = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const url = process.env.REACT_APP_API_URL;
    try {
      const resp = await fetch(`${url}/products`);
      if (resp.ok) {
        const data = await resp.json();
        setProducts(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {}, []);

  return (
    <>
      <Row>
        <Col className='my-3'>
          <AddProductModal fetchProducts={fetchProducts} />
        </Col>
      </Row>
      <Row>
        {products.map((prod) => (
          <Col key={prod._id}>
            <Product {...prod} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Admin;
