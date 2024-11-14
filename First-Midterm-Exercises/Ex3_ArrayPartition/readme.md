(MK) Креирајте фунцкија која од дадена низа ќе ги креира сите можни партиции одлево-наддесно

(EN) Create a function to partition an array from left to right.

Напомена / Notes:
- Низа од n елементи треба да се партиционира во n-1 поднизи. Секоја подниза треба да има 2 елементи: левата и десната страна на партицијата (двете партиции треба да бидат низи кои не се празни, освен кога почетната низа е празна) / With array of n element, your output should be an array containing n-1 subarrays. Each subarray should have two elements: the left and the right side of the partition (both should be non-empty, unless the input array is empty).
- Празна низа треба да врати празна низа  [] / An empty array should return an empty array: []

**For example:**

**Input**

console.log(arrayPartition([-1, -1, -1, -1]));

**Result**

[ [ [ -1 ], [ -1, -1, -1 ] ],

[ [ -1, -1 ], [ -1, -1 ] ],

[ [ -1, -1, -1 ], [ -1 ] ] ]

**Input**

console.log(arrayPartition([1, 2, 3, 4, 5]));

**Result**

[[[1], [2, 3, 4, 5]],

[[1, 2], [3, 4, 5]], 

[[1, 2, 3], [4, 5]],

[[1, 2, 3, 4], [5]]]

**Input**

console.log(arrayPartition([]))

**Result**

[]