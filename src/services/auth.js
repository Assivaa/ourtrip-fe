import axios from 'axios';

const API_URL = 'https://sugary-gifted-enthusiasm.glitch.me/';

const signup = (firstName, lastName, email, password) => {
    return axios.post(API_URL + 'api/signup', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    });
};

const login = (email, password) => {
    return axios.post(API_URL + 'api/login', {
        email: email,
        password: password
    })
    .then(response => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const authService = {
    signup,
    login,
    logout,
    getCurrentUser
};

export default authService;