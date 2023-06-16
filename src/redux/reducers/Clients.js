import {CLIENT_ADD, CLIENT_PROFILE, CLIENT_REMOVE} from "../constants/Clients";


const initialState = {
    clients: [],
    clientProfile:{}
};

// Редьюсер для клиентов
const clientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_ADD:
            return {
                ...state,
                clients: [...state.clients, ...action.payload],
            };
            case CLIENT_PROFILE:
            return {
                ...state,
                clientProfile:action.payload,
            };
        case CLIENT_REMOVE:
            return {
                ...state,
                clients: state.clients.filter(client => client.id !== action.payload)
            };
        default:
            return state;
    }
};

export default clientsReducer;