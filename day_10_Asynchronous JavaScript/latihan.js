// Contoh Promise
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let success = true; // Ganti ke false untuk melihat reject
        if (success) {
            resolve("Operasi berhasil!");
        } else {
            reject("Operasi gagal!");
        }
    }, 2000);
});

promise
    .then(function(result) {
        console.log(result); // Output: Operasi berhasil!
    })
    .catch(function(error) {
        console.log(error); // Output: Operasi gagal!
    });

// Contoh Async-Await dengan Fetch API
async function ambilData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log("Data dari server:", data);
    } catch (error) {
        console.log("Terjadi error:", error);
    }
}

ambilData();