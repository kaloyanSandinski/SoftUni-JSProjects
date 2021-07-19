document.querySelector('form').addEventListener('submit', onCreateSubmit);

async function onCreateSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get('name');
    const image = formData.get('img');
    const ingredients = formData.get('ingredients')
        .split('\n')
        .map(l => l.trim())
        .filter(x => x != '');
    const steps = formData.get('steps')
        .split('\n')
        .map(l => l.trim())
        .filter(x => x != '');

    const token = sessionStorage.getItem('userToken');

    const response = await fetch('http://localhost:3030/data/recipes', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ name, image, ingredients, steps })
    });

    if (response.ok == false) {
        const error = await response.json();
        return alert(error.message);
    }

    window.location.pathname = 'index.html';
};