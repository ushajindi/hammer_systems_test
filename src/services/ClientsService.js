import fetch from "../clients/FetchInterceptor"


const clientService = {}

clientService.getClients = function() {
    return fetch({
        url: "/users",
        method: "get"
    })
        .then(response => {
            return response;
        })
        .catch(error => {
            throw error;
        });
};

export default clientService