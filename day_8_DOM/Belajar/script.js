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
//querySelector -> Mengembalikan elemen pertama yang cocok dengan selector CSS
//querySelectorAll -> Mengembalikan semua elemen yang cocok dengan selector CSS
let elemen4 = document.querySelector(".text2");
console.log(elemen4.innerHTML);

let semuaElemen = document.querySelectorAll(".text2");
console.log(semuaElemen[1].innerHTML);

//2. MENGUBAH KONTEN DAN ATRIBUT==================================
//a. mengubah konten
let elemen5 = document.getElementById("demo2");
elemen5.innerHTML = "Ini adalah paragraf baru";

// b. mengubah atribut
let gambar = document.getElementById("gambar");
gambar.setAttribute("src", "gambar2.jpg");

// 3. Menambahkan atau Menghapus Elemen
// a. menambahkan elemen
let container = document.getElementById("container");
let paragrafBaru = document.createElement("p");
paragrafBaru.innerHTML = "Ini adalah paragraf baru.";
container.appendChild(paragrafBaru);

// b. menghapus elemen
let container2 = document.getElementById("container");
let paragraf = document.getElementById("paragraf");
container.removeChild(paragraf);

// 4. Mengubah Gaya (CSS)
let elemen6 = document.getElementById("demo3");
elemen6.style.color = "red";
elemen6.style.fontSize = "30px";

// 5. Menanggapi Event
let tombol = document.getElementById("tombol");
let pesan = document.getElementById("pesan");

tombol.addEventListener("click", function () {
  pesan.innerHTML = "Tombol telah diklik!";
});
