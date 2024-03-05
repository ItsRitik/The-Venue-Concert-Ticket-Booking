import {
    GET_ALL_TICKET,
    GET_TICKET_BY_ID,
} from '../types';


export default function ticketsReducer(state={},action){
    switch(action.type){
        case GET_ALL_TICKET:
            return {...state, tickets: action.payload }
        case GET_TICKET_BY_ID:
            return {...state, byId: action.payload }
        default:
            return state
    }
}