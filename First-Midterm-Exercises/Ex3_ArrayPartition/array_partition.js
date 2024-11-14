function arrayPartition(arr) {
    let final = []

    if(arr.length === 0) {
        return final
    }

    for(let i=0; i<arr.length-1; i++) {
        let left = arr.slice(0, i+1)
        let right = arr.slice(i+1, arr.length+1)

        final.push([left, right])
    }
    return final
}

console.log(arrayPartition([-1, -1, -1, -1]));