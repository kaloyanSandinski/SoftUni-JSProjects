import { render } from "../../node_modules/lit-html/lit-html.js";
import { dropdownTemplate } from "./dropdownTemplate.js";
let dropdownSection = document.querySelector('#menu');

export function getView(data) {
    render(dropdownTemplate(data), dropdownSection);
}