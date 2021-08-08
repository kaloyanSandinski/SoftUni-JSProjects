import { render } from "../node_modules/lit-html/lit-html.js";
import { listOfTownsTemplate } from "./listOfTowns.js";

document.querySelector('.content').addEventListener('submit', getAllTheTowns);

function getAllTheTowns(e) {
    e.preventDefault();
    let towns = e.target.querySelector('#towns').value.split(/,| /g).filter(t => t !== '');
    render(listOfTownsTemplate(towns), document.querySelector('#root'));
}