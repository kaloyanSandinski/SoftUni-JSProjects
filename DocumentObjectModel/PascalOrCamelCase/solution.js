function solve() {
    let inputTextArr = Array.from(document.querySelector('body form div input#text').value.toLowerCase().split(' '));
    let namingConvention = document.querySelector('body form div input#naming-convention').value;
    let output = '';
    if (namingConvention == 'Pascal Case') {
        for (const word of inputTextArr) {
            output += word[0].toUpperCase() + word.substring(1);
        }
    } else if (namingConvention == 'Camel Case') {
        for (let index = 0; index < inputTextArr.length; index++) {
            if (index === 0) {
                output += inputTextArr[index];
            } else {
                output += inputTextArr[index][0].toUpperCase() + inputTextArr[index].substring(1);
            }
        }
    } else {
        output += 'Error!';
    }
    document.querySelector('body div span#result').textContent = output;
}