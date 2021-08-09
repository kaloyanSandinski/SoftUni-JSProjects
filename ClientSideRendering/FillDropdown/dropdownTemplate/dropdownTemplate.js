import { html } from "../../node_modules/lit-html/lit-html.js";

export let dropdownTemplate = (itemsInDropdown) => html `
${itemsInDropdown.map(i => html`<option value="${i._id}">${i.text}</option>`)}`;