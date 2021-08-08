import { render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
import { catTemplate } from "./catTemplate.js/catTemplate.js";

let allCatsSection = document.querySelector('#allCats');
let allCatsPage = catTemplate(cats);

render(allCatsPage, allCatsSection);