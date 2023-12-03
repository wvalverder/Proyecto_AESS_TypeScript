interface Task {
    id: number;
    description: string;
    completed: boolean;
}

class taskManager<T extends Task> {
    private task: T[] = [];
    
    addTask(description:string):void {
        const newTask: T = {
            id: this.task.length + 1,
            description,
            completed: false,
        } as T;
        this.task.push(newTask);
        this.displayTask();
    }

    displayTask(): void {
        const taskListElement = document.getElementById("task-list");
        if(taskListElement) {
            taskListElement.innerHTML = "";
            this.task.forEach((task) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${task.id}.${task.description}.${task.completed ? "Completada" : "Pendiente"}`;
                taskListElement.appendChild(listItem);
            })
        }
    }
}

const TaskManager = new taskManager<Task>();

function addTask():void {
    const taskInput = document.getElementById("tasks-input") as HTMLInputElement;
    if(taskInput && taskInput.value.trim() !== "") {
        TaskManager.addTask(taskInput.value.trim());
        taskInput.value = "";
    }
}