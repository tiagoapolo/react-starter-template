export const getToken = () => {
    try {
        return JSON.parse(localStorage.getItem('logged') || {}).token;
    } catch (error) {
        return null;
    }
};

export const getRefreshToken = () => {
    try {
        return localStorage.getItem('refresh');
    } catch (error) {
        return null;
    }
};

export const getEmail = () => {
    try {
        return JSON.parse(localStorage.getItem('logged') || {}).email;
    } catch (error) {
        return null;
    }
};
export const getAuth = () => {
    try {
        return JSON.parse(localStorage.getItem('logged') || {}).auth;
    } catch (error) {
        return false;
    }
};
