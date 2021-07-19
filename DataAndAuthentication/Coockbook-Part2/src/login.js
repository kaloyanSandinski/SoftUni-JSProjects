document.querySelector('form').addEventListener('submit', onSubmitClick);

async function onSubmitClick(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let email = formData.get('email');
    let password = formData.get('password');

    if (email == '' || password == '') {
        return alert('All fields are required!');
    }


    const response = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (response.ok === false) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();
    sessionStorage.setItem('userToken', data.accessToken);
    window.location.pathname = 'index.html';
}