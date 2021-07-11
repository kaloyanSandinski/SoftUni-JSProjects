async function loadCommits() {
    let url = `https://api.github.com/repos/${document.querySelector('#username').value}/${document.querySelector('#repo').value}/commits`;
    let commitsList = document.querySelector('#commits');
    try {
        const response = await fetch(url);
        commitsList.innerHTML = '';
        if (response.status == 404) {
            throw new Error('Username or repo not found!');
        }
        const data = await response.json();

        data.forEach(commit => {
            let listItem = document.createElement('li');
            listItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
            commitsList.appendChild(listItem);
        });
    } catch (error) {
        let li = document.createElement('li');
        li.textContent = `Error: ${error.message} (Not Found)`;
        commitsList.appendChild(li);
    }
}