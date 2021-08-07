import { jsonRequest } from "../helpers/httpService.js";

let section = undefined;

function setupSection(domElement) {
    section = domElement;
}

async function getView(id) {
    if (id !== undefined) {
        console.log(id)
        let url = `http://localhost:3030/data/movies/${id}`;
        console.log(url);
        let movieDetail = await jsonRequest(url);
        let movieDetailsHtlm = createMovieDetailsHtml(movieDetail);
        let movieContainer = section.querySelector('.movie-details-container');
        console.log(movieContainer)
        movieContainer.innerHTML = '';
        movieContainer.innerHTML = movieDetailsHtlm;
        return section;
    }
}

function createMovieDetailsHtml(movie) {
    let elem = `<div class="row bg-light text-dark">
    <h1>Movie title: ${movie.title}</h1>

    <div class="col-md-8">
        <img class="img-thumbnail" src="${movie.img}" alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>"${movie.description}"</p>
        <a class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="#">Edit</a>
        <a class="btn btn-primary" href="#">Like</a>
        <span class="enrolled-span">Liked 1</span>
    </div>
</div>`;
    return elem;
}

let movieDetailsPage = {
    setupSection,
    getView
}

export default movieDetailsPage;