import { html } from "../../node_modules/lit-html/lit-html.js";

export let allGamesTemplate = (allGames, isEmpty) => html `
<section id="catalog-page">
<h1>All Games</h1>
${isEmpty
?html`<h3 class="no-articles">No articles yet</h3>`
:html`${allGames.map(g=>html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${g.imageUrl}>
        <h6>${g.title}</h6>
        <h2>${g.category}</h2>
        <a href="/details/${g._id}" class="details-button">Details</a>
    </div>

</div>`)}`}

</section>`;