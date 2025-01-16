import axios from 'axios';

const API = axios.create({
    baseURL:'http://localhost:8200'
})

export const userLogin = (loginData)=>API.post('/login',loginData);

export const userSignup = (signupData)=>API.post('/signup',signupData)