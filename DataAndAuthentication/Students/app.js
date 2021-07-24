function creatingAndListingStudents() {
    window.addEventListener('load', windowOnLoad);
    document.querySelector('#submit').addEventListener('click', onSubmitClicked);
}

async function windowOnLoad() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();
    creatingTable(data);
}

function creatingTable(data) {
    let tableBody = document.querySelector('tbody');
    Object.keys(data).forEach(key => {
        let tr = creatingDOMElement('tr');
        tr.appendChild(creatingDOMElement('td', `${data[key].firstName}`));
        tr.appendChild(creatingDOMElement('td', `${data[key].firstName}`));
        tr.appendChild(creatingDOMElement('td', `${data[key].facultyNumber}`));
        tr.appendChild(creatingDOMElement('td', `${data[key].grade}`));
        tableBody.appendChild(tr);
    });
}

async function onSubmitClicked() {
    let firstName = document.getElementsByName('firstName')[0].value;
    let lastName = document.getElementsByName('lastName')[0].value;
    let facultyNumber = document.getElementsByName('facultyNumber')[0].value;
    let grade = document.getElementsByName('grade')[0].value;

    const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    })
    windowOnLoad();
}

function creatingDOMElement(type, content) {
    let element = document.createElement(type);
    element.textContent = content;
    return element;
}

creatingAndListingStudents();