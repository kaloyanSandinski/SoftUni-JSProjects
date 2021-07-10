async function loadRepos() {
    let username = document.querySelector('#username').value;
    let reposList = document.querySelector('#repos');
    let url = `https://api.github.com/users/${username}/repos`;
    try {
        const response = await fetch(url);
        if (response.status == 404) {
            reposList.innerHTML = '';
            throw new Error('User not found!');
        }
        const data = await response.json();
        reposList.innerHTML = '';
        console.log('Promise fulfilled!');
        data.forEach(r => {
            let listItem = document.createElement('li');
            let link = document.createElement('a');
            link.href = r.html_url;
            link.textContent = r.full_name;
            listItem.appendChild(link);
            reposList.appendChild(listItem);
        });
    } catch (error) {
        console.log('Promise rejected!');
        console.log(error.message);
    }
}