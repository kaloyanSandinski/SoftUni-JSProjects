window.addEventListener('load', loadComents);

async function loadComents() {
    document.querySelector('header a').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'index.html';
    })
    let info = JSON.parse(sessionStorage.getItem('Title-Name'));
    sessionStorage.clear();
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
    const data = await response.json();
    Object.values(data).forEach(comment => {
        if (comment.title == info[0]) {
            document.querySelector('.theme-name h2').textContent = info[0];
            document.querySelector('.comment').textContent = info[1];
            document.querySelector('.answer-comment span').textContent = info[2];
        }
    });
}