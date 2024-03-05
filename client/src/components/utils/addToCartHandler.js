import React, { useState } from 'react';
import { Modal,  Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AddToCartHandler = ({ modal, handleClose, errorType, handleQuantitySubmit }) => {
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const handleSubmit = () => {
    // Pass the quantity to the parent component for further handling
    handleQuantitySubmit(quantity);
  };

  return (
    <>
      <Modal show={modal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{errorType === 'auth' ? 'Sorry :(' : 'Number of ticket'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorType === 'auth' ? (
            <div>Sorry, you need to register or sign in to continue.</div>
          ) : (
            <Form>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control as="select" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                  {[1, 2, 3, 4].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {errorType === 'auth' ? (
            <LinkContainer to="/sign_in">
                          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                          Go to register / sign in
          </button>
            </LinkContainer>
          ) : (
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Add to Cart
          </button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddToCartHandler;
