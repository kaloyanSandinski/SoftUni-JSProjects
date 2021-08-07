import loginPage from "../pages/login.js";
import { jsonRequest } from "./httpService.js";

export function setAuthToken(token) {
    localStorage.setItem('authToken', token);
}

export function getAuthToken(token) {
    return localStorage.getItem('authToken');
}

export function isLoggeddIn() {
    return localStorage.getItem('authToken') !== null ||
        localStorage.getItem('authToken') !== undefined;
}

export async function logout() {
    let result = await jsonRequest('http://localhost:3030/users/logout', 'Get', undefined, true, true);
    localStorage.clear();
    let form = loginPage.getView();
    form.querySelector('[placeholder="Email"]').value = '';
    form.querySelector('[placeholder="Password"]').value = '';
    return await loginPage.getView();
}

let auth = {
    setAuthToken,
    getAuthToken,
    isLoggeddIn,
    logout
};

export default auth;