import React, { useState, useEffect } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { WavesButton } from '../utils/tools';
import AddToCartHandler from '../utils/addToCartHandler';
import { userAddToCart } from '../../store/actions/user.actions';

import { useSelector, useDispatch } from 'react-redux';

const Pricing = () => {
  const [modal, setModal] = useState(false);
  const [errorType, setErrorType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // Track the selected item for adding to the cart
  const user = useSelector((state) => state.users);
  const tickets = useSelector((state) => state.tickets.tickets);
  const dispatch = useDispatch();
  console.log("priceing-->"+tickets)



  if (!tickets || tickets.length === 0) {
    // You might want to show a loading state or fetch the data here
    return <div>Loading...</div>;
  }

  const handleClose = () => setModal(false);

  const handleAddToCart = (item) => {
    if (!user.auth) {
      setModal(true);
      setErrorType('auth');
      return false;
    }

    // Check if the user already has 4 items in the cart
    if (user.cart && user.cart.length === 4) {
      // You can display a message or handle this situation as needed
      alert('You can only add up to 4 items to your cart.');
      return;
    }

    // Store the selected item in the state
    setSelectedItem(item);

    // Open the modal for quantity input
    setModal(true);
  };

  const handleQuantitySubmit = (quantity) => {
    setModal(false); // Close the modal

    const currentCart = user.cart;
    const existingItem = currentCart.find((cartItem) => cartItem._id === selectedItem._id);

    // Dispatch the action with the item and quantity
    const newQuantity = existingItem ? Math.min(quantity, 4 - existingItem.quantity) : Math.min(quantity, 4);
    dispatch(userAddToCart(selectedItem, newQuantity));
  };

  const showBoxes = () =>
     tickets.map((item, index) => (
      <Zoom key={index} className="pricing_item" triggerOnce>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${item.price}</span>
            <span>{item.Type}</span>
          </div>
          <div className="pricing_description">{item.description}</div>
          <div className="pricing_buttons">
            
            <WavesButton
              type="add_to_cart_link"
              runAction={() => handleAddToCart(item)}
              iconSize="25"
              color="yellow"
           // Disable the button if the cart already has 4 items
            />
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className="bck_pricing_light p-3 ">
      <div className="center_wrapper pricing_section">
        <div className='text-6xl text-center p-4 bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text font-bold'>Pricing</div>
        <p className='text-white px-4 text-center'>// The <span className='text-red-500'>maximum</span> number of <span className='text-red-500'>tickets</span> that can be added to the cart and <span className='text-red-500'>purchased</span> at a time is <span className='text-red-500'>four</span>. </p>
        <div className="pricing_wrapper">{showBoxes()}</div>
        <AddToCartHandler
          modal={modal}
          errorType={errorType}
          handleClose={handleClose}
          handleQuantitySubmit={handleQuantitySubmit}
        />
      </div>
    </div>
  );
};

export default Pricing;
