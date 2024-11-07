За дадена низа или објект obj, потребно е да вратите компактна вредност.

Компактна вредност на објект е истиот објект само што се исфрлени клучевите (својствата) кои содржат грешни вредности. Операцијата треба да се изврши за објектот и за сите вгнездени објекти. Низите треба да се сметаат како објекти кај кои што индексите преставуваат клучеви. Дадена вредност е грешна кога вредноста на операцијата Boolean(val) е false.

--------------------------------------------------------------

Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

**For example:**

**Input**

console.log(compactObject([null, 0, false, 1]));

**Result**

[ 1 ]

**Input**

console.log(compactObject([null, 0, 5, [0], [false, 16]]));

**Result**

[ 5, [], [ 16 ] ]
