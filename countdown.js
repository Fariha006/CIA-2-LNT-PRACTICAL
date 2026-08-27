/*
//TASK 1
console.log("Countdown App Ready");

//TASK 2
// V8 executes the JavaScript code.
// libuv handles asynchronous operations and timers in the background.
// This allows Node.js to continue executing other code while the timer runs.

setTimeout(() => {
    console.log("Timer finished");
}, 3000);

console.log("Countdown App Ready");
console.log("Waiting for timer...");


//TASK 3
// Node.js timers module methods used:
// setInterval() and clearInterval()

const { setInterval, clearInterval } = require("timers");

let seconds = 5;

console.log("Countdown App Ready");

const timer = setInterval(() => {
    console.log(seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown Complete!");
    }
}, 1000);


//TASK 4
const start = new Date("2026-08-27T10:00:00");
const end = new Date("2026-08-27T10:00:30");

const secondsRemaining = (end - start) / 1000;

console.log(secondsRemaining);


//TASK 5
const readline = require("readline");

let seconds = parseInt(process.argv[2]);

if (isNaN(seconds) || seconds <= 0) {
    console.log("Please provide a valid countdown duration.");
    process.exit(1);
}

console.log(`Countdown started for ${seconds} seconds.`);
console.log('Type "cancel" to stop the countdown.');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const timer = setInterval(() => {
    console.log(`${seconds} seconds remaining...`);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown Complete!");
        rl.close();
    }
}, 1000);

rl.on("line", (input) => {
    if (input.trim().toLowerCase() === "cancel") {
        clearInterval(timer);
        console.log("Countdown cancelled.");
        rl.close();
    }
});


//TASK 6
console.log("Countdown App Ready");
console.log("Countdown App Updated!");


//TASK 7
// Bug found: the comparison operator was incorrect.
// It was changed from > 0 to < 0 so the countdown reaches zero correctly.
let seconds = 5;

const timer = setInterval(() => {
    console.log(seconds);

    seconds--;

    // Fixed: stop when the countdown reaches zero.
    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown Complete!");
    }
}, 1000);


//TASK 8
function checkTimeLeftCallback(seconds, callback) {
    setTimeout(() => {
        callback(seconds);
    }, seconds * 1000);
}

checkTimeLeftCallback(3, (remainingTime) => {
    console.log("Time remaining:", remainingTime, "seconds");
});


//TASK 9
let seconds = 5;

const timer = setInterval(() => {
    console.log(`${seconds} seconds remaining...`);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);

        setTimeout(() => {
            console.log("Time's up! Countdown has ended.");
        }, 0);
    }
}, 1000);

*/

//TASK 10
function checkTimeLeftPromise(seconds) {
    return new Promise((resolve, reject) => {
        if (seconds < 0) {
            reject(new Error("Invalid countdown duration"));
        } else {
            setTimeout(() => {
                resolve(seconds);
            }, seconds * 1000);
        }
    });
}

checkTimeLeftPromise(3)
    .then((result) => {
        console.log("Time remaining:", result, "seconds");
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });

