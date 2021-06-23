// require
// modules

// 1.  current directory full absolute path.
console.log(__dirname);
// 2.  current file full absolute path.
console.log(__filename);
// info about the ENV where the process is running.
// console.log(process);

// 3. setTimeout
function sayHi(who) {
    console.log(`Hello ${who}!`);
}
let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');
// clearTimeout(myGreeting);

//4. setInterval
function displayTime() {
    console.log((new Date()).toLocaleTimeString());
}
const createClock = setInterval(displayTime, 1000);
setTimeout(() => {
    console.log('stopping the clock');
    clearInterval(createClock);
}, 20000);

// 5. module
// console.log(module)