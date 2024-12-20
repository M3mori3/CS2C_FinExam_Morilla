//Coding problem 3: Multi-Dimensional Array - Array Restructuring

let subArray1 = [ //md array containing names
    ["Genevieve"],
    ["Juan"],
    ["Luna"],
    ["Gabriel"],
    ["Elise"],
];

let subArray2 = [ // md array containing age
    [24],
    [65],
    [21],
    [5],
    [9],
];
//creates new array with this format [nname, age] from subArray1 and subArray2, matching to their corresponding index 
let newMdArray = subArray1.map((nameArray, index) => [nameArray[0].trim(), subArray2[index][0]]);
console.log(newMdArray);

