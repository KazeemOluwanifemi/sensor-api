export async function streamRequest(req) {
    let data = ''

    for await (let chunk of req) {
        data += chunk
    }

    console.log("data streamed")

    return data
}