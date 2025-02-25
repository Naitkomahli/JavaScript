//IF ELSE
console.log("if else");
let umur = 15;
if (umur >= 15){
    console.log("Kamu sudah legal");
}else{
    console.log("Kamu belum legal hehe");
}

//contoh lain
let nilai = 85;
if (nilai >= 85){
    console.log("Nilai kamu A");
} else if (nilai >= 75){
    console.log("Nilai kamu B");
} else if (nilai >= 65){
    console.log("Nilai kamu C");
} else if (nilai >= 55){
    console.log("Nilai kamu D");
} else {
    console.log("Nilai kamu E");
}

//SWITCH CASE
console.log("switch case");
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

