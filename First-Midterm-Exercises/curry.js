function format_date(day, month, year) {
    return `${day}.${month}.${year}`
}

function curry(func, ...args) {
    if(args.length >= func.length) {
        return func(...args)
    } else {
        return function (...moreArgs) {
            return curry(func, ...args, ...moreArgs)
        }
    }
}

// function curry(func) {
//     return function (...args) {
//         if(args.length >= func.length) {
//             return func(...args)
//         } else {
//             return function (...moreArgs) {
//                 return curry(func)(...args, ...moreArgs)
//             }
//         }
//     }
// }

var date = curry(format_date)

console.log(date(12, 11, 2024)); // Output: "12.11.2024"

var dateWithDay = date(12); // Returns a new function waiting for `month` and `year`
console.log(dateWithDay(11, 2024)); // Output: "12.11.2024"
