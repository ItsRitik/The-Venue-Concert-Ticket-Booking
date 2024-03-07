import * as actions from './index';
import axios from "axios"

import { getAuthHeader, removeTokenCookie, getTokenCookie } from '../../components/utils/tools';
axios.defaults.headers.post['Content-Type'] = 'application/json';



export const userRegister = (values) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/auth/register`,{
                email:values.email, 
                password:values.password
            });
            dispatch(actions.userAuthenticate({data: user.data.user,auth: true}))
            dispatch(actions.successGlobal('Welcome !!!'))
        } catch(error){
            console.log("deveracs")
            console.log(error.response.data.message)
            dispatch(actions.errorGlobal(error.response.data.message))

        }
    }
}


export const userSignIn = (values) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/auth/signin`,{
                email:values.email, 
                password:values.password
            });
            dispatch(actions.userAuthenticate({data: user.data.user,auth: true}))
            dispatch(actions.successGlobal('Welcome!!'))
        } catch(error){
            console.log(error)
            dispatch(actions.errorGlobal(error.response.data.message))

        }
    }
}


export const userIsAuth = () => {
    return async(dispatch)=>{
        try{
            if(!getTokenCookie()){
                throw new Error();
            }

            const user = await axios.get(`/api/auth/isauth`, getAuthHeader());
            console.log(user)
            dispatch(actions.userAuthenticate({data: user.data,auth: true}))
        } catch(error){
            dispatch(actions.userAuthenticate({data:{},auth:false}));
        }
    }
}

export const userChangeEmail = (data) => {
  return async(dispatch )=>{
      try{
          await axios.patch(`/api/users/email`,{
              email: data.email,
              newemail: data.newemail
          });

          dispatch(actions.userChangeEmail(data.newemail))
          dispatch(actions.successGlobal('Good job, Email Changed'))
      } catch(error){
          dispatch(actions.errorGlobal(error.response.data.message))
      }
  }
}  

export const userSignOut = () => {
    return async(dispatch)=> {
        removeTokenCookie();
        localStorage.removeItem('userState');
        dispatch(actions.userSignOut())
        dispatch(actions.successGlobal('Good bye !!'))
    }
}

export const userAddToCart = (item, quantity) => {
  return async (dispatch, getState) => {
    try {
      const { cart } = getState().users;
      const totalQuantity = cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
      const existingItemIndex = cart.findIndex((cartItem) => cartItem.Type === item.Type);

      if (totalQuantity + quantity > 4) {
        throw new Error("Maximum 4 Tickets can be added to cart");
      }

      if (existingItemIndex !== -1) {
        // Check if the total quantity including the new quantity exceeds the limit
        const newTotalQuantity = totalQuantity - cart[existingItemIndex].quantity + quantity;
        if (newTotalQuantity > 4) {
          throw new Error("Maximum 4 Tickets can be added to cart");
        }

        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += quantity;
        dispatch(actions.userAddToCart(updatedCart));
        quantity === 0
          ? dispatch(actions.errorGlobal("Cart Full :("))
          : dispatch(actions.successGlobal(`${quantity} ${item.Type} added to cart :)`));
      } else {
        const newItem = { ...item, quantity };
        dispatch(actions.userAddToCart([...cart, newItem]));
        dispatch(actions.successGlobal(`${quantity} ${item.Type} added to cart :)`));
      }
    } catch (error) {
      console.log("--> add", JSON.stringify(error, null, 2));
      dispatch(actions.errorGlobal(error.message || "An unexpected error occurred"));
    }
  };
};
  

export const removeFromCart = (position) => {
    return async(dispatch, getState)=>{
        try{
            const cart = getState().users.cart;
            cart.splice(position,1);

            dispatch(actions.userAddToCart(cart));
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}  

export const updateCartQuantity = (index, action) => {
    return async (dispatch, getState) => {
      try {
        const cart = getState().users.cart;
        const updatedCart = [...cart];

        // Calculate the current total quantity
        const currentTotalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
        
        if (action === 'INCREMENT' && currentTotalQuantity < 4 && updatedCart[index].quantity < 4) {
          // Increment quantity if it won't exceed the total limit (4) and the item limit (4)
          updatedCart[index].quantity++;
        } else if (action === 'DECREMENT' && updatedCart[index].quantity > 1) {
          // Decrement quantity if it's greater than 1
          updatedCart[index].quantity--;
        }
  
        dispatch(actions.userAddToCart(updatedCart));
      } catch (error) {
        dispatch(actions.errorGlobal(error.response.data.message));
      }
    };
  };


export const userPurchaseSuccess = (orderID) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/transaction/`,{
                orderID
            },getAuthHeader());

            dispatch(actions.successGlobal('Thank you !!'));
            dispatch(actions.userPurchaseSuccess(user.data))
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    };
};