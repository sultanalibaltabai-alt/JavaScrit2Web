let tasksArray = [];

let taskTitleInput = document.getElementById("taskTitle");
let taskDescInput = document.getElementById("taskDesc");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
    let titleValue = taskTitleInput.value;
    let descValue = taskDescInput.value;

    if (titleValue === "" || descValue === "") {
        return;
    }

    let newTask = {
        title: titleValue,
        description: descValue,
        isDone: false
    };

    tasksArray.push(newTask);

    taskTitleInput.value = "";
    taskDescInput.value = "";

    displayTasks();
});

function displayTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasksArray.length; i++) {
        let currentTask = tasksArray[i];

        let listItem = document.createElement("li");

        let contentDiv = document.createElement("div");
        contentDiv.className = "task-content";

        let titleElement = document.createElement("h3");
        titleElement.textContent = currentTask.title;

        let descElement = document.createElement("p");
        descElement.textContent = currentTask.description;

        if (currentTask.isDone === true) {
            titleElement.style.textDecoration = "line-through";
            descElement.style.textDecoration = "line-through";
        }

        contentDiv.appendChild(titleElement);
        contentDiv.appendChild(descElement);

        let actionDiv = document.createElement("div");

        let doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.addEventListener("click", function() {
            currentTask.isDone = !currentTask.isDone;
            displayTasks();
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            tasksArray.splice(i, 1);
            displayTasks();
        });

        actionDiv.appendChild(doneBtn);
        actionDiv.appendChild(deleteBtn);

        listItem.appendChild(contentDiv);
        listItem.appendChild(actionDiv);

        taskList.appendChild(listItem);
    }
}