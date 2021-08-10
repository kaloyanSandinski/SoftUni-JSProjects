import { render } from "../../node_modules/lit-html/lit-html.js";
import { editBookTemplate } from "../templates/editBookTemplate.js";
import { addGetView } from "./addBook.js";
import { books, getView } from "./getView.js";

let bookToEditId = undefined;

export async function onEditClicked(e) {
    let row = e.target.parentNode.parentNode;
    let title = row.children[0].textContent;
    let author = row.children[1].textContent;
    let bookToEdit = row.querySelector('td').textContent;
    let currBooks = Object.entries(books);
    currBooks.forEach(book => {
        if (book[1].title === bookToEdit) {
            bookToEditId = book[0];
        }
    });
    editGetView(title, author, document.querySelector('body').querySelector('#add-edit-section'));
    document.querySelector('body').querySelector('#add-edit-section form').addEventListener('submit', onSaveClicked);
}

async function editGetView(title, author, section) {
    render(editBookTemplate(title, author), section);
}

async function onSaveClicked(e) {
    e.preventDefault();
    let response = await fetch(`http://localhost:3030/jsonstore/collections/books/${bookToEditId}`, {
        method: 'Put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: e.target.querySelector('#author').value, title: e.target.querySelector('#title').value })
    })
    getView(document.querySelector('#all-books'));
    addGetView(document.querySelector('#add-edit-section'));
}