import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import clientsReducer from "./Clients";

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    clients:clientsReducer
});

export default reducers;