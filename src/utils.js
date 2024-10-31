import fs from 'fs';

const dbPath = 'db/db.json'

export function readDB() {
    if (!fs.existsSync(dbPath)) {
        writeDB([])
    }
    const data = fs.readFileSync(dbPath, 'utf8')
    const jsonData = JSON.parse(data)
    return jsonData
}

export function writeDB(data) {
    const json = JSON.stringify(data, null, 2)
    fs.writeFileSync(dbPath, json, 'utf8')
}

export function getTimeNow() {
    const date = new Date()
    return date.toISOString()
}