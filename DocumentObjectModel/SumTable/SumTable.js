function sumTable() {
    let table = document.querySelectorAll('table tr td');
    let index = 0;
    let result = 0;
    console.log(table);
    for (const cell of table) {
        if (index % 2 != 0) {
            result += Number(cell.textContent);
        }

        index += 1;
    }
    document.querySelector('table tr td#sum').textContent = Number(result);
}