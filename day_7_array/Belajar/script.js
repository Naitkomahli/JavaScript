//1. ARRAY======================================
//A. Membuat array
let buah = ["Apel", "Mangga", "Jeruk"];

//B. Mengakses Elemen Array
console.log(buah[0]); // Output: Apel
console.log(buah[1]); // Output: Mangga

//C. Menambah dan menghapus elemen
//Menambah elemen di akhir: push()
buah.push("Pisang");
console.log(buah); // Output: ["Apel", "Mangga", "Jeruk", "Pisang"]

//menghapus elemen di akhir: pop()
buah.pop();
console.log(buah); // Output: ["Apel", "Mangga", "Jeruk"]

//menambah elemen di awal: unshift()
buah.unshift("Pisang");

//menghapus elemen di awal: shift()
buah.shift();

//D. menggabungkan elemen array
//Menggunakan concat()
let buah2 = ["Melon", "Semangka"];
let semuaBuah = buah.concat(buah2);
console.log(semuaBuah); // Output: ["Apel", "Mangga", "Jeruk", "Melon", "Semangka"]

//E. Mengetahui panjang array
//Menggunakan length
console.log(semuaBuah.length); // Output: 5

//2. OBJECT======================================
//A. Membuat Object
let orang = {
    nama: "Joko",
    umur: 22,
    sudahMenikah: false,
    alamat: {
        jalan: "Jl. Malang No. 11",
        kota: "Bandung",
    },
};

//B. Mengakses Properti Object
console.log(orang.nama); // Output: Joko
console.log(orang.alamat.kota); // Output: Bandung
console.log(orang["umur"]); // Output: 22
console.log(orang["alamat"]["jalan"]); // Output: Jl. Malang No. 11

//C. Menambah/mengubah Properti Object
orang.pekerjaan = "Developer";
orang.umur = 26;
console.log(orang); // Output: {nama: "Joko", umur: 26, sudahMenikah: false, alamat: {…}, pekerjaan: "Developer"}

//D. Menghapus Properti Object
delete orang.umur;
console.log(orang); // Output: {nama: "Joko", sudahMenikah: false, alamat: {…}, pekerjaan: "Developer"}

//3. ARRAY OF OBJECT======================================
let siswa = [
    { nama: "Yayan", umur: 20 },
    { nama: "Yoga", umur: 22 },
    { nama: "Yuni", umur: 21 },
];

console.log(siswa[1]); // Output: {nama: "Yoga", umur: 22}
console.log(siswa[1].nama); // Output: Yoga

//4. METODE ARRAY YANG BERGUNA======================================
//A. forEach() : Menjalankan fungsi untuk setiap elemen array
buah.forEach(function(item) {
    console.log(item);
});

//B. map() : Mengembalikan array baru dari hasil pemanggilan fungsi untuk setiap elemen array
let angka = [1, 2, 3, 4, 5];
let kuadrat = angka.map(function(item) {
    return item * item;
});
console.log(kuadrat); // Output: [1, 4, 9, 16, 25]

//C. find() : Mengembalikan nilai pertama yang memenuhi kondisi
let angka2 = [1, 2, 3, 4, 5];
let genap = angka2.find(function(item) {
    return item % 2 == 0;
});
console.log(genap); // Output: [2, 4]

//D. filter() : Mengembalikan array dari nilai yang memenuhi kondisi
let angka3 = [1, 2, 3, 4, 5];
let genap2 = angka3.filter(function(item) {
    return item % 2 == 0;
});
console.log(genap2); // Output: [2, 4]

