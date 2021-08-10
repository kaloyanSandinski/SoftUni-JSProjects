let url = 'http://localhost:3030/jsonstore/advanced/table';

export async function getData() {
    let response = await fetch(url);
    let result = await response.json();
    return result;
}