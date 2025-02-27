//1. MENGAKSES ELEMENT HTML==================================
//a. getElementById -> mengakses elemen berdasarkan id
let elemen = document.getElementById("demo");
console.log(elemen.innerHTML); //output: Ini adlaah paragraf

//b. getElementsByClassName -> mengakses elemen berdasarkan class
let elemen2 = document.getElementsByClassName("text");
console.log(elemen2[1].innerHTML);


//c. getElementsByTagName -> mengakses elemen berdasarkan tag
let elemen3 = document.getElementsByTagName("div");
console.log(elemen3[0].innerHTML);

//d. querySelector dan querySelectorAll
// querySelector -> Mengembalikan elemen pertama yang cocok dengan selector CSS
//querySelectorAll -> Mengembalikan semua elemen yang cocok dengan selector CSS
let elemen4 = document.querySelector(".text2");
console.log(elemen4.innerHTML);

let semuaElemen = document.querySelectorAll(".text2");
console.log(semuaElemen[1].innerHTML);

