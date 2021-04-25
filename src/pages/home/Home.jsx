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
      <Container className='mt-3'>
        <Row>
          {(!loading &&
            products.map((prod) => (
              <Col key={prod._id}>
                <Product {...prod} />
              </Col>
            ))) || <Spinner animation='grow' />}
        </Row>
      </Container>
    );
  }
}
