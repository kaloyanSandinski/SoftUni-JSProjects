function colorize() {
    let tableRows = document.querySelectorAll('table tr');
    let index = 1;
    for (const row of tableRows) {
        if (index % 2 == 0) {
            row.style.background = 'teal';
        }
        index++;
    }
}