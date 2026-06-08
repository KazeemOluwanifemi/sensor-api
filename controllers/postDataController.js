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

        // const __dirname = path.dirname(fileURLToPath(import.meta.url))
        // const projectRoot = path.resolve(__dirname, '..')
        // const dirPath = projectRoot

        // const finalPath = path.join(dirPath, "apiDatabase.json")

        let validData = inputValidator(parsedData)

        let sensorData = JSON.stringify(validData, null, 2)

        try {
            const pathtoDb = getPath("apiDatabase.json")
        } catch(err){
            console.error(err)
        }

        await writeToFile(pathtoDb, sensorData)

        console.log("written to file")


        responseSetter(res, 'application/JSON', 200)

        const feedbackMsg = feedback(200)

        // res.end(feedbackMsg)

        // console.log(sensorData)

        // return

        // if ((validData == 'incomplete sensor data') || (validData == 'invalid sensor data')) {

        //     responseSetter(res, 'text/html', 400)

        //     const feedbackMsg = feedback(400)

        //     res.end(feedbackMsg)
        //     console.log("error occured")

        // } else {


        // }

    } catch (err) {
        responseSetter(res, 'text/html', 500)

        const feedbackMsg = feedback(500)

        res.end(feedbackMsg)
    }
}