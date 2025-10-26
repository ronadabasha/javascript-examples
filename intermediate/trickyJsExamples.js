/* 1.Hoisting with var */

console.log(a);
var a = 5;
// => undefined

/* 2.Hoisting with let */
// console.log(b);
// let b = 5;
// => ReferenceError

/* 3.this in Arrow vs Normal Function */
const obj = {
  name: "John Doe",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => console.log(this.name),
};
obj.normal(); // John Doe
obj.arrow(); // undefined

/* 4.Equality */
console.log(0 == ""); // true
console.log(0 == "0"); // true
console.log("" == "0"); // false

/* 5.typeof null */
console.log(typeof null); // "object"
/* This is a historical bug in JavaScript that dates back to its first implementation in the 1990s.
null represents the absence of any object value, but due to legacy reasons, typeof null incorrectly returns "object".

This behavior can’t be fixed now because too much existing code depends on it. */

/* */
console.log("5" - 2); // 3
console.log("5" + 2); // '52'

/* 6.Implicit coercion*/
console.log("5" - 2); // 3
console.log("5" + 2); // '52'

/* 7.Floating point precision */
console.log(0.1 + 0.2 === 0.3); // false

/* 8.Array holes */
const arr = [1, , 3];
console.log(arr.length); // 3
console.log(arr[1]); // undefined

/* 9.Object keys as strings */
const obj2 = {};
obj2[1] = "a";
obj2["1"] = "b";
console.log(obj2[1]); // b
//In JavaScript, object keys are always strings (or symbols) — even if you use a number as a key.
//The number 1 is automatically converted to a string key "1".

/* 10.parseInt quirk */
console.log(parseInt("08")); // → 8

/* 11.Array comparison */
console.log([1, 2] == [1, 2]); // → false

/* 12.Object comparison */
//console.log({} === {}); // → false

/* 13.NaN behavior */
console.log(NaN === NaN); // → false
console.log(isNaN(NaN)); // → true

/* 14.Default parameter evaluation order */
function f(a = b, b = 2) {
  console.log(a, b);
}
f(); // → ReferenceError

/* 15.Object.freeze */
const obj3 = Object.freeze({ a: 1 });
obj3.a = 2;
console.log(obj3.a); // → 1

/* 16.Object reference */
const a = { n: 1 };
const b = a;
b.n = 2;
console.log(a.n); // → 2

/* 17.Destructuring defaults */
const { x = 10 } = { x: undefined };
console.log(x); // → 10

/* 18.Async function return */
async function f() {
  return 1;
}
console.log(f()); // → Promise { 1 }

/* 19.typeof NaN */
console.log(typeof NaN); // → "number"

/* 20. Adding objects */
console.log({} + {}); // → "[object Object][object Object]"
console.log([] + []); // → ""

/* 21.Array sort default */
const nums = [1, 10, 2, 21];
nums.sort();
console.log(nums); // → [1, 10, 2, 21]
//Default sort compares strings, not numbers.

/* 22.Object spread and reference */
const user = { info: { name: "Ronada" } };
const clone = { ...user };
clone.info.name = "Alex";
console.log(user.info.name); // → "Alex"
//Shallow copy — inner object still shared.

/* 23.JSON stringify undefined */
console.log(JSON.stringify({ a: undefined, b: 1 })); // → '{"b":1}'
//undefined values are removed from JSON output.

/* 24.The Mysterious setTimeout */
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Output:
//4 4 4
//var is function-scoped. All callbacks share the same i, which becomes 4 after the loop ends.
//To fix: use let i = 1; i <= 3; i++ (block-scoped).

/* 25.Division by zero */
console.log(1 / 0); //Infinity
/* 
-JavaScript follows the IEEE 754 standard for numbers.
-Dividing a positive number by 0 does not throw an error — it returns the special value Infinity.
-Dividing a negative number by 0 returns -Infinity.
-Dividing 0 by 0 returns NaN (Not a Number). */
