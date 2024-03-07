import React, { useState } from 'react';
import { Modal,  Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./modalStyle.css"

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
          <Modal.Title >{errorType === 'auth' ? 'Sorry :(' : 'The Venue'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorType === 'auth' ? (
            <div>Sorry, you need to register or sign in to continue.</div>
          ) : (
            <Form>
              <Form.Group controlId="quantity">
                <Form.Label>Tickets:</Form.Label>
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
                  <button  className="text-white h-[80%] bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-3 ">
                  Go to register / sign in
                  </button>                       
            </LinkContainer>
          ) : (
            <button onClick={handleSubmit} className="text-white h-[80%] bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-3 ">
            Add to Cart
          </button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddToCartHandler;
