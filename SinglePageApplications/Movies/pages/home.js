import { jsonRequest } from "../helpers/httpService.js";
import viewChanger from "../viewChanger.js";

let section = undefined;

function setupSection(domElement) {
    section = domElement;
}

async function getView() {
    let url = `http://localhost:3030/data/movies`;
    let movies = await jsonRequest(url);
    let movieHtlm = movies.map(m => createHtmlMovie(m)).join('\n');
    let movieContainer = section.querySelector('#movie-container');
    movieContainer.innerHTML = '';
    movieContainer.innerHTML = movieHtlm;
    movieContainer.querySelectorAll('button').forEach(m => m.addEventListener('click', viewChanger.navigateTo))
    return section;
}

function createHtmlMovie(movie) {
    let elem = `<div class="card mb-4">
    <img class="card-img-top" src="${movie.img}">
    <div class="card-body">
        <h4 class="card-title">${movie.title}4</h4>
    </div>
    <div class="card-footer">
        <a class = "link" href="#/details/6lOxMFSMkML09wux6sAF">
            <button id = "movie-details" data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>

</div>`;
    return elem;
}

let homePage = {
    setupSection,
    getView
}

export default homePage;