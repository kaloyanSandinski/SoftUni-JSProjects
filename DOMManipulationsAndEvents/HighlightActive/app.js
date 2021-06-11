function focused() {
    let textFields = document.querySelectorAll('input');
    for (const currField of textFields) {
        currField.addEventListener('focus', function() { this.parentNode.className = 'focused'; });
        currField.addEventListener('blur', function() { this.parentNode.className = ''; });
    }
}