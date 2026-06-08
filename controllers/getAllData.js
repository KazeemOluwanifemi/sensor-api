import fs from 'node:fs/promises'
import path from 'node:path'

export function getAll(req, res){
    const __dirname = import.meta.dirname
    console.log(__dirname)
    let pathToDb = path.join(__dirname, "apiDatabase.json")

    let allData = fs.readFile(pathToDb, 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.end(JSON.parse(data))
        }
    })
}