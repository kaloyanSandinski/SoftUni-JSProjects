import auth from "./helpers/auth.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import movieDetailsPage from "./pages/movieDetails.js";
import registerPage from "./pages/register.js";

let views = {
    'home-link': async() => await homePage.getView(),
    'login-link': async() => await loginPage.getView(),
    'register-link': async() => await registerPage.getView(),
    'movie-details': async(id) => await movieDetailsPage.getView(id),
    'logout-link': async() => await auth.logout()
}

function initiliaze() {
    let allLinks = document.querySelectorAll('.link');
    allLinks.forEach(a => a.addEventListener('click', navigateTo))
}

async function navigateTo(e) {
    let id = e.target.id;
    let detailsId = e.target.dataset.id;
    if (detailsId !== undefined) {
        changeViewHandler(id, detailsId);
    } else {
        changeViewHandler(id);
    }
}

async function changeViewHandler(id, detailsId) {
    let changedPage = undefined;
    if (detailsId !== undefined) {
        console.log(id, detailsId)
        changedPage = await views[id](detailsId);
    } else {
        changedPage = await views[id]();
    }
    let appElement = document.querySelector('#main');
    appElement.querySelectorAll('.view').forEach(a => a.remove());
    appElement.appendChild(changedPage);
}

let viewChanger = {
    initiliaze,
    changeViewHandler,
    navigateTo
}

export default viewChanger;