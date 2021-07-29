//import { onClickTitle } from "./clickOnTitle.js";

async function loadAllPosts() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    const rawData = await response.json();
    let topicContainer = document.querySelector('.topic-container');
    topicContainer.innerHTML = '';
    Object.values(rawData).forEach(title => {
        let topicNameWrapper = createDOMElement('div', '', 'topic-name-wrapper')
        let topicName = createDOMElement('div', '', 'topic-name');
        let a = createDOMElement('a', '', 'normal');
        a.href = '#';
        a.appendChild(createDOMElement('h2', title.title));
        topicName.appendChild(a);
        let divColumns = createDOMElement('div', '', 'columns');
        let div = createDOMElement('div', '');
        let p = createDOMElement('p', 'Date:');
        p.appendChild(createDOMElement('time', title.dateTime));
        div.appendChild(p);
        let divNickName = createDOMElement('div', '', 'nick-name');
        let nickP = createDOMElement('p', 'Username:');
        nickP.appendChild(createDOMElement('span', title.username));
        divNickName.appendChild(nickP);
        div.appendChild(divNickName);
        divColumns.appendChild(div);
        topicName.appendChild(divColumns);
        topicNameWrapper.appendChild(topicName);
        topicNameWrapper.querySelector('h2').addEventListener('click', (event) => {
            event.preventDefault();
            sessionStorage.setItem('Title-Name', JSON.stringify([title.title, title.postContent, title.username]));
            window.location.href = 'theme-content.html';
        });
        topicContainer.appendChild(topicNameWrapper);
    });
}

function createDOMElement(type, content, className) {
    let element = document.createElement(type);
    if (content != '') {
        element.textContent = content;
    }
    if (className != undefined) {
        element.className = className;
    }
    return element;
}

export {
    loadAllPosts
};