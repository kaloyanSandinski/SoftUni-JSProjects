import page from "./node_modules/page/page.mjs";
import homePage from "./pages/home/homePage.js";
import nav from "./pages/nav/nav.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import authService from "./services/authService.js";

let navElement = document.querySelector('nav');
let appElement = document.querySelector('main');

let renderer = new LitRenderer();
let navRenderHandler = renderer.createRenderHandler(navElement);
let appRenderHandler = renderer.createRenderHandler(appElement);

homePage.initialize(page, appRenderHandler, authService);
nav.initialize(page, navRenderHandler, authService);



page('/index.html', '/home');
page('/', '/home')
page(nav.getView);
page(homePage.getView);

page.start();