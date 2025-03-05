async function jalankanOperasi() {
    try {
        console.log("Memulai operasi...");
        let result = await new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve("Operasi berhasil!");
            }, 2000);
        });
        console.log(result); // Output: Operasi berhasil!
    } catch (error) {
        console.log(error); // Output jika terjadi error
    }
}

jalankanOperasi();