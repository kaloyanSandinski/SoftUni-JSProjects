import { addGetView } from "./services/addBook.js";
import { getView } from "./services/getView.js";
let loadBooksBtn = document.querySelector('body #loadBooks');

async function start() {
    loadBooksBtn.addEventListener('click', onLoadClicked);
}

async function onLoadClicked(e) {
    getView(e.target.parentNode.querySelector('#all-books'));
    addGetView(e.target.parentNode.querySelector('#add-edit-section'));
}

start();