import { html } from "../../node_modules/lit-html/lit-html.js";

export let catTemplate = (cats) => html `
<ul>
${cats.map(c=>html`<li>
    <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${clickHandler}>Show status code</button>
        <div class="status" style="display: none" id="100">
            <h4>Status Code: ${c.statusCode}</h4>
            <p>${c.statusMessage}</p>
        </div>
    </div>
    </li>`)}
</ul>`;

function clickHandler(e){
    if (e.target.textContent == 'Hide status code') {
    e.target.textContent = 'Show status code';
    e.target.parentNode.querySelector('.status').style.display = 'none';
    }else{
        e.target.textContent = 'Hide status code'
        e.target.parentNode.querySelector('.status').style.display = 'inline';
    }
    
}