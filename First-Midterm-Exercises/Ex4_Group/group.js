function group(arr, len) {
    let final = []
    let num_arrays = Math.ceil(arr.length / len) //2

    for (let i = 0; i < num_arrays; i++) {
        let inner_final = []
        for(let j = i; j<arr.length; j+=num_arrays) { // j<4 j=4
            if(arr[j]) {
                inner_final.push(arr[j])
            }
        }
        final.push(inner_final)
    }

    return final
}


console.log(group([1, 2, 3, 4, 5, 6], 4) ) // [ [ 1, 3 ], [ 2, 4 ] ]

console.log(group([1, 2, 3, 4, 5, 6, 7], 4) ) // [ [ 1, 3, 5, 7 ], [ 2, 4, 6 ] ]

console.log(group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4) ) // [ [ 1, 4, 7, 10 ], [ 2, 5, 8, 11 ], [ 3, 6, 9 ] ]