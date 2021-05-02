import Product from 'components/Product';
import React, { Component } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

export default class Admin extends Component {
  state = {
    products: [],
    loading: true,
  };
  fetchProducts = async () => {
    const url = process.env.REACT_APP_API_URL;
    try {
      const resp = await fetch(`${url}/products`);
      if (resp.ok) {
        const data = await resp.json();
        this.setState({ products: data.data });
        console.log(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount = () => {
    console.log(this.props);
    this.fetchProducts();
  };
  render() {
    const { loading, products } = this.state;
    return (
      <Row noGutters className='mx-0 py-0'>
        {(!loading &&
          products.map((prod) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className='mb-3 shadow px-2 mx-0'
              key={prod._id}
            >
              <Product {...prod} />
            </Col>
          ))) || <Spinner animation='grow' />}
      </Row>
    );
  }
}
