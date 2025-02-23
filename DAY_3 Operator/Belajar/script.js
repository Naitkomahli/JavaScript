//Operator Aritmatika
let a = 10;
let b = 5;
console.log("Aritmatika");
console.log("a + b = " , a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0
console.log(a ** b); // Output: 100000

//Operator Perbandingan
let x = 10;
let y = "10";

console.log(x == y);  // Output: true (nilai sama)
console.log(x === y); // Output: false (nilai sama, tapi tipe berbeda)
console.log(x != y);  // Output: false
console.log(x !== y); // Output: true
console.log(x > 5);   // Output: true
console.log(x < 5);   // Output: false

//Operator Logika
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // Output: false
console.log(isLoggedIn || isAdmin); // Output: true
console.log(!isLoggedIn);           // Output: false

//Operator Penugasan
let z = 10;
z += 5; // x = x + 5
console.log(x); // Output: 15

//Operator Lainnya
//Ternary
let age = 20;
let status = (age >= 18) ? "Dewasa" : "Anak-anak";
console.log(status); // Output: Dewasa

//typeof
console.log(typeof "Hello"); // Output: string
console.log(typeof 10);      // Output: number