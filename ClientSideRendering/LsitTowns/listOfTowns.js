import { html } from "../node_modules/lit-html/lit-html.js";

export let listOfTownsTemplate = (towns) => html `
<ul>
    ${towns.map(t=>html`<li>${t}</li>`)}
</ul>`;