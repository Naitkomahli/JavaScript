// STRUKTUR DASAR ======================
// elemen.addEventListener(event, fungsi);
// - event: Jenis event yang ingin didengarkan (misalnya, click, mouseover).
// - fungsi: Fungsi yang akan dijalankan saat event terjadi.

let tombol = document.getElementById("tombol");
let pesan = document.getElementById("pesan");

// Fungsi untuk menangani event click
function handleClick() {
  pesan.innerHTML = "Pesan telah diklik!";
  pesan.style.color = "green"; // Mengubah warna teks
}

// Menambahkan event listener
tombol.addEventListener("click", handleClick);

// EVENT OBJECT ======================
// Setiap event listener menerima parameter berupa event object yang berisi informasi tentang event tersebut.
let link = document.getElementById("link");

link.addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah link membuka halaman baru
  console.log("Link diklik! Tautan dicegah untuk membuka halaman baru.");
});

// MENGHAPUS EVENT LISTENER ======================
// Menghapus event listener setelah 5 detik
setTimeout(function () {
  tombol.removeEventListener("click", handleClick);
  pesan.innerHTML = "Event listener dihapus. Tombol tidak bisa diklik lagi.";
  pesan.style.color = "red"; // Mengubah warna teks
  console.log("Event listener dihapus setelah 5 detik.");
}, 5000);

// ============================== EVENT DELEGATION ==============================
// Event delegation adalah teknik yang digunakan untuk menangani event pada elemen yang memiliki banyak anak.
// Dengan event delegation, kita bisa menangani event pada elemen anak dengan menempatkan event listener pada elemen induknya.

let daftar = document.getElementById("daftar");

daftar.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Anda mengklik:", event.target.innerHTML);
    event.target.style.backgroundColor = "yellow"; // Menandai item yang diklik
  }
});