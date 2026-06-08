import { postData } from "../controllers/postDataController.js"
import { getAll } from "../controllers/getAllData.js"

export async function sensorRouter(req, res) {
    if(req.method == 'POST' && req.url == '/postdata'){
        return await postData(req, res)
    } else if(req.method == 'GET' && req.url == '/getdata') {
        return await getAll(req, res)
    }
}