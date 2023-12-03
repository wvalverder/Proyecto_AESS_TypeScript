interface Task {
    id: number;
    description: string;
    completed: boolean;
}

class taskManager<T extends Task> {
    private tasks: T[] = [];

    addTask(task: T) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }
}