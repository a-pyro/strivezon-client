import React, { Component } from 'react';
import { Image, ListGroup } from 'react-bootstrap';

export default class Reviews extends Component {
  render() {
    return (
      <ListGroup>
        <h3>Reviews</h3>
        {this.props.reviews.map((rev) => {
          const {
            content,
            id,
            createdAt,
            rating,
            user: { first_name, last_name, avatar },
          } = rev;
          return (
            <ListGroup.Item key={id}>
              {content}
              <div>
                <span>Rating {rating}</span>
              </div>
              <div className='d-flex justify-content-between'>
                <div className='align-self-end'>
                  <span>{createdAt}</span>
                </div>
                <div className='d-flex flex-column'>
                  <Image
                    className='align-self-end'
                    roundedCircle
                    style={{ width: '50px', height: '50px' }}
                    src={avatar}
                  />
                  <span className='mr-2'> {first_name + ' ' + last_name}</span>
                </div>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}
