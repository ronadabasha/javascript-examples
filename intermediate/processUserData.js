/*
Task:
Implement a function `processUsers(data)` that takes an array of user objects and returns
a processed array following these rules:

1. Remove duplicates — users with the same email (case-insensitive).
2. Normalize names — capitalize the first letter of each word in `name`.
3. Filter by age — keep only users who are 18 years or older.
4. Sort alphabetically — by name (A–Z).
5. Return specific fields — { name:string, email:string, isGmail: boolean } 

INPUT: 
const users = [
  { name: "john doe", email: "john@gmail.com", age: 25 },
  { name: "jane SMITH", email: "Jane@gmail.com", age: 30 },
  { name: "alice", email: "alice@test.com", age: 17 },
  { name: "Bob", email: "bob@gmail.com", age: 20 },
  { name: "bob", email: "BOB@GMAIL.COM", age: 20 },
];

OUTPUT:
const users = [
  { name: "Bob", email: "bob@gmail.com", isGmail: true },
  { name: "Jane Smith", email: "Jane@gmail.com", isGmail: true },
  { name: "John Doe", email: "john@gmail.com", isGmail: true },
];

*/

const users = [
  { name: "john doe", email: "john@gmail.com", age: 25 },
  { name: "jane SMITH", email: "Jane@gmail.com", age: 30 },
  { name: "alice", email: "alice@test.com", age: 17 },
  { name: "Bob", email: "bob@gmail.com", age: 20 },
  { name: "bob", email: "BOB@GMAIL.COM", age: 20 },
];

function processUserData(users) {
  return users
    .filter(
      (user, index, arr) =>
        index ===
        arr.findIndex((u) => u.email.toLowerCase() === user.email.toLowerCase())
    )
    .map((user) => ({
      ...user,
      name:
        user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase(),
    }))
    .filter((user) => user.age > 18)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((user) => ({
      name: user.name,
      email: user.email,
      isGmail: user.email.toLowerCase().includes("@gmail.com"),
    }));
}

const formatedData = processUserData(users);
console.log("formatedData", formatedData);
