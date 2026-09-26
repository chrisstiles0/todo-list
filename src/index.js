import "./style.css";

import { loadProjectsPage } from "./pages/projects.js";
import { initProjectForm } from "./forms/new-project-form.js";

const toolbar = document.querySelector("#toolbar");
const mainContent = document.querySelector("#main-content");

// sidebar elements
const myProjectsButton = document.querySelector("#projects-button");
const calendarButton = document.querySelector("#calendar-button");
const settingsButton = document.querySelector("#settings-button");


function displayPage(pageLoader) {
    toolbar.replaceChildren();
    mainContent.replaceChildren();
    pageLoader();
}

myProjectsButton.addEventListener("click", () => {
    displayPage(loadProjectsPage);
});

initProjectForm();
displayPage(loadProjectsPage);
