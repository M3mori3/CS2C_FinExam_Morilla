// Define the Node class to represent each element (node) in the linked list
class Node {
    /**
     * Constructor to create a new node with a given value.
     * @param {*} value - The data stored in the node.
     */
    constructor(value) {
      this.value = value; // The data value of the node.
      this.next = null;   // Pointer to the next node, initially set to null.
    }
  }
  
  // Define the LinkedList class to manage the linked list
  class LinkedList {
    /**
     * Constructor to initialize an empty linked list.
     */
    constructor() {
      this.head = null;  // The starting node of the list, initially null (empty list).
      this.size = 0;     // Keeps track of the number of nodes in the list.
    }
  
    /**
     * Appends a new node with the given value to the linked list.
     * @param {*} value - The value to add to the list.
     */
    append(value) {
      // Create a new Node instance with the given value
      const newNode = new Node(value);
  
      // Check if the list is empty
      if (this.head === null) {
        // If empty, set the new node as the head of the list
        this.head = newNode;
      } else {
        // Traverse to the end of the list
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        // Add the new node at the end
        current.next = newNode;
      }
  
      // Increment the size of the list
      this.size++;
  
      // Print the updated linked list after appending
      this.print();
    }
  
    /**
     * Prints the current state of the linked list.
     */
    print() {
      let current = this.head; // Start at the head node
      let output = "Linked List: ";
  
      // Traverse through each node and collect its value
      while (current !== null) {
        output += current.value + " -> ";
        current = current.next;
      }
  
      // Indicate the end of the list
      output += "null";
      console.log(output);
    }
  }
  
  // Main program to demonstrate the linked list functionality
  
  // Step 1: Create a new linked list instance
  const linkedList = new LinkedList();
  
  // Step 2: Append the required items to the linked list
  linkedList.append("Data Structures-Array");   // Add "Data Structures-Array"
  linkedList.append("Variable Type-Integer");  // Add "Variable Type-Integer"
  linkedList.append("Sorting Algorithm-Bubble Sort"); // Add "Sorting Algorithm-Bubble Sort"
  
  // Output:
  // Linked List: Data Structures-Array -> null
  // Linked List: Data Structures-Array -> Variable Type-Integer -> null
  // Linked List: Data Structures-Array -> Variable Type-Integer -> Sorting Algorithm-Bubble Sort -> null
  