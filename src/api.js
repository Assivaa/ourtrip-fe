import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'));
export default axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
    }
})