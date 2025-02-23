let a = 7;
let b = 10;

//Aritmatika
console.log(a + b);
console.log(a - b);
console.log(a * b);

//Perbandingan
let lebihBesar = a < b;
let samaDengan = a == b;
console.log(a == b);
console.log(a < b);

//Logika
let hasilLogikaAND = lebihBesar && samaDengan;
let hasilLogikaOR = lebihBesar || samaDengan;

console.log("Hasil Logika AND : " , hasilLogikaAND);
console.log("Hasil Logika OR : " , hasilLogikaOR);

//ternary
let hasilTernary = (a > b) ? "a lebih besar dari b" : "a tidak lebih besar dari b";
console.log(hasilTernary);
