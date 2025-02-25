//Buat variabel nilai dengan nilai angka.
//Gunakan if-else untuk menentukan grade:
// A (>= 90)
// B (>= 80)
// C (>= 70)
// D (< 70)
// Buat variabel hari dengan nilai string (misalnya, "Senin").
// Gunakan switch-case untuk menampilkan pesan berdasarkan hari.

// Code here
let nilai = 85;
if (nilai >= 90){
    console.log("Nilai kamu A");
} else if (nilai >= 80){
    console.log("Nilai kamu B");
} else if (nilai >= 70){
    console.log("Nilai kamu C");
} else {
    console.log("Nilai kamu D");
}

let hari = "Senin";
switch (hari) {
    case "Senin":
        console.log("Hari ini adalah Senin.");
        break;
    case "Selasa":
        console.log("Hari ini adalah Selasa.");
        break;
    case "Rabu":
        console.log("Hari ini adalah Rabu.");
        break;
    default:
        console.log("Hari ini bukan Senin, Selasa, atau Rabu.");
}
