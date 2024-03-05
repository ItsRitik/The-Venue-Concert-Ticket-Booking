import React from 'react';
import './CardDetail.css';

const CartDetail = React.memo(({ products, removeItem, updateQuantity }) => {
  const renderItems = () =>
    products
      ? products.map((product, index) => (
          <div className="user_product_block" key={`${product._id}${index}`}>
            <div className="item">
              <h2 className="text-md sm:text-3xl font-bold mb-2">{product.Type}</h2>
            </div>
            <div className="item">
            <h4 className="text-sm text-center sm:text-xl font-semibold">No.of Tickets</h4>
              <div className="flex justify-center items-center">
                <span className="text-sm sm:text-xl mr-2">${product.price} <b>X</b> </span>
                <div
                  className="border  rounded px-2  md:px-4"
                  onClick={() => updateQuantity(index, 'DECREMENT')}
                >
                  -
                </div>
                <span className="mx-2">{product.quantity}</span>
                <div
                  className="border rounded px-2 md:px-4"
                  onClick={() => updateQuantity(index, 'INCREMENT')}
                >
                  +
                </div>
              </div>
            </div>
            <div className="item">
              <h4 className="text-sm sm:text-xl font-semibold">Total</h4>
              <div className="text-sm sm:text-xl">${product.price * product.quantity}</div>
            </div>
            <div className="item">
              <p
                className="cart_remove_btn text-sm sm:text-xl  text-red-500 rounded cursor-pointer"
                onClick={() => removeItem(index)}
              >
                Remove
              </p>
            </div>
          </div>
        ))
      : null;

  return <div>{renderItems()}</div>;
});

export default CartDetail;
