import React, { useState, useEffect, useCallback } from 'react';
import DashboardLayout from '../../hoc/dashboardLayout';
import Loader from '../../utils/loader';
import CartDetail from './cartDetail';

import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartQuantity, userPurchaseSuccess } from 'store/actions/user.actions';

import { PayPalButton } from 'react-paypal-button-v2';

const UserCart = (props) => {
  const [loading, setLoading] = useState(false);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const removeItem = (position) => {
    dispatch(removeFromCart(position));
  };

  const updateQuantity = useCallback((index, action) => {
    dispatch(updateCartQuantity(index, action));
  }, [dispatch]);

  const calculateTotal = () => {
    const subtotal = props.users.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
 // Order total including tax
    return { subtotal };
  };

  const generateUnits = () => [
    {
      description: 'Tickets',
      amount: {
        currency_code: 'USD',
        value: calculateTotal().subtotal.toFixed(2), // Convert to string
        breakdown: {
          item_total: {
            currency_code: 'USD',
            value: calculateTotal().subtotal.toFixed(2), // Convert to string
          },
        },
      },
      items: generateItems(),
    },
  ];
  
  

  const generateItems = () =>
  props.users.cart.map((item) => ({
    unit_amount: {
      currency_code: 'USD',
      value: item.price.toFixed(2), // Use the item price without tax
    },
    quantity: item.quantity,
    name: item.Type,
  }));


  useEffect(() => {
    if (notifications && notifications.success) {
      props.history.push('/dashboard');
    }
    if (notifications && notifications.error) {
      setLoading(false);
    }
  }, [notifications, props.history]);

  return (
    <DashboardLayout title="Your Cart">
      {props.users.cart && props.users.cart.length > 0 ? (
        <>
          <CartDetail
            products={props.users.cart}
            removeItem={(position) => removeItem(position)}
            updateQuantity={(index, action) => updateQuantity(index, action)}
          />
          <div className="p-4 bg-gray-100">
  <div className="flex justify-between pt-2">
    <div>Order total</div>
    <div>${calculateTotal().subtotal.toFixed(2)}</div>
  </div>
  <div className="flex justify-between pt-4">
  {loading ? (
            <Loader />
          ) : (
            <div className="pp_button">
              <PayPalButton
                options={{
                  clientId:
                    'AZ5ei5GxkSA6qk4cJ5hvrbrW0H0N7Om2i-foOYZpLEDitaE9D7IW-XZCeg4TKmZxJtuIIDH3rNetMZSU',
                  currency: 'USD',
                  disableFunding: 'credit,card',
                }}
                createOrder={(data, actions) => {
                  const orderDetails = {
                    purchase_units: generateUnits(),
                  };
                  console.log('Order Details:', orderDetails);
                  return actions.order.create(orderDetails);
                }}
                onSuccess={(details, data) => {
                  const purchasedTickets = props.users.cart.map((item) => ({
                    _id: item._id,
                    quantity: item.quantity,
                  }));
                  dispatch(userPurchaseSuccess(details.id, purchasedTickets));
                  setLoading(true);
                }}

                onCancel={(data) => {
                  setLoading(false);
                }}
              />
            </div>
          )}
  </div>
</div>

          
        </>
      ) : (
        <div>There is nothing in your cart</div>
      )}
    </DashboardLayout>
  );
};

export default UserCart;
