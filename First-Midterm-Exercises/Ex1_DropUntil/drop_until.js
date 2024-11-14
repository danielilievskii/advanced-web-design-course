var users = [
    { "user": "barney",  "active": false },
    { "user": "fred",    "active": false },
    { "user": "pebbles", "active": true }
]

console.log(dropUntil(users, function(o) { return o.active; }) )

function dropUntil(arr, func) {
    return arr.filter(el => func(el))
}