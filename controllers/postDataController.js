import { responseSetter } from '../utils/responseSetter.js'
import { streamRequest } from '../utils/streamRequest.js'
import { inputValidator } from '../utils/inputValidation.js'
import { feedback } from '../utils/feedbackMessage.js'
import { writeToFile } from '../utils/writeToFile.js'
import { getPath } from '../utils/getPath.js'

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'


export async function postData(req, res) {
    try {
        let newData = await streamRequest(req)
        let parsedData = JSON.parse(newData)
        let pathtoDb = ""
        console.log("data parsed")

        let validData = inputValidator(parsedData)
        console.log("data validated")


        if ((validData == 'incomplete sensor data') || (validData == 'invalid sensor data')) {

            responseSetter(res, 'text/html', 400)

            const feedbackMsg = feedback(400)

            res.end(feedbackMsg)
            console.log("error occured")

        } else {
            let sensorData = JSON.stringify(validData, null, 2)
            console.log("data stringified")

            pathtoDb = getPath("apiDatabase.json")
            console.log("path to db gotten")


            console.log(pathtoDb)

            await writeToFile(pathtoDb, sensorData)

            console.log("written to file")

            responseSetter(res, 'application/JSON', 200)

            let feedbackMsg = feedback(200)

            res.end(feedbackMsg)
        }

    } catch (err) {
        responseSetter(res, 'text/html', 500)

        let feedbackMsg = feedback(500)

        res.end(feedbackMsg)
    }
}