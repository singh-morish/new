/**primitive datatypes - 
 * null
 * number
 * symbols
 * string
 * boolean
 * bigint
 * undefined
 */

let a = null
let b = 233
let c = true
let d = BigInt("23283")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c, d, e, f, g);


// object - they are key value pair, they are non primitive datatype

const Item = {
    "name" : "Harry",
    "age" : 23, 
    "class" : 12
}

console.log(Item.name);
console.log(Item.age);
console.log(Item.class);