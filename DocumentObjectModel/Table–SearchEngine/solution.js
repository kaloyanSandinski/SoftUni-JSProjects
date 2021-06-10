function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let tableRows = Array.from(document.querySelectorAll('tbody tr'));
        let searchedText = document.querySelector('#searchField').value;

        tableRows.forEach(row => {
            row.className = '';
        });

        let filteredRows = tableRows.filter(row => {
            let rowValues = Array.from(row.children);
            if (rowValues.some(td => td.textContent.includes(searchedText))) {
                row.className = 'select';
            }
        })
        document.querySelector('#searchField').value = '';
    }
}