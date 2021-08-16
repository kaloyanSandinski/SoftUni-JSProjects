import { navTemplate } from "./navTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;

function initialize(router, renderHandler, authService) {
    _router = router;
    _renderHandler = renderHandler;
    _authService = authService;
}

async function getView(context, next) {
    let templateResult = navTemplate();
    _renderHandler(templateResult);
    next();
}

export default {
    getView,
    initialize
}