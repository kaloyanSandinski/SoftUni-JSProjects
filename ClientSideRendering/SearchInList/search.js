import { render } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";
import { townsTemplate } from "./townsTemplate/townsTemplate.js";
import { getView } from "./townsTemplate/viewTowns.js";

let button = document.querySelector('article button');
let inputField = document.querySelector('#searchText');
let townsSection = undefined;

search();

function search() {
    townsSection = getView();
    render(townsTemplate(towns), townsSection);
    button.addEventListener('click', onSearchClicked);
}

function onSearchClicked() {
    console.log(inputField.value)
    townsSection.querySelectorAll('li').forEach(t => t.textContent.toLowerCase()
        .includes(inputField.value.toLowerCase()) ? t.className = 'active' : t.className = '');
}