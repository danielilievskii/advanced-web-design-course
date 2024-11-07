const sort_by_num_calls = function(farr){
    let callCountMap = new Map()

    for (let func of farr) {
        callCountMap.set(func, countCalls(func))
    }

    const sortedFuncs = [...callCountMap.entries()]
        .sort((a, b) => a[1] - b[1])
        .map(entry => entry[0]);

    return sortedFuncs;
} ;

function countCalls (func) {
    let count = 0;

    if(typeof func !== 'function') {
        return count
    }

    while (typeof func === 'function') {
        count++;
        func = func();
    }
    return count
}

const f1 = () => "hello"
// f1() ➞ "hello"

const f2 = () => () => "AWD"
// f2()() ➞ "AWD"

const f3 = () => () => () => "user"
// f3()()() ➞ "user"

console.log(sort_by_num_calls([f2, f3, f1]))
// [f2, f3, f1] ➞ [2, 3, 1] ➞ [1, 2, 3] ➞ [f1, f2, f3]