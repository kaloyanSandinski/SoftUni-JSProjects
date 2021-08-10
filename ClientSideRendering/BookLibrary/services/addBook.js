import { render } from "../../node_modules/lit-html/lit-html.js";
import { addBookTemplate } from "../templates/addBookTemplate.js";
import { getView } from "./getView.js";

export function addGetView(section) {
    render(addBookTemplate(), section);
    section.querySelector('form').addEventListener('submit', addBook)
}

export async function addBook(e) {
    e.preventDefault();
    let title = e.target.querySelector('#title').value;
    let author = e.target.querySelector('#author').value;
    if (title !== '' && author !== '') {
        let response = await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: author, title: title })
        })
        e.target.querySelector('#title').value = '';
        e.target.querySelector('#author').value = '';
        getView(e.target.parentNode.parentNode.querySelector('#all-books'));
    } else {
        alert('Title and author must be filled!');
    }
}