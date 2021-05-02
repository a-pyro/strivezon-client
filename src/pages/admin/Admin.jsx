import Product from 'components/Product';
import AddProductModal from 'components/AddProductModal';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

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
      <Row>
        {products.map((prod) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            className='mb-3 shadow px-2'
            key={prod._id}
          >
            <Product {...prod} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Admin;
