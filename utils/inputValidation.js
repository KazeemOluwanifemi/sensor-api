export function inputValidator(parsedData){
    let validData = {}
    let verdict

    for(const [key, values] of Object.entries(parsedData)){
        if((key.toLowerCase() !== 'temperature') && (key.toLowerCase() !== 'pressure')){
            verdict =  'incomplete sensor data'
        } else if(isNaN(values)){
            verdict = 'invalid sensor data'
        } else {
            validData[key] = values
        }
    }
    return validData
}