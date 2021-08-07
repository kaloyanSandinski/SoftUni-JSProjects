import auth from "../helpers/auth.js";
import { jsonRequest } from "../helpers/httpService.js";
import viewChanger from "../viewChanger.js";

let section = undefined;

async function setupSection(domElement) {
    section = domElement;
    let form = section.querySelector('#register-form');
    form.addEventListener('submit', registerUser);
}

async function getView() {
    return section;
}

async function registerUser(e) {
    e.preventDefault();
    try {
        let form = e.target;
        let formData = new FormData(form);
        if (formData.get('email') === '' ||
            formData.get('password') === '' ||
            formData.get('password').length < 6 ||
            formData.get('repeatPassword') === '' ||
            formData.get('password') !==
            formData.get('repeatPassword')) {
            throw Error('Input fields must be filled and passwords must mach!');
        }
        let user = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        let url = 'http://localhost:3030/users/register';
        let result = await jsonRequest(url, 'Post', user);

        auth.setAuthToken(result.accessToken);
        viewChanger.changeViewHandler('home-link');
    } catch (error) {
        alert(error.message);
    }
}

let registerPage = {
    setupSection,
    getView
}

export default registerPage;