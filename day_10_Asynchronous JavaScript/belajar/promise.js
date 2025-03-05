// Promise adalah objek yang merepresentasikan keberhasilan atau kegagalan dari operasi asynchronous. Promise memiliki tiga status:
// Pending: Operasi sedang berlangsung.
// Fulfilled: Operasi berhasil.
// Rejected: Operasi gagal.

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