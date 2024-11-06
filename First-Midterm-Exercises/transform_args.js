// Create a function transform_args that calls the given function as an input with transformed arguments.
const square = n => n*n;
const double = n => n*2;
const fn = transform_args((x, y) => [x, y], [square, double]);
console.log(fn(9, 3)); // [81, 6]

function transform_args(fn, farr) {

    return function transformed(...args) {
        var a = []
        for(let i=0; i<args.length; i++) {
            a.push(farr[i](args[i]))
        }
        //return a
        return fn(...a)
    }
}