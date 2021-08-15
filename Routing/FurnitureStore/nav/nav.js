import authService from "../servces/authService.js"
import { navTemplate } from "./navTemplate.js"

function getView(context, next) {
    let navInfo = {
        isLogedIn: authService.isLoggedIn(),
        currentPage: context.pathname
    }
    let templateResult = navTemplate(navInfo);
    context.renderNav(templateResult);
    next();
}

export default {
    getView
}