import { getTimeNow, readDB, writeDB } from "./utils.js";

export function mark(status, id) {
    const tasks = readDB()
    let newTasks
    switch (status) {
        case 'done':
            newTasks = tasks.map(task => {
                if (task.id == id) {
                    console.log(`Task id ${id} mark done`);
                    return {
                        ...task,
                        status: 'done',
                        updatedAt: getTimeNow()
                    }
                }
                return task
            })
            writeDB(newTasks)
            break;
        case 'in-progress':
            newTasks = tasks.map(task => {
                if (task.id == id) {
                    console.log(`Task id ${id} mark in progress`);
                    return {
                        ...task,
                        status: 'in progress',
                        updatedAt: getTimeNow()
                    }
                }
                return task
            })
            writeDB(newTasks)
            break;
        default:
            break;
    }
}