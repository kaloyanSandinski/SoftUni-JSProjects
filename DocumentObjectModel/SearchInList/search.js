function search() {
    let towns = Array.from(document.querySelectorAll('ul#towns li'));
    let searchBox = document.querySelector('input#searchText').value;
    let counter = 0;
    towns.forEach(town => {
        if (town.textContent.includes(searchBox)) {
            counter++;
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
        }
    });

    document.querySelector('div#result').textContent = `${counter} matches found`;
}