//1. function

//function declaration
function namaFungsi(parameter1, parameter2) {
    //code block
    return hasil; //optional
}

//contoh
function tambah(a, b) {
    return a + b;
}

let hasil = tambah(2, 3);
console.log(hasil); //ouyput : 5

//function expression
const namaFungsi = function(parameter1, parameter2) {
    //code block
    return hasil; //optional
}

//contoh
const kali = function(a, b) {
    return a * b;
}

let hasilExpression = kali(2, 3);
console.log(hasilExpression); //output : 6

//arrow function
const namaFungsi = (parameter1, parameter2) => {
    //code block
    return hasil; //optional
}

//contoh
const bagi = (a, b) => {
    return a / b;
}

let hasilArrow = bagi(6, 3);
console.log(hasilArrow); //output : 2

//2. memanggil function
//contoh
function sapa(nama){
    console.log("halo, " + nama);
}

sapa("andi"); //output : halo, andi
sapa("budi"); //output : halo, budi

//3. Parameter dan argument
//parameter = Variabel yang didefinisikan dalam fungsi.
//argument = nilai yang diberikan pada parameter saat fungsi dipanggil

//contoh
function hitungLuas(panjang, lebar){
    return panjang * lebar;
}

let luas = hitungLuas(5, 3);
console.log("Luas : " + luas); //output : 15

//4. Default parameter
//contoh
function sapa(nama = "Andi"){
    console.log("halo, " + nama);
}

sapa(); //output : halo, Andi
sapa("Budi"); //output : halo, Budi

//5. return value
//contoh
function cekGenap(angka){
    if(angka % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(cekGenap(4)); //output : true
console.log(cekGenap(3)); //output : false

//6. Fungsi sebagai First-Class Citizen
//contoh
// Fungsi sebagai argumen
function operasiMatematika(a, b, operasi) {
    return operasi(a, b);
}

function tambah(x, y) {
    return x + y;
}

function kali(x, y) {
    return x * y;
}

console.log(operasiMatematika(5, 3, tambah)); // Output: 8
console.log(operasiMatematika(5, 3, kali));  // Output: 15