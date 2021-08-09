import { getView } from "./dropdownTemplate/dropdownView.js";
import { getData, pushData } from "./services/getAndPostData.js";

let form = document.querySelector('form');
form.addEventListener('submit', onSubmitClicked);

async function start() {
    let rawData = await getData();
    let data = Object.values(rawData);
    getView(data);
}

async function onSubmitClicked(e) {
    e.preventDefault();
    let itemToAdd = e.target.querySelector('#itemText').value;
    pushData(itemToAdd);
    e.target.querySelector('#itemText').value = '';
    start();
}

start();