async function getRecepieList() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';
    const main = document.querySelector('main');

    const response = await fetch(url);
    const recepies = await response.json();
    main.innerHTML = '';
    Object.values(recepies).forEach(r => {
        const res = generateElements(r);
        console.log(res);
        main.appendChild(res);
    });
}

window.addEventListener('load', getRecepieList);

function generateElements(recepie) {
    const article = document.createElement('article');
    const titleDiv = document.createElement('div');
    const smallDiv = document.createElement('div');
    const h = document.createElement('h2');
    const img = document.createElement('img');

    article.className = 'preview';
    titleDiv.className = 'title';
    smallDiv.className = 'small';
    h.textContent = recepie.name;
    img.src = recepie.img;
    titleDiv.appendChild(h);
    smallDiv.appendChild(img);
    article.appendChild(titleDiv);
    article.appendChild(smallDiv);
    return article;
}