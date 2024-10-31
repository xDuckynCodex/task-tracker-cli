import { readDB, writeDB } from "./utils.js";

export function deleteTask(id) {
    const tasks = readDB()
    const newTasks = tasks.filter(task => task.id != id)
    writeDB(newTasks)
}