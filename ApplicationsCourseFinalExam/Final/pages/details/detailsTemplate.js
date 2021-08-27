import { html } from "../../node_modules/lit-html/lit-html.js";

export let detailsTemplate = (model) => html `
<section id="game-details">
<h1>Game Details</h1>
<div class="info-section">

    <div class="game-header">
        <img class="game-img" src=${model.game.imageUrl} />
        <h1>${model.game.title}</h1>
        <span class="levels">${model.game.maxLevel}</span>
        <p class="type">${model.game.category}</p>
    </div>

    <p class="text">
        ${model.game.summary}
    </p>

    <!-- Bonus ( for Guests and Users ) -->
    

    <!-- Edit/Delete buttons ( Only for creator of this game )  -->
    ${model.isOwner
    ?html`
    <div class="buttons">
        <a href="/edit/${model.game._id}" class="button">Edit</a>
        <a href="#" class="button" @click=${(e) => model.deleteHandler(model.game._id, e)}>Delete</a>
    </div>`
    :''};
</div>

<!-- Bonus -->
<!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->


</section>`;


let bonusForGuesstsAndUsers = html`<div class="details-comments">
<h2>Comments:</h2>
<ul>
    <!-- list all comments for current game (If any) -->
    <li class="comment">
        <p>Content: I rate this one quite highly.</p>
    </li>
    <li class="comment">
        <p>Content: The best game.</p>
    </li>
</ul>
<!-- Display paragraph: If there are no games in the database -->
<p class="no-comment">No comments.</p>
</div>`;


let addComment = html`<article class="create-comment">
<label>Add new comment:</label>
<form class="form">
    <textarea name="comment" placeholder="Comment......"></textarea>
    <input class="btn submit" type="submit" value="Add Comment">
</form>
</article>`;