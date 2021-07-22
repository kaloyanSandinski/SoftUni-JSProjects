function attachEvents() {
    document.querySelector('#submit').addEventListener('click', onSendClicked);
    document.querySelector('#refresh').addEventListener('click', onClickClicked);
}

async function onSendClicked() {
    let author = document.getElementsByName('author')[0].value;
    let content = document.getElementsByName('content')[0].value;
    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, content })
    });
    document.getElementsByName('author')[0].value = '';
    document.getElementsByName('content')[0].value = '';
}

async function onClickClicked() {
    let messagesField = document.querySelector('#messages');
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();
    let messageFieldContent = '';
    Object.entries(data).forEach(element => {
        let sender = element[1];
        messageFieldContent += `${sender.author}: ${sender.content}\n`;
    });
    messagesField.textContent = messageFieldContent;
}

attachEvents();