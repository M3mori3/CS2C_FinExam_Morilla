// Function to perform Bubble Sort
function bubbleSort(arr) {
    let n = arr.length; // Determine the length of the array
    console.log("Bubble Sort Process:"); // Log the beginning of the sorting process

    for (let i = 0; i < n - 1; i++) { // Outer loop runs for each pass over the array
        for (let j = 0; j < n - i - 1; j++) { // Inner loop compares adjacent elements
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`); // Log the elements being compared
            if (arr[j] > arr[j + 1]) { // Check if the current element is greater than the next
                // Swap arr[j] and arr[j + 1] to place the smaller element first
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log(`Swapped to: [${arr.join(", ")}]`); // Log the array after swapping
            }
        }
    }
    return arr; // Return the sorted array
}

// Create and populate the array
let numbers = []; // Initialize an empty array to store user input
let predefinedNumbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78]; // Predefined numbers to prompt user input

// Loop through each predefined number and prompt the user to enter it
predefinedNumbers.forEach(number => {
    let userInput = prompt(`Enter the number (${number}) to add to the array:`, number); // Prompt user for the number
    numbers.push(Number(userInput)); // Convert input to a number and add to the array
});

// Log the initial array before sorting
console.log("Initial Array:", numbers);

// Pass the array to the bubble sort function for sorting
let sortedArray = bubbleSort(numbers);

// Log the sorted array after sorting is complete
console.log("Sorted Array:", sortedArray);
