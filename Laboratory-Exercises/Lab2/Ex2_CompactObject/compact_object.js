function compactObject(obj) {

    if(obj === null || obj === undefined) {return null}
    if(Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject)
    }
    if(typeof obj !== 'object') return obj;

    let compacted = {}
    for(var key in obj) {
        if(Boolean(compactObject(obj[key]))) {
            compacted[key] = compactObject(obj[key])
        }
    }
    return compacted
}

//console.log(compactObject([null, 0, false, 1]))

console.log(compactObject({"a": null, "b": [false, 1]}));
//{ b: [ 1 ] }

//console.log(compactObject([null, 0, 5, [0], [false, [false, true], 16]]));
//[ 5, [], [ 16 ] ]
