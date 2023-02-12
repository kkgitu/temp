const os = require('os')

//info tentang pengguna saat ini
const user = os.userInfo()
console.log(user)

//method return sistem hidup dalam detik
console.log(`sistem uptime is ${os.uptime()}`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}

console.log(currentOs)