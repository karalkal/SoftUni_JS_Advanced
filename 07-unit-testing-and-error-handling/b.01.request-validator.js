function returnInputOrError(inputObj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT']
    const validURI = /^[a-zA-Z1-9\.]+$/m
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    const restrictedChars = ['<', '>', '\\', '&', "\'", '\"']

    /*
    • method - can be GET, POST, DELETE or CONNECT
    • uri - must be a valid resource address or an asterisk (*); a resource address is a combination of alphanumeric characters and periods; all letters are Latin; the URI cannot be an empty string
    • version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
    • message - may contain any number of non-special characters (special characters are <, >, \, &, ', ")

     "Invalid request header: Invalid {Method/URI/Version/Message}".
    */

    if ((!methods.includes(inputObj.method))
        || !inputObj.method) {
        throw Error("Invalid request header: Invalid Method")
    }

    if ((!validURI.test(inputObj.uri) && inputObj.uri !== '*') // if fails regex test and is not *
        || !inputObj.uri) // or has not been provided, i.e. is undefined
    {
        throw Error("Invalid request header: Invalid URI")
    }

    if (!versions.includes(inputObj.version || inputObj.version === undefined)) {
        throw Error("Invalid request header: Invalid Version")
    }

    if (inputObj.message === undefined
        || includesRestrictedChar(inputObj.message)) {
        throw Error("Invalid request header: Invalid Message")
    }

    function includesRestrictedChar(msg) {
        let msgAsArr = msg.split('')
        for (let ch of msgAsArr) {
            if (restrictedChars.includes(ch)) {
                return true
            }
        }
    }

    return inputObj
}

// console.log(returnJsonOrError({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }))

// console.log(returnJsonOrError({
//     method: 'GET',
//     uri: '*',
//     version: 'HTTP/1.1',
//     message: ''
// }))

console.log(returnInputOrError({
    method: 'POST',
    uri: '$^%a',
    version: 'HTTP/2.0',
    message: 'hrhhr'
}))