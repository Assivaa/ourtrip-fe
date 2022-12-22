import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'));
export default axios.create({
    baseURL: 'https://sugary-gifted-enthusiasm.glitch.me/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
<<<<<<< HEAD
        // 'Authorization': `Bearer ${user.token}`
=======
        'Authorization': `Bearer ${user ? user.token : null}`
>>>>>>> d25b586a346da90c23df51300c486f5caaab4152
    }
})