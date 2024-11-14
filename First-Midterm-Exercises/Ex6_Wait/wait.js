function wait(f) {
    let arr = []

    let obj = {
        add: function (arg) {
            arr.push(arg)
        },
        remove: function (arg) {
            let idx = arr.indexOf(arg)
            if(idx !== -1) {
                arr.splice(idx, 1)
            }
        },
        calc: function () {
            return f(arr)
        }
    }
    return obj
}


let sum = (array)=> array.reduce((p,n)=>p+n, 0)

let sum_wait = wait(sum)

sum_wait.add(10)

sum_wait.add(100)

sum_wait.add(15)

sum_wait.remove(10)

console.log(sum_wait.calc())