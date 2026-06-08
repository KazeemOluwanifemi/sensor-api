export function feedback(statCode){
    let statCodeString = statCode.toString()

    const feedbackMessage = {
        '200': "Successful request made",
        '201': "Request object has successfully been created in database",
        '400': "The server cannot process the request due to a client error",
        '401': "The user lacks valid authentication credentials for the requested resource",
        '403': "Forbidden request made",
        '404': "The requested resource doesn't exist",
        '500': "Internal server error occured",
        '503': "Service unavailable",
        '504': "Gateway timeout"
    }

    const defaultMsg = 'Your request has been received'

    return feedbackMessage[statCodeString] || defaultMsg
}