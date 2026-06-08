export function responseSetter(res, contentType, statCode){
    res.setHeader('Content-Type', contentType)
    res.statusCode = statCode
}