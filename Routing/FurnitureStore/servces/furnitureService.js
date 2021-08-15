import { jsonRequester } from "../helpers/jsonRequester.js";

let baseUrl = 'http://localhost:3030/data/catalog';

async function getAll() {
    let result = await jsonRequester(baseUrl);
    return result;
}

async function get(id) {
    let result = await jsonRequester(`${baseUrl}/${id}`);
    return result;
}

async function create(item) {
    let result = await jsonRequester(`${baseUrl}`, 'Post', item, true);
    return result;
}

async function update(item, id) {
    let result = await jsonRequester(`${baseUrl}/${id}`, 'Put', item, true);
    return result;
}

async function deleteItem(id) {
    let result = await jsonRequester(`${baseUrl}/${id}`, 'Delete', undefined, true);
    return result;
}

export default {
    getAll,
    get,
    update,
    create,
    deleteItem
}