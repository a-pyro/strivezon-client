import React, { Component } from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg='transparent' className='px-0 py-0'>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        </Form>
      </Navbar>
    );
  }
}
