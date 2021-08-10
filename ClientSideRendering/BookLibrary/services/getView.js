import { render } from "../../node_modules/lit-html/lit-html.js";
import { addBookTemplate } from "../templates/addBookTemplate.js";
import { booksTemplate } from "../templates/booksTemplate.js";

let url = 'http://localhost:3030/jsonstore/collections/books';

export let books = undefined;

export async function getView(section) {
    let response = await fetch(url);
    let result = await response.json();
    books = result;
    render(booksTemplate(Object.values(result)), section);
}