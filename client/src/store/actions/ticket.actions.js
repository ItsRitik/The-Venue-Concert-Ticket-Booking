import * as actions from './index';
import axios from "axios"

// import { getAuthHeader, removeTokenCookie, getTokenCookie } from '../../utils/tools';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const allticket = () => {
    return async(dispatch,getState)=>{
        const { tickets } = getState().tickets;
        if (!tickets || tickets.length === 0){        
            try{
            const tickets = await axios.get(`/api/ticket/all`);
            console.log(tickets)
            dispatch(actions.allticket(tickets.data));
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
}
    }
}


export const ticketById= (id) => {
    return async(dispatch)=>{
        try{
            const ticket =await axios.get(`/api/ticket/ticket/${id}`);
            dispatch(actions.ticketById(ticket.data));
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}
