import { useState } from 'react';
import { Button, Modal, Form, Image } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const AddProductModal = ({
  fetchProducts,
  mode,
  imageUrl,
  name,
  description,
  brand,
  price,
  category,
}) => {
  const initialValues = {
    name: name ?? '',
    description: description ?? '',
    brand: brand ?? '',
    price: price ?? 0,
    category: category ?? '',
  };

  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const [fields, setFields] = useState(initialValues);
  const [filePreview, setFilePreview] = useState(null);
  const [file, setFile] = useState(null);

  const handleClose = () => {
    setFields(initialValues);
    setFilePreview(null);
    setFile(null);
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    console.log(brand);
  };
  const handleChange = async (e) => {
    const value = e.target.value;
    setFields({ ...fields, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setFilePreview(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  const postProduct = async () => {
    try {
      const apiURL = process.env.REACT_APP_API_URL;
      const resp = await fetch(`${apiURL}/products`, {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const body = await resp.json();
      console.log(body);

      if (resp.ok) {
        console.log(body);
        const { _id } = body;
        if (file) {
          await uploadProductPic(_id);
        }

        fetchProducts();
        setFields(initialValues);
        setFilePreview(null);
        setFile(null);
        setShow(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const uploadProductPic = async (prodId) => {
    try {
      const apiURL = process.env.REACT_APP_API_URL;
      const formData = new FormData();
      formData.append('productPic', file);
      const resp = await fetch(`${apiURL}/products/${prodId}/upload`, {
        method: 'POST',
        body: formData,
      });
      console.log('up pic resp:', resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {pathname === '/admin' && mode === 'add' && (
        <>
          {' '}
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
                  <Form.Control
                    onChange={handleChange}
                    value={fields.name}
                    name='name'
                    type='text'
                    placeholder='Enter name'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    onChange={handleChange}
                    value={fields.description}
                    name='description'
                    type='text'
                    as='textarea'
                    rows={3}
                    placeholder='Enter description'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    onChange={handleChange}
                    value={fields.brand}
                    name='brand'
                    type='text'
                    placeholder='Enter brand'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    onChange={handleChange}
                    value={fields.price}
                    name='price'
                    type='number'
                    placeholder='Enter price'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    onChange={handleChange}
                    value={fields.category}
                    name='category'
                    type='text'
                    placeholder='Enter category'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.File
                    onChange={handleFileChange}
                    id='fileInput'
                    label='choose a Pic'
                  />
                </Form.Group>
                <Image fluid src={filePreview} />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <Button variant='primary' onClick={postProduct}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>{' '}
        </>
      )}
      {pathname === '/admin' && mode === 'edit' && (
        <>
          {' '}
          <Button variant='warning' onClick={handleShow}>
            Edit Product
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Control
                    onChange={handleChange}
                    value={name}
                    name='name'
                    type='text'
                    placeholder='Enter name'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    onChange={handleChange}
                    value={description}
                    name='description'
                    type='text'
                    as='textarea'
                    rows={3}
                    placeholder='Enter description'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    onChange={handleChange}
                    value={brand}
                    name='brand'
                    type='text'
                    placeholder='Enter brand'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    onChange={handleChange}
                    value={price}
                    name='price'
                    type='number'
                    placeholder='Enter price'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    onChange={handleChange}
                    value={category}
                    name='category'
                    type='text'
                    placeholder='Enter category'
                  />
                </Form.Group>
                <Form.Group>
                  <Form.File
                    onChange={handleFileChange}
                    id='fileInput'
                    label='choose a Pic'
                  />
                </Form.Group>
                <Image fluid src={filePreview} />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <Button variant='primary' onClick={postProduct}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>{' '}
        </>
      )}
    </>
  );
};

export default AddProductModal;
