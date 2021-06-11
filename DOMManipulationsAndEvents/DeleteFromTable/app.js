function deleteByEmail() {
    let inputText = document.getElementsByName('email')[0].value;
    let elementsInTable = document.querySelectorAll("#customers tr td:nth-child(2)");
    let resultField = document.getElementById('result');
    for (const td of elementsInTable) {
        if (td.textContent == inputText) {
            resultField.textContent = 'Deleted.';
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            return;
        }

        resultField.textContent = 'Not found.';
    }
}