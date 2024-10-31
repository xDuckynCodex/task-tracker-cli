#! /usr/bin/env node
import { log } from '../src/landing.js';
import { add } from '../src/add.js';
import { readDB } from '../src/utils.js';
import { update } from '../src/update.js';
import { deleteTask } from '../src/delete.js';
import { listTask } from '../src/listTask.js';
import { mark } from '../src/mark.js';

const lastId = () => {
    const data = readDB()
    if (data.length == 0) return -1
    return data.pop().id
}

const args = process.argv.slice(2)

const subCommand = args[0]

switch (subCommand) {
    case 'add':
        add(lastId() + 1, args[1], 'todo')
        break;
    case 'update':
        update(args[1], args[2])
        break;
    case 'delete':
        deleteTask(args[1])
        break;
    case 'list':
        listTask(args[1])
        break;
    case 'mark':
        mark(args[1], args[2])
        break;
    default:
        log()
        break;
}