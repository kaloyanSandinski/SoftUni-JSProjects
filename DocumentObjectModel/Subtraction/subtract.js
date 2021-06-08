function subtract() {
    let result = Number(document.querySelector('div#wrapper input#firstNumber').value) - Number(document.querySelector('div#wrapper input#secondNumber').value);
    document.querySelector('div#wrapper div#result').textContent = result;
}