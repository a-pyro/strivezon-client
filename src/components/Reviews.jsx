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
              <div>
                <span>{createdAt}</span>
                <span> by {first_name + ' ' + last_name}</span>
                <Image src={avatar} />
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}
