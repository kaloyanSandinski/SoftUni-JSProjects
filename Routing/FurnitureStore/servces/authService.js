import { jsonRequester } from "../helpers/jsonRequester.js";

let baseUrl = 'http://localhost:3030/users';

function getAuthToken() {
    return localStorage.getItem('authToken');
}

function getUsername() {
    return localStorage.getItem('username');
}

function getUserId() {
    return localStorage.getItem('userId')
}

function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

async function login(user) {
    let result = await jsonRequester(`${baseUrl}/login`, 'Post', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('username', result.email);

}

async function register(user) {
    let result = await jsonRequester(`${baseUrl}/register`, 'Post', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('username', result.email);

}

async function logout(user) {
    let result = await jsonRequester(`${baseUrl}/logout`, 'Get', undefined, true, true);
    localStorage.clear();
}

export default {
    getAuthToken,
    getUsername,
    getUserId,
    isLoggedIn,
    login,
    register,
    logout
}