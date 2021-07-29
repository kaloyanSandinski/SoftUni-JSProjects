function onCancelClicked(event) {
    event.preventDefault();
    document.querySelector('#topicName').value = '';
    document.querySelector('#username').value = '';
    document.querySelector('#postText').value = '';
}

export {
    onCancelClicked
};