function solve() {
    let outputElement = document.querySelector('#output');
    let wholeTextArr = document.querySelector('#input').value.split('.').filter(x => x !== '').map(x => x + '.');
    let paragraphRoof = Math.ceil(wholeTextArr.length / 3);
    for (let i = 0; i < paragraphRoof; i++) {

        outputElement.innerHTML += `<p>${wholeTextArr.splice(0,3)}</p>`;
    }
}