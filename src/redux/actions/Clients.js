import {CLIENT_ADD, CLIENT_REMOVE, CLIENT_EDIT, CLIENT_GET, CLIENT_PROFILE} from '../constants/Clients';
export const getClients=()=>{
    return{
        type:CLIENT_GET
    }
}
export const addClient = (data) => {
    return {
        type: CLIENT_ADD,
        payload: data
    };
};
export const clientProfile = (data) => {
    return {
        type: CLIENT_PROFILE,
        payload: data
    };
};

export const removeClient = (clientId) => {
    return {
        type: CLIENT_REMOVE,
        payload: clientId
    };
};