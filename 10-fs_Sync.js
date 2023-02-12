
//membaca isi file
const {readFileSync, writeFileSync,} = require ('fs');
console.log('start')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//membuat file baru
writeFileSync('./content/result-sync.txt',`ini adalah ${first},${second}`,

//add the same value on a new line
{flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')