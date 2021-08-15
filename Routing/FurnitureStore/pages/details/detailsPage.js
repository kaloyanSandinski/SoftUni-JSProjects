import authService from "../../servces/authService.js";
import furnitureService from "../../servces/furnitureService.js";
import { detailsTemplate } from "./detailsTemplate.js";

async function deleteHandler(context, id, e) {
    let confirmed = confirm('Are you shure you want to delete this?');
    if (confirmed) {
        let deleteResult = await furnitureService.deleteItem(id);
        context.page.redirect('/dashboard');
    }
}

async function getView(context) {
    let id = context.params.id;
    let boundDeleteHandler = deleteHandler.bind(null, context, id);
    let furniture = await furnitureService.get(id);
    let isOwner = authService.getUserId() === furniture._ownerId;
    let templateResult = detailsTemplate(furniture, boundDeleteHandler, isOwner);
    context.renderView(templateResult);
}

export default {
    getView
}