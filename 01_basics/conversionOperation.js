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


// ****************************************  Operations **************************************
let value = 3
let negValue = -value
console.log(negValue);

//   operations
//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2**2);
//  console.log(2/3);
//  console.log(2%3);

let str1 = "Hello"
let str2 = "  Farzan"
let str3 = str1 + str2        //`${str1} ${str2}`
console.log(str3);
console.log(typeof str3);

console.log("1" + 2);
console.log(1 + "2");
console.log(2 + 2);
console.log(8 - 4);
console.log("1" + 2 + 2);
console.log(1 + 2 + "4");

// prefix ma value pehly implement ho jati hai
// postfix ma value useage ka bad ma implement ho jati hai

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


// Prefix example  
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); 

// Postfix example  
let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`); 