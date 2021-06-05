function extractText() {
    const items = document.querySelectorAll('ul#items li');
    const textField = document.querySelector('textarea#result');
    let outputStr = '';
    for (const item of items) {
        outputStr += item.textContent + '\n';
    }
    textField.value = outputStr.trim();
}