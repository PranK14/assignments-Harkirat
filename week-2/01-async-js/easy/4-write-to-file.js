const fs = require('fs')

fs.writeFile('b.txt', 'I have written this file using fs', (err) => {
  if (err) throw err
  console.log('written')
})
