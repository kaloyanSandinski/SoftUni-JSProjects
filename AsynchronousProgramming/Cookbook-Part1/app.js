async function getRecepieList() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';
    const main = document.querySelector('main');

    const response = await fetch(url);
    const recepies = await response.json();
    main.innerHTML = '';
    Object.values(recepies).forEach(r => {
        const res = generateElements(r);
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
    article.addEventListener('click', () => createRecepieDetailedElement(recepie._id, article));
    return article;
}

async function createRecepieDetailedElement(id, preview) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const divBand = document.createElement('div');
    const divThumb = document.createElement('div');
    const img = document.createElement('img');
    const divIngredients = document.createElement('div');
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    const divDescription = document.createElement('div');
    const h3Description = document.createElement('h3');

    h2.textContent = 'Title';
    divBand.className = 'band';
    divThumb.className = 'thumb';
    img.src = data.img;
    divIngredients.className = 'ingredients';
    h3.textContent = 'Ingredients:';
    data.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ul.appendChild(li);
    });
    divDescription.className = 'description';
    h3Description.textContent = 'Preparation:';
    divThumb.appendChild(img);
    divBand.appendChild(divThumb);
    divIngredients.appendChild(h3);
    divIngredients.appendChild(ul);
    divBand.appendChild(divIngredients);
    divDescription.appendChild(h3Description);
    data.steps.forEach(step => {
        const p = document.createElement('p');
        p.textContent = step;
        divDescription.appendChild(p)
    });

    article.appendChild(h2);
    article.appendChild(divBand)
    article.appendChild(divDescription);
    preview.parentNode.replaceChild(article, preview);
    article.addEventListener('click', () => {
        article.parentNode.replaceChild(preview, article);
    })
}