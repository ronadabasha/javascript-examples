// Event Loop in JavaScript
// JavaScript is single-threaded — it executes one thing at a time.

// The Event Loop handles asynchronous operations by managing:
// - Call Stack (where functions are executed in order Last-In, First-Out (LIFO))
// - Web APIs (That are browser fetures like: setTimeout, HTTP requests, DOM events ...etc )
// - Callback Queues (Marotasks like: setTimeout, setInterval, fetch. Are executed when the call stack is empty)
// - Microtask Queues (Promises and other microtasks, that are executed before macrotasks)
// - Event Loop ( Continuously checks if the call stack is empty and pushes new tasks from the queues)

//EXAMPLE

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback (Macrotask)");
}, 0);

Promise.resolve().then(() => console.log("Promise then (Microtask)"));

console.log("End");

// Expected output order:
// Start
// End
// Promise then (Microtask)
// Timeout callback (Macrotask)
