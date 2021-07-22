function attachEvents() {
    document.querySelector('#btnLoad').addEventListener('click', onLoadClicked);
    document.querySelector('#btnCreate').addEventListener('click', onCreateClicked);
}

async function onLoadClicked() {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();
    let ulPhoneBook = document.querySelector('#phonebook');
    ulPhoneBook.innerHTML = '';
    Object.keys(data).forEach(currPersonInfo => {
        let personName = data[currPersonInfo].person;
        let phone = data[currPersonInfo].phone;
        let element = createDOMElement(personName, phone);
        element.querySelector('button').addEventListener('click', async(event) => {
            const response = await fetch(`http://localhost:3030/jsonstore/phonebook/${currPersonInfo}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            event.target.parentNode.remove();
        })
        ulPhoneBook.appendChild(element)
    });
}

async function onCreateClicked() {
    let person = document.querySelector('#person').value;
    let phone = document.querySelector('#phone').value;

    let response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: { 'Content-type': 'aplication/json' },
        body: JSON.stringify({ person, phone })
    })
    document.querySelector('#person').value = '';
    document.querySelector('#phone').value = '';
    onLoadClicked();
}

function createDOMElement(name, phone) {
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.textContent = 'Delete';
    li.textContent = `${name}: ${phone}`;
    li.appendChild(button);
    return li;
}

attachEvents();