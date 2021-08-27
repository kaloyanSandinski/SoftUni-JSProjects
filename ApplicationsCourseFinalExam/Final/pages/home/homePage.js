import booksService from "../../services/gamesService.js";
import { homeTemplate } from "./homeTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;

function initialize(router, renderHandler, authService) {
    _router = router;
    _renderHandler = renderHandler;
    _authService = authService;
}

async function getView(context) {
    let allGames = await booksService.getAllGames();
    let isEmpty = true;
    if (allGames.length != 0) {
        isEmpty = false
    }
    let templateResult = homeTemplate(allGames, isEmpty);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}