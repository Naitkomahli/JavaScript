// Ambil elemen-elemen DOM
let inputTugas = document.getElementById("inputTugas");
let tambahTugas = document.getElementById("tambahTugas");
let daftarTugas = document.getElementById("daftarTugas");

// Fungsi untuk menambahkan tugas
function tambahkanTugas() {
    let teksTugas = inputTugas.value.trim();
    if (teksTugas === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    // Buat elemen li baru
    let li = document.createElement("li");
    li.textContent = teksTugas;

    // Tambahkan tombol selesai
    let tombolSelesai = document.createElement("button");
    tombolSelesai.textContent = "Selesai";
    tombolSelesai.addEventListener("click", function() {
        li.classList.toggle("selesai");
    });

    // Tambahkan tombol hapus
    let tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.addEventListener("click", function() {
        daftarTugas.removeChild(li);
    });

    // Tambahkan tombol ke li
    li.appendChild(tombolSelesai);
    li.appendChild(tombolHapus);

    // Tambahkan li ke daftar
    daftarTugas.appendChild(li);

    // Kosongkan input
    inputTugas.value = "";
}

// Event listener untuk tombol tambah
tambahTugas.addEventListener("click", tambahkanTugas);

// Event listener untuk input (jika pengguna menekan Enter)
inputTugas.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        tambahkanTugas();
    }
});