import AddProductModal from 'components/AddProductModal';
import Product from 'components/Product';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

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
    this.fetchProducts();
  };

  render() {
    return (
      <>
        <Row>
          <Col className='my-3'>
            <AddProductModal fetchProducts={this.fetchProducts} />
          </Col>
        </Row>
        <Row>
          {this.state.products.map((prod) => (
            <Col key={prod._id}>
              <Product {...prod} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}
