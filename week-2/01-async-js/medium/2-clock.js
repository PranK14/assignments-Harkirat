const counter = () => {
  const date = new Date()
  let hrs = date.getHours()
  let end = ''
  if (hrs > 12) {
    end = 'PM'
  } else {
    end = 'AM'
  }
  hrs = Math.abs(12 - hrs)
  let min = date.getMinutes()
  let sec = date.getSeconds()
  console.log(`${hrs}: ${min}: ${sec} ${end}`)
  setTimeout(counter, 1000)
}
counter()
