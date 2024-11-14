Да се напише функција add_to_agg која прима друга функција f како параметар и која чува вредности од моменталното извршување на функцијата f.

Функцијата add_to_agg овозможува да се додавааат нови аргументите кои треба да бидат пресметани од функцијата f. Функцијата f секогаш прима 2 параметри: моменталната вредност и вредноста што се додава. Доколку нема внесено (преку функцијата `insert) 2 параметри, тогаш не се врши пресметка.

Функцијата add_to_agg треба да врати објект кој има 2 методи:

- insert - кој додава нов аргумент кој треба да се пресмета
- result - кој го трга аргументот кој треба да се пресмета од финалната пресметка

**For example:**

**Input**

let concat_as_str = (a, b)=> (String(a)+b)

let concat_agg = add_to(concat_as_str)

concat_agg.insert(1)

concat_agg.insert(2)

console.log(concat_agg.result())

concat_agg.insert(3)

concat_agg.insert(10)

console.log(concat_agg.result())

console.log(dropUntil(users, function(o) { return o.active; }) )

**Result**

12

12310

