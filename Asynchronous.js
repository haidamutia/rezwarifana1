// Fungsi yang meniru operasi yang memerlukan waktu lama (3 detik)
function asynchronousOperation(callback) {
    console.log("Memulai operasi asynchronous...");
    setTimeout(function() {
        console.log("Operasi asynchronous selesai.");
        callback();
    }, 3000);
}

console.log("Memulai program.");
asynchronousOperation(function() {
    console.log("Program selesai.");
});
