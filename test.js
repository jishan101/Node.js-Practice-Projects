// console.log(global);

console.log(__dirname);
console.log(__filename);

setTimeout(() => {
    console.log("in the timeout");
    clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
    console.log("in the interval.");
}, 1000);

