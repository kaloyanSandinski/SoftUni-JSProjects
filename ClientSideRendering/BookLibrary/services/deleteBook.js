import { books, getView } from "./getView.js";

let bookToEditId = undefined;

export async function onDeleteClicked(e) {
    let row = e.target.parentNode.parentNode;
    let title = row.children[0].textContent;
    let currBooks = Object.entries(books);
    currBooks.forEach(book => {
        if (book[1].title === title) {
            bookToEditId = book[0];
        }
    });
    let response = await fetch(`http://localhost:3030/jsonstore/collections/books/${bookToEditId}`, {
        method: 'Delete'
    })

    getView(document.querySelector('#all-books'));
}