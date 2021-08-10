import { html } from "../../node_modules/lit-html/lit-html.js";

export let editBookTemplate = (title, author) => html `
<form id="edit-form">
<input type="hidden" name="id">
<h3>Edit book</h3>
<label>TITLE</label>
<input id='title' type="text" name="title" placeholder="Title..." value =${title}>
<label>AUTHOR</label>
<input id='author' type="text" name="author" placeholder="Author..." value =${author}>
<input type="submit" value="Save">
</form>`;