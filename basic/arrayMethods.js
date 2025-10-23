const nums = [1, 2, 3, 4];

// map()
console.log(nums.map((n) => n * 2)); // [2, 4, 6, 8]

// filter()
console.log(nums.filter((n) => n > 1)); // [2, 3, 4]

// reduce()
console.log(nums.reduce((sum, n) => sum + n, 0)); // 10

// concat()
console.log(nums.concat([5, 6])); // [1, 2, 3, 4, 5, 6]

// slice()
console.log(nums.slice(2, 4)); // [3, 4]

// toString()
console.log(nums.toString()); // 1,2,3,4

// reverse()
console.log(nums.reverse()); // [4, 3, 2, 1]

// push()
console.log(nums.push(8)); // 5 -> returns the new length
console.log(nums); // [4, 3, 2, 1, 8]

// find()
console.log(nums.find((item) => item === 8)); // 8 -> returns the element

// findIndex()
console.log(nums.findIndex((item) => item === 8)); // 4 -> returns the element index

// includes()
console.log(nums.includes(2)); // true
