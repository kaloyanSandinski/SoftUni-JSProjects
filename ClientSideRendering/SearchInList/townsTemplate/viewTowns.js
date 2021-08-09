import { render } from "../../node_modules/lit-html/lit-html.js"
import { towns } from "../towns.js";
import { townsTemplate } from "./townsTemplate.js";


export function getView() {
    let townsSection = document.querySelector('#towns');
    return townsSection;
}