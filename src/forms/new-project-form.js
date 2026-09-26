export function initProjectForm () {
    const newProjectDialog = document.querySelector("#new-project-dialog");
    const projectForm = document.querySelector("#project-form");
    const cancelProjectButton = document.querySelector("#cancel-project");


    cancelProjectButton.addEventListener("click", () => {
        newProjectDialog.close();
    });

    newProjectDialog.addEventListener("close", () => {
        projectForm.reset();
    });

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(projectForm);

        const name = formData.get("name");
        const description = formData.get("description");

        // transfer data to new project constructor

        newProjectDialog.close();
    });
}