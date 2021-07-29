import { loadAllPosts } from "./load.js";
import { onPostClicked } from "./post.js";
import { onCancelClicked } from "./cancel.js";
window.addEventListener('load', loadAllPosts);
document.querySelector('.public').addEventListener('click', onPostClicked);
document.querySelector('.cancel').addEventListener('click', onCancelClicked);