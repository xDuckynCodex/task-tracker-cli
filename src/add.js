import { getTimeNow, readDB, writeDB } from "./utils.js";

export function add(id, name, status) {
    const task = {
        id,
        name,
        status: status,
        createdAt: getTimeNow(),
        updatedAt: getTimeNow(),
    }
    const tasks = [...readDB(), task]
    writeDB(tasks)
    console.log(`Task added successfully (ID: ${id})`);
}