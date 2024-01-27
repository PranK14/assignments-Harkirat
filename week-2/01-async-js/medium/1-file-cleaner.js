const fs = require('fs')

const str = fs.readFileSync('a.txt', 'utf-8')
const newStr = str.replace(/\s+/g, ' ')
fs.writeFileSync('a.txt', newStr)
