function fromJSONToHTMLTable(inputData) {
    let inputArr = JSON.parse(inputData);
    let tableHTMLOutput = '';

    tableHTMLOutput += '<table>\n';
    tableHTMLOutput += '<tr>';

    Object.keys(inputArr[0]).forEach(element => {
        tableHTMLOutput += `<th>${element}</th>`;
    });

    tableHTMLOutput += '</tr>\n';

    inputArr.forEach(obj => {
        tableHTMLOutput += '<tr>';

        Object.values(obj).forEach(element => {
            tableHTMLOutput += `<td>${element}</td>`;
        });

        tableHTMLOutput += '</tr>\n';
    });

    tableHTMLOutput += '</table>\n';

    return tableHTMLOutput;
}

console.log(fromJSONToHTMLTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]'));