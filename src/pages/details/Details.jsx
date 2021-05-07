import React, { Component } from 'react';
import { Col, Card, Row, Button } from 'react-bootstrap';
import Reviews from 'components/Reviews.jsx';

export default class Details extends Component {
  state = {
    product: null,
  };

  componentDidMount = async () => {
    const resp = await fetch(
      `${process.env.REACT_APP_API_URL}/products/${this.props.match.params.productId}`
    );
    const data = await resp.json();
    console.log(data);
    this.setState({ product: data });
  };
  render() {
    return (
      <>
        {this.state.product && (
          <Row>
            <Col>
              <Card>
                <Card.Img variant={'top'} src={this.state.product.imageUrl} />
                <Card.Body>
                  <Card.Title>{this.state.product.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>
                    {this.state.product.price} $
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Reviews reviews={this.state.product.reviews} />
            </Col>
          </Row>
        )}
      </>
    );
  }
}
