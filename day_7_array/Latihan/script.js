//array
let buah = ["Apel", "Mangga", "Jeruk", "Pisang", "Melon", "Semangka"];

//object
let mahasiswa = {
    nama: "Oktian",
    umur: 21,
    jurusan: "Teknik Informatika"
};

//array of object
let siswa = [
    { nama: "Yayan", umur: 20 },
    { nama: "Yoga", umur: 22 },
    { nama: "Yuni", umur: 21 },
];
console.log(siswa[1].nama); // Output: Yoga
console.log(siswa[1].umur); // Output: 22

//metode map
let namaSiswa = siswa.map(function (item) {
    return item.nama;
});
console.log(namaSiswa); // Output: ["Yayan", "Yoga", "Yuni"]