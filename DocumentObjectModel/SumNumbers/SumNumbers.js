function calc() {
    // TODO: sum = num1 + num2
    let sum = document.querySelector('input#sum');
    sum.value = Number(document.querySelector('input#num1').value) +
        Number(document.querySelector('input#num2').value);
}