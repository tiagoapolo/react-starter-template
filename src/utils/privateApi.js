import axios from 'axios';

import { BASE_URL } from 'utils/variables';
import { getToken, getRefreshToken, getEmail } from './token';

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    config => {
        // Don't IE request cache
        config.headers['Pragma'] = 'no-cache';
        config.headers['x-access-token'] = getToken();
        config.headers['Access-Control-Allow-Origin'] = '*';

        return config;
    },
    error => Promise.reject(error),
);

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // console.log('error', error);
        return new Promise((resolve, reject) => {
            const originalReq = error.config;
            if (error.response.status === 401 && error.config && !error.config.__isRetryRequest) {
                originalReq._retry = true;

                console.log('originalReq', originalReq);

                let res = axios
                    .post(
                        `${BASE_URL}/token`,
                        {
                            token: getToken(),
                            refreshToken: getRefreshToken(),
                            email: getEmail(),
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'x-access-token': localStorage.getItem('token'),
                            },
                        },
                    )
                    .then(res => res.data)
                    .then(res => {
                        localStorage.setItem('logged', JSON.stringify(res));
                        originalReq.headers['x-access-token'] = res.token;

                        return axios(originalReq);
                    });

                resolve(res);
            }

            return Promise.reject(error);
        });
    },
);

export default api;
