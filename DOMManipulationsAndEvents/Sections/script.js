function create(words) {
    let parentDiv = document.querySelector('#content');
    for (const key in words) {
        let currDiv = document.createElement('div');
        let currPharagraph = document.createElement('p');
        currPharagraph.textContent = `${words[key]}`;
        currPharagraph.style.display = 'none';
        currDiv.appendChild(currPharagraph);
        currDiv.addEventListener('click', function unhide() {
            currDiv.children[0].style.display = '';
        })
        parentDiv.appendChild(currDiv);
    }
}