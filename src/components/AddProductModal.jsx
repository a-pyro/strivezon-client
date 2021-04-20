import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
const initialValues = {
  name: '',
  description: '',
  brand: '',
  price: null,
  category: '',
};
const AddProductModal = () => {
  const [show, setShow] = useState(false);
  const [fields, setFields] = useState({ ...initialValues });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const value = e.target.value;
    setFields({ ...fields, [e.target.name]: value });
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={fields.name}
                name='name'
                type='text'
                placeholder='Enter email'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProductModal;
