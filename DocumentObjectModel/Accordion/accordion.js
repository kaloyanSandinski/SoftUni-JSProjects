function toggle() {
    let text = document.querySelector('body div#accordion div#extra');
    let textButton = document.querySelector('body div#accordion div span');
    if (textButton.textContent == 'More') {
        textButton.textContent = 'Less';
        text.style.display = 'block';
    } else {
        textButton.textContent = 'More';
        text.style.display = 'none';
    }
}