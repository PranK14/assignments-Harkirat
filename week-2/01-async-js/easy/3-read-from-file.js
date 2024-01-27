const fs = require('fs')

fs.readFile('a.txt', 'utf-8', (err, data) => {
  try {
    console.log(data)
  } catch (err) {
    console.log('error')
  }
})
let cnt = 0
for (let i = 0; i < 10000000000; i++) {
  cnt += 1
}
console.log(cnt)
// const fs = require('fs')

// const fileReader = async (filePath) => {
//   try {
//     const fileData = fs.readFileSync(filePath, 'utf-8')

//     //expensive operation after file reading
//     let a = 1
//     for (let index = 0; index < 10000000000; index++) {
//       a += index
//     }
//     console.log(fileData)
//   } catch (error) {
//     console.log('Error occurred while reading')
//   }
// }

// fileReader('./a.txt')
