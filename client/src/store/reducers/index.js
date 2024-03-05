import { combineReducers } from 'redux';
import users from './users.reducer';
import notificationsReducer from './notification.reducer';
import tickets from './tickets.reducer';

const appReducers = combineReducers({
    users,
    notificationsReducer,
    tickets
});

export default appReducers;