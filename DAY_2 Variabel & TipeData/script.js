//Deklarasi varieble
let nama = "Ilham";
const umur = 25;
let isStudent = true;

//Menggunakan variabel
console.log("Nama :" + nama); // Output: Nama : Ilham
console.log("Umur :" + umur); // Output: Umur : 25
console.log("Apakah seorang mahasiswa :" + isStudent); // Output: Is Student : true

//Mengubah nilai variabel (hanya bisa dilakukan pada variabel yang dideklarasikan dengan let)
nama = "Oktian";
console.log("Nama baru:" + nama); // Output: Nama : Oktian

//contoh array dan object
let hobbies = ["Coding", "Reading", "Traveling"];
let alamat = {
    jalan: "Jl. Jendral Sudirman",
    kota: "Semarang",
    provinsi: "Jawa Tengah"
};

console.log("Hobi :" + hobbies); // Output: [ 'Coding', 'Reading', 'Traveling' ]
console.log("Alamat :" + alamat.jalan + ", " + alamat.kota + ", " + alamat.provinsi); // Output: Jl. Jendral Sudirman, Semarang, Jawa Tengah

