// usersReducer.js

import {
    AUTH_USER,
    SIGN_OUT,
    USER_ADD_TO_CART,
    PURCHASE_SUCCESS
  } from '../types';
  
  const loadState = () => {
    try {
      const serializedState = localStorage.getItem('userState');
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
      return undefined;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('userState', serializedState);
    } catch (err) {
      // Handle errors
    }
  };
  
  // Load initial state from localStorage
  const DEFAULT_USER_STATE = loadState() || {
    data: {
      _id: null,
      email: null,
      firstname: null,
      lastname: null,
      history: [],
      verified: null
    },
    auth: null,
    cart: []
  };
  
  export default function usersReducer(state = DEFAULT_USER_STATE, action) {
    switch (action.type) {
      case AUTH_USER:
        const newStateAuth = {
          ...state,
          data: { ...state.data, ...action.payload.data },
          auth: action.payload.auth
        };
        saveState(newStateAuth); // Save updated state to localStorage
        return newStateAuth;
  
      case SIGN_OUT:
        const newStateSignOut = {
          ...state,
          data: { ...DEFAULT_USER_STATE.data },
          auth: false
        };
        saveState(newStateSignOut); // Save updated state to localStorage
        return newStateSignOut;
  
      case USER_ADD_TO_CART:
        const newStateCart = {
          ...state,
          cart: action.payload
        };
        saveState(newStateCart); // Save updated state to localStorage
        return newStateCart;
        
        case PURCHASE_SUCCESS:
            return {...state,
                data:{
                    ...state.data,
                    history: action.payload.history
                },
                cart:[]            
            }
      default:
        return state;
    }
  }
  