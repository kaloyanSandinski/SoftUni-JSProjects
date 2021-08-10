import { render } from "../node_modules/lit-html/lit-html.js";
import { getData } from "./services/getData.js";
import { tableRowTemplate } from "./tableRowTemplate/tableRowTemplate.js";

let tbody = document.querySelector('tbody');

async function solve() {
    let data = await getData();
    render(tableRowTemplate(Object.values(data)), tbody)

    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick(e) {
        let inputField = e.target.parentNode.querySelector('#searchField').value.toLowerCase();
        let allTRs = [...document.querySelectorAll('tbody tr')];

        for (let i = 0; i < allTRs.length; i++) {
            allTRs[i].className = '';
            allTRs[i].querySelectorAll('td').forEach(td => {
                if (td.textContent.toLowerCase().includes(inputField)) {
                    allTRs[i].className = 'select';
                }
            });
        }
    }
}

solve();