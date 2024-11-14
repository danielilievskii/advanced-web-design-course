Напишете функција dropUntil која прима 2 аргументи:

- array (Array): Низа од елементи
- predicate: Функција која ќе се извршува врз секој елемент.

Функцијата треба да ги исфрли елементите од низа се додека не се исполни предикатот.

**For example:**

**Input**

var users = [

{ "user": "barney",  "active": false },

{ "user": "fred",    "active": false },

{ "user": "pebbles", "active": true }

]

console.log(dropUntil(users, function(o) { return o.active; }) )

**Result**

[ { user: 'pebbles', active: true } ]

