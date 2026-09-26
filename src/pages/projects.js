export function loadProjectsPage () { 
    loadToolBar();
    loadProjects();
}


function loadToolBar () {
    const toolbar = document.querySelector("#toolbar")
    const newProjectDialog = document.querySelector("#new-project-dialog")

    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = "New Project";
    newProjectButton.id = "new-project-button";
    newProjectButton.addEventListener("click", () => {
        newProjectDialog.showModal();
    });

    const searchProjectsInput = document.createElement("input");
    searchProjectsInput.placeholder = "Search Projects...";
    
    const sortBySelect = document.createElement("select");
    sortBySelect.id = "sort-by";
    ["Recent", "Alphabetical", "Completion"].forEach((sortOption) => {
        const option = document.createElement("option");
        option.textContent = sortOption;
        option.value = sortOption;
        sortBySelect.append(option);
    });

    const sortByLabel = document.createElement("label");
    sortByLabel.textContent = "Sort By:";
    sortByLabel.htmlFor = "sort-by";

    const sortGroup = document.createElement("div");
    sortGroup.id = "sort-group";
    sortGroup.append(sortByLabel, sortBySelect);
    

    toolbar.append(
        newProjectButton, 
        searchProjectsInput,
        sortGroup
    ); 
}


function loadProjects () {
    const mainContent = document.querySelector("#main-content");
    const projectsList = document.createElement("ul");

    // For each item in projects list, use maker function (MAKE THAT) to add all
    // add event listender that calls loadTodo(itself.id) on click
}