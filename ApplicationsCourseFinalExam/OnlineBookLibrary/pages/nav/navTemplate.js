import { html } from '../../node_modules/lit-html/lit-html.js';
export let navTemplate = (nav) => html `
<section class="navbar-dashboard">
<a href="/home">Dashboard</a>
${nav.isLoggedIn 
    ? loggedControls(nav)
    : guestControls() }
</section>`;

let loggedControls = (nav) => html `<div id="user">
<span>Welcome, ${nav.email}</span>
<a class="button" href="/my-books">My Books</a>
<a class="button" href="/add-book">Add Book</a>
<a class="button" href="javascript:void(0)" @click=${nav.logoutHandler}>Logout</a>
</div>`;

let guestControls = () => html `<div id="guest">
<a class="button" href="/login">Login</a>
<a class="button" href="/register">Register</a>
</div>`;