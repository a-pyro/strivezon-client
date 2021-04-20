import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <ListGroup>
        <Link className='nav-link pt-0' to='/'>
          <ListGroup.Item className='bg-transparent border-0 text-white pt-0'>
            <h3>Strivezon</h3>
          </ListGroup.Item>
        </Link>
        <Link
          className={`nav-link ${
            this.props.location.pathname === '/' ? 'active' : ''
          }`}
          to='/'
        >
          <ListGroup.Item className='bg-transparent border-0 text-white'>
            <h4>Products</h4>
          </ListGroup.Item>
        </Link>
        <Link
          to='/admin'
          className={`nav-link ${
            this.props.location.pathname === '/admin' ? 'active' : ''
          }`}
        >
          {' '}
          <ListGroup.Item className='bg-transparent border-0 text-white'>
            <h4>Admin</h4>
          </ListGroup.Item>
        </Link>
      </ListGroup>
    );
  }
}
export default withRouter(SideBar);
