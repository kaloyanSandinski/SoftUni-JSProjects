let url = 'http://localhost:3030/jsonstore/advanced/dropdown';

export async function getData() {
    let response = await fetch(url);
    let result = await response.json();
    return result;
}

export async function pushData(data) {
    let response = await fetch(url, {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: data })
    })
}