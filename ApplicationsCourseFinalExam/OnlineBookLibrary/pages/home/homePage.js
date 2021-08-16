import booksService from "../../services/booksService.js";
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
    let allBooks = await booksService.getAllBooks();
    let isEmpty = true;
    if (allBooks.length != 0) {
        isEmpty = false
    }
    let templateResult = homeTemplate(allBooks, isEmpty);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}