import { getTimeNow, readDB, writeDB } from "./utils.js";

export function update(id, name) {
    const tasks = readDB()
    const newTasks = tasks.map(task => {
        if (task.id == id) {
            return {
                ...task,
                name,
                updatedAt: getTimeNow()
            }
        } else {
            console.log("Dont find the task");
        }
        return task
    })
    writeDB(newTasks)
}