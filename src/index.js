import "./style.css";

import {  } from "./pages/list.js";
import { loadProjectsPage } from "./pages/projects.js";

const toolbar = document.querySelector("#toolbar");
const mainContent = document.querySelector("#main-content");

const myProjectsButton = document.querySelector("#projects-button");

function displayPage(pageLoader) {
    toolbar.replaceChildren();
    mainContent.replaceChildren();
    pageLoader();
}

myProjectsButton.addEventListener("click", () => {
    displayPage(loadProjectsPage);
});

displayPage(loadProjectsPage);
