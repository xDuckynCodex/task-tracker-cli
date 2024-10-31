import { readDB } from "./utils.js";

export function listTask(status) {
    const tasks = readDB()
    const todoTasks = tasks.filter(task => task.status == 'todo')
    const doneTasks = tasks.filter(task => task.status == 'done')
    const inProgressTasks = tasks.filter(task => task.status == 'in progress')

    switch (status) {
        case 'todo':
            logTask(todoTasks)
            break;
        case 'done':
            console.log(doneTasks);
            break;
        case 'in-progress':
            console.log(inProgressTasks);
            break;
        default:
            console.log(tasks);
            break;
    }
}

function logTask(tasks) {
    tasks.map(task => {
        console.table(task)
    })
}