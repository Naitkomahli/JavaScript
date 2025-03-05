//callback
//callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain dan dijalankan setelah operasi tertentu selesai
//callback digunakan untuk menjalankan kode setelah operasi lain selesai
//callback sangat berguna untuk menjalankan kode secara asynchronous

function selesai(){
    console.log("operasi selesai");
}

function jalankanOperasi(callback){
    console.log("operasi sedang dijalankan");
    setTimeout(function(){
        callback();
    }, 2000); //menunggu 2 detik
}

jalankanOperasi(selesai);