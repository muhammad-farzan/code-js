let score = 33
let number = "33abs"



console.log(typeof score);
console.log(typeof(score));

console.log(typeof number);
console.log(typeof(number));

let valueInNumber = Number(number)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// NaN is speacial character convert to number

// "33" => 33 type string
// "33abd" => NaN type 
// true => 1; False=>0;  type boolean
// null => 0 type number
// undefined => 0 type number

let isLoggedIn = 1
let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => fasle;
// "farzan" => true;

let someNumber = 44;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);