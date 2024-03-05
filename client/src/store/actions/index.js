import {
    ERROR_GLOBAL,
    SUCCESS_GLOBAL,
    CLEAR_NOTIFICATION,
    AUTH_USER,
    SIGN_OUT,
    USER_ADD_TO_CART,
    GET_TICKET_BY_ID,
    GET_ALL_TICKET,
    PURCHASE_SUCCESS
} from '../types';



///  USER

export const userAuthenticate = (user) => ({
    type:AUTH_USER,
    payload: user
});


export const userSignOut = () => ({
    type:SIGN_OUT
})

export const userAddToCart = (data) => ({
    type: USER_ADD_TO_CART,
    payload:data
})

export const userPurchaseSuccess = (data) => ({
    type:PURCHASE_SUCCESS,
    payload:data
})


/// NOTIFICATIONS

export const errorGlobal = (msg) => ({
    type:ERROR_GLOBAL,
    payload: msg
})

export const successGlobal = (msg) => ({
    type:SUCCESS_GLOBAL,
    payload: msg
})

export const clearNotification = () => {
    return (dispatch) => {
        dispatch({
            type:CLEAR_NOTIFICATION
        })
    }
} 

//TICKETS

export const ticketById = (ticket) => ({
    type:GET_TICKET_BY_ID,
    payload:ticket
})
    

export const allticket = (data) => ({
    type: GET_ALL_TICKET,
    payload: data
})