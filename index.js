let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//a) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split())
console.log(str.split('e'))
console.log(str.split(' '))
console.log(str.split(''))




//b) Use the join method on the array to identify the purpose of the parameter inside the ().


console.log(arr.join(","))

//c) Do split or join change the original string/array?

console.log(str)
console.log(str.split(' '))
console.log(str)

if (console.log(str) === console.log(str.split(' ')) === false) {
  console.log('The split method alters the orignal array')
} else {
  console.log("The split method does not alter the original array")
}

//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";


cargoHold = cargoHold.split(",").sort().join(", ")
console.log(cargoHold)

