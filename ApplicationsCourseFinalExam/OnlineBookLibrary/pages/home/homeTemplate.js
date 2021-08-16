import { html } from '../../node_modules/lit-html/lit-html.js';
export let homeTemplate = (books, isEmpty) => html `
<section id="dashboard-page" class="dashboard">
<h1>Dashboard</h1>
<ul class="other-books-list">
${books.map(m=>html`
<li class="otherBooks">
    <h3>${m.title}</h3>
    <p>Type: ${m.type}</p>
    <p class="img"><img src=${m.imageUrl}></p>
    <a class="button" href="/details">Details</a>
</li>`)}
</ul>
${isEmpty
? html`<p class="no-books">No books in database!</p>`
:html``}
</section>`;