// GLOBAL - NO WINDOW

// __dirname      - jalan ke direktori aktif
// __filename     - nama file
// require        - fungsi untuk menggunakan module(Common JS)
// module         - info tentang module saat ini digunakan (file)
// process        - info tentang env dimana program sedang di eksekusi

console.log(__dirname)
//print hello 1000 times
setInterval(() => {
    console.log('hello')
}, 1000)