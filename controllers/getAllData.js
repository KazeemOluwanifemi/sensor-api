import fs from 'node:fs/promises'
import path from 'node:path'
import { getPath } from '../utils/getPath.js'
import { responseSetter } from '../utils/responseSetter.js'
import { feedback } from '../utils/feedbackMessage.js'

export async function getAll(req, res) {
    try {
        console.log("Get function reached")
        let pathToDb = getPath("apiDatabase.json")
        console.log("path gotten", pathToDb)

        let allData = await fs.readFile(pathToDb, 'utf-8')
        responseSetter(res, 'text/html', 200)

        let feedbackMsg = feedback(200)
        res.end(allData)
        res.end(feedbackMsg)
    } catch(err) {
        console.err(err)
    }
    

}