import axios from 'axios';
import { API_CLIENTS_URL } from 'configs/AppConfig';
import history from '../history';
import { AUTH_TOKEN } from 'redux/constants/Auth';
import { notification } from 'antd';

const service = axios.create({
    baseURL: API_CLIENTS_URL,
    timeout: 60000
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        notification.error({
            message: 'Error'
        });
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        let notificationParam = {
            message: ''
        };

        if (error.response && error.response.status === 404) {
            notificationParam.message = 'Not Found';
        }

        if (error.response && error.response.status === 500) {
            notificationParam.message = 'Internal Server Error';
        }

        if (error.response && error.response.status === 508) {
            notificationParam.message = 'Time Out';
        }

        notification.error(notificationParam);

        return Promise.reject(error);
    }
);

export default service;
