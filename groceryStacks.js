// Initialize an empty array to act as the stack
let groceryStack = [];

// Function to check the top value of the stack and determine if it is empty
function peek() {
  if (groceryStack.length === 0) {
    console.log("The stack is empty.");
    return null;
  } else {
    console.log("Top item in the stack:", groceryStack[groceryStack.length - 1]);
    return groceryStack[groceryStack.length - 1];
  }
}

// Function to add an item to the stack
function push(item) {
  // Add the item to the end of the array
  groceryStack.push(item);
  console.log(`Added "${item}" to the stack.`);
  peek(); // Check the top of the stack after the push operation
  console.log("Updated Stack:", groceryStack);
}

// Function to remove the last item from the stack
function pop() {
  if (groceryStack.length === 0) {
    console.log("Cannot remove. The stack is already empty.");
    return null;
  } else {
    const removedItem = groceryStack.pop();
    console.log(`Removed "${removedItem}" from the stack.`);
    peek(); // Check the top of the stack after the pop operation
    console.log("Updated Stack:", groceryStack);
    return removedItem;
  }
}

// Main program to handle user input
for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  push(item); // Add each input item to the stack
}

// Demonstrate stack operations
console.log("\nPerforming stack operations...");
pop(); // Remove the top item
pop(); // Remove another item
push("Milk"); // Add a new item
pop(); // Remove the top item again
