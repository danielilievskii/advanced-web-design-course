// Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead, it will return a cached value, if it is called
// with the same inputs for a second time.
// fn can be any function and there are no constraints on what type of value it accepts. Inputs are considered identical if they are === to each other.

let callCount=0;
const memoizedFn = memoize(function(a,b) {
    callCount += 1;
    return a + b;
})

memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1

function memoize(fn) {
    const cache = new Map();

    return function memoized(...args) {
        let node = cache;
        for(const arg of args) {
            if(!node.has(arg)) {
                node.set(arg, new Map());
            }
            node = node.get(arg)
        }

        if(node.has("value")) {
            return node.get("value")
        } else {
            const value = fn(...args);
            node.set("value", value);
            return value
        }
    }
}

// function memoize(fn) {
//     const cache = new Map();
//
//     function explore(args) {
//         let node = cache;
//         for(const arg of args) {
//             if(!node.has(arg)) {
//                 node.set(arg, new Map());
//             }
//             node = node.get(arg)
//         }
//
//         if(node.has("value")) {
//             return node.get("value")
//         } else {
//             const value = fn(...args);
//             node.set("value", value);
//             return value
//         }
//     }
//
//     return function memoized(...args) {
//         return explore(args)
//     }
// }