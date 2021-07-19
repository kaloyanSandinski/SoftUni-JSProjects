document.querySelector('form').addEventListener('submit', onRegisterSubmit);

async function onRegisterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let repassword = formData.get('rePass');

    if (email == '' || password == '') {
        return alert('All fields are required!');
    } else if (password != repassword) {
        return alert('Passwords don\'t match!');
    }


    const response = await fetch('http://localhost:3030/users/register', {
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