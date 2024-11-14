
let sum = (a, b)=> (a+b)

let sum_agg = add_to(sum)

sum_agg.insert(1)

sum_agg.insert(2)

console.log(sum_agg.result())

sum_agg.insert(3)

sum_agg.insert(10)

console.log(sum_agg.result())

function add_to (f) {
    let arr = []

    let obj = {
        insert: function(arg) {
            arr.push(arg)
        },

        result: function () {
           let final = arr[0];
           for(let i=1; i<=arr.length-1; i++) {
               final = f(final, arr[i])
           }
           return final
        }
    }

    return obj
}