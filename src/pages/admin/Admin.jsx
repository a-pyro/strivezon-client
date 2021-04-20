import AddProductModal from 'components/AddProductModal';
import React, { Component } from 'react';

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

  addProduct = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    return <AddProductModal />;
  }
}
