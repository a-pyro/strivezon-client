import Product from 'components/Product';
import AddProductModal from 'components/AddProductModal';
import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';

const Admin = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      const url = process.env.REACT_APP_API_URL;
      setLoading(true);
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
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        <Col className='my-3'>
          <AddProductModal mode='add' fetchProducts={fetchProducts} />
        </Col>
      </Row>
      {(loading && (
        <Row className='justify-content-center'>
          <Spinner animation='grow' />
        </Row>
      )) || (
        <Row>
          {products.map((prod) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className='mb-3 px-2'
              key={prod._id}
            >
              <Product fetchProducts={fetchProducts} {...prod} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Admin;
