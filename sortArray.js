//Coding problem 2: array sorting

let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57]; 
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let mergedArr = numbers.concat(names); //joins both numbers and names into a single array
console.log(mergedArr);

numbers.sort((a, b) => b - a); //sorts numbers in descending order
console.log(numbers);

names.sort(); //sorts names alphabetically
console.log(names);