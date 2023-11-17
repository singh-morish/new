let a = [1,3,4,32,54, null, true]

let b = a.toString();   // b i now a string
console.log(b);

let c = a.join("_") // join all the array element using the seperator
console.log(c);

let d = a.pop() // remove the last elements from the array, it change the original methods
console.log(d);

let e = a.push(56) // add elements to the last of array, change the original array
console.log(e);

let f = a.shift() // remove the first element from the array, change the original array
console.log(f);

let g = a.unshift(32) // add the new element at the start of array, change the original array

let num = [1,2,3,4,5,6,7,8,9]
let num1 = [11, 12, 23,45]
let h = delete num[0] // delte operator will delete the zero index elemeny but wil not change the length
console.log(h);

let i = num + num1; // merge the elements of two or more arrays, doesn't affect original array
console.log(i);

let num2 = [23,21, 87, 78, 43, 45]
let j = num2.sort() // sort the element alphabatically, change the original array

