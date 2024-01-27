## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let cnt = 0;
const counter = () => {
cnt++;
console.log(cnt);
setTimeout(counter, 1000);
}
counter()

(Hint: setTimeout)
