import addMoviePage from "./pages/addMovie.js";
import editMoviePage from "./pages/editMovie.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import movieDetailsPage from "./pages/movieDetails.js";
import nav from "./pages/nav.js";
import registerPage from "./pages/register.js";
import viewChanger from "./viewChanger.js";

setup();

async function setup() {
    addMoviePage.setupSection(document.querySelector('#add-movie'));
    editMoviePage.setupSection(document.querySelector('#edit-movie'));
    homePage.setupSection(document.querySelector('#home-page'));
    loginPage.setupSection(document.querySelector('#form-login'));
    movieDetailsPage.setupSection(document.querySelector('#movie-details'));
    registerPage.setupSection(document.querySelector('#form-sign-up'));
    nav.setupSection(document.querySelector('#nav'));
    viewChanger.initiliaze();

    let appElement = document.querySelector('#main');

    appElement.querySelectorAll('.view').forEach(a => a.remove());
    appElement.appendChild(await homePage.getView());
}