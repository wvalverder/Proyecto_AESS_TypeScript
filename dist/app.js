"use strict";
var taskManager = /** @class */ (function () {
    function taskManager() {
        this.task = [];
    }
    taskManager.prototype.addTask = function (description) {
        var newTask = {
            id: this.task.length + 1,
            description: description,
            completed: false,
        };
        this.task.push(newTask);
        this.displayTask();
    };
    taskManager.prototype.displayTask = function () {
        var taskListElement = document.getElementById("task-list");
        if (taskListElement) {
            taskListElement.innerHTML = "";
            this.task.forEach(function (task) {
                var listItem = document.createElement("li");
                listItem.textContent = "".concat(task.id, ".").concat(task.description, ".").concat(task.completed ? "Completada" : "Pendiente");
                taskListElement.appendChild(listItem);
            });
        }
    };
    return taskManager;
}());
var TaskManager = new taskManager();
function addTask() {
    var taskInput = document.getElementById("tasks-input");
    if (taskInput && taskInput.value.trim() !== "") {
        TaskManager.addTask(taskInput.value.trim());
        taskInput.value = "";
    }
}
