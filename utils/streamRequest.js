export async function streamRequest(req, res){
    try{
        let data = ''

        for await (let chunk of req){
            data += chunk
        }

        console.log("data streamed")

        return data
    } catch(err) {
        res.statusCode = 500
        res.end(`Error occured while processing request: ${err}`)
    }
}