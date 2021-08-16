import homePage from "./pages/home/homePage.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import page from "./node_modules/page/page.mjs";
import authService from "./services/authService.js";
import nav from "./pages/nav/nav.js";
import loginPage from "./pages/login/loginPage.js";

let navElement = document.getElementById('nav');
let appElement = document.getElementById('site-content');

let renderer = new LitRenderer();

let navRenderHandler = renderer.createRenderHandler(navElement);
let appRenderHandler = renderer.createRenderHandler(appElement);

nav.initialize(page, navRenderHandler, authService);
homePage.initialize(page, appRenderHandler, authService);
loginPage.initialize(page, appRenderHandler, authService);

page('/index.html', '/home');
page('/', '/home');

page(decorateContextWithUser)
page(nav.getView);
page('/home', homePage.getView);
page('/login', loginPage.getView);

page.start();

function decorateContextWithUser(context, next) {
    let user = authService.getUser();
    context.user = user;
    next();
}