import { loadAllPosts } from "./load.js";
let allTopics = {};

async function onPostClicked(event) {
    event.preventDefault();
    let title = document.querySelector('#topicName').value;
    let username = document.querySelector('#username').value;
    let postContent = document.querySelector('#postText').value;
    if (title != '' && username != '' && postContent != '') {
        let dateTime = new Date().toISOString();
        if (allTopics.hasOwnProperty(title) == true) {
            const creatingResponse = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${allTopics[title]}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, postContent, dateTime })
            });
        } else {
            const creatingResponse = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, title, postContent, dateTime })
            });
            const response = await creatingResponse.json();
            allTopics[title] = response._id;
        }
        const commentResponse = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, title, postContent, dateTime })
        });

        document.querySelector('#topicName').value = '';
        document.querySelector('#username').value = '';
        document.querySelector('#postText').value = '';
        loadAllPosts();
    } else {
        window.alert('Some of the input fields are not filled');
    }
}

export {
    onPostClicked
};