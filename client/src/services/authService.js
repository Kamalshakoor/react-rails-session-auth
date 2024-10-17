import axios from 'axios';
const API_URL = 'http://localhost:3000/api/v1'
                                                                          
const signup = (username, email, password, confirmPassword) => {
    return axios.post(`${API_URL}/users`, {
      user: {
        username,
        email,
        password,
        password_confirmation: confirmPassword
    }
    }, {withCredentials: true})
}

const login = (email, password) => {
    return axios.post(`${API_URL}/login`, {
        email,
        password
    },{withCredentials: true})
}

const logout = () => {
    return axios.delete(`${API_URL}/logout`, {}, {withCredentials: true})
}

const checkAuthStatus = () => {
    return axios.get(`${API_URL}/check_auth`, {withCredentials: true})
}

const authService = {
    signup,
    login,
    logout,
    checkAuthStatus
}

export default authService