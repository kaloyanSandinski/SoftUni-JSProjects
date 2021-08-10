import { html } from "../../node_modules/lit-html/lit-html.js";
import { onDeleteClicked } from "../services/deleteBook.js";
import { onEditClicked } from "../services/editBook.js";

export let booksTemplate = (allBooks) => html `
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${allBooks.map(b=>html`
            <tr>
                <td>${b.title}</td>
                <td>${b.author}</td>
                <td>
                    <button @click=${onEditClicked}>Edit</button>
                    <button @click=${onDeleteClicked}>Delete</button>
                </td>
            </tr>`)}
        </tbody>
    </table>`;