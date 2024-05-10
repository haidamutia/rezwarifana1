// Fungsi yang meniru operasi yang memerlukan waktu lama (3 detik)
function synchronousOperation() {
    console.log("Memulai operasi synchronous...");
    // Menunggu selama 3 detik
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + 3000) {
        // Melakukan pengulangan selama 3 detik
    }
    console.log("Operasi synchronous selesai.");
}

console.log("Memulai program.");
synchronousOperation();
console.log("Program selesai.");
