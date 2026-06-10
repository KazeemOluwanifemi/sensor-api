import { feedback } from "../utils/feedbackMessage.js"
import { getPath } from "../utils/getPath.js"
import { responseSetter } from "../utils/responseSetter.js"
import { streamRequest } from "../utils/streamRequest.js"

import fs from 'node:fs/promises'
import path from 'node:path'

export async function getLatestData(req, res) {
    try{
        let pathToDb = getPath("apiDatabase.json")
        let existingSensorData = [await fs.readFile(pathToDb, 'utf8')]

        console.log(existingSensorData)

        let lastData = JSON.parse(existingSensorData.pop())

        res.write(lastData)

        responseSetter(res, 'application/JSON', 200)
        let feedbackMsg = feedback(200)

        res.end(feedbackMsg)


        // Algorithm: 
        // read the existing json file into an array of objects
        // pick the last one
        // store in an object
        // parse/stringify
        // return it as a response
        // end the connection

    } catch(err) {
        console.error(err)
        responseSetter(res, 'text/html', 500)
        let feedbackMsg = feedback(200)

        res.end(feedbackMsg)
    }
    
}