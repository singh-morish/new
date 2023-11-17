let num = [12, 43, 32, 33, 43];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

console.log("first loop finished");


// if we wish to perform some operation on all the elements of arrays
num.forEach(element => {
    console.log(element * 2 );
});

