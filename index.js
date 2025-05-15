

// Section 1: Algorithmic Challenges

const readline = require("readline");// import Node.js built-in readline module for user input
const rl = readline.createInterface({
  input: process.stdin, //reads keyboard
  output: process.stdout, //writes to console
});

let tasks = [];

// FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz"); // if divisible by both 3 and 5, print "FizzBuzz"
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

// Palindrome Checker
function isPalindrome(word) {
  const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, ""); // normalize string: lowercase + remove non-alphanumeric chars
  return cleaned === cleaned.split("").reverse().join("");
}

// Sum of Unique Elements
function sumOfUniqueElements(nums) {
  const count = new Map(); // create a Map to count how many times each number appears
  for (let num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  let sum = 0;
  for (let [num, c] of count) {
    if (c === 1) sum += num; // only add the number to sum if it appears exactly once
  }
  return sum;
}

// Main Menu
function mainMenu() {
  console.log(`
Welcome! What would you like to run?

1. FizzBuzz
2. Palindrome Checker
3. Sum of Unique Elements
4. To-Do List App
5. Exit`);

  rl.question("Choose an option: ", (choice) => {
    switch (choice.trim()) {
      case "1":
        fizzBuzz();
        return mainMenu();

      case "2":
        rl.question("Enter a word to check: ", (input) => {
          console.log(
            isPalindrome(input)
              ? "Yes, it's a palindrome."
              : "No, it's not a palindrome."
          );
          mainMenu();
        });
        break;

      case "3":
        rl.question(
          "Enter a list of numbers separated by commas: ",
          (input) => {
            const nums = input
              .split(",")
              .map((n) => parseInt(n.trim()))
              .filter((n) => !isNaN(n));
            console.log("Sum of unique elements:", sumOfUniqueElements(nums));
            mainMenu();
          }
        );
        break;

      case "4":
        todoMenu();
        break;

      case "5":
        console.log("Goodbye!");
        rl.close();
        break;

      default:
        console.log("Invalid choice. Try again.");
        mainMenu();
    }
  });
}
// Section 2: Mini Project
// To-Do List Menu
function todoMenu() {
  console.log(`\nTo-Do List App
1. Add a Task
2. View All Tasks
3. Mark Task as Complete
4. Delete a Task
5. Return to Main Menu`);

  rl.question("Choose an option: ", handleTodoOption);
}

function handleTodoOption(choice) {
  switch (choice.trim()) {
    case "1":
      rl.question("Enter the task title: ", (title) => {
        if (title.trim() === "") {
          console.log("Task title cannot be empty.");
        } else {
          tasks.push({ title: title.trim(), completed: false });
          console.log("Task added!");
        }
        todoMenu();
      });
      break;

    case "2":
      if (tasks.length === 0) {
        console.log("No tasks available.");
      } else {
        console.log("Tasks:");
        tasks.forEach((task, i) => {
          console.log(
            `${i + 1}. [${task.completed ? "X" : " "}] ${task.title}`
          );
        });
      }
      todoMenu();
      break;

    case "3":
      rl.question("Enter task number to mark as complete: ", (number) => {
        const index = parseInt(number);
        if (!Number.isInteger(index) || index < 1 || index > tasks.length) {
          console.log("Invalid task number.");
        } else {
          tasks[index - 1].completed = true;
          console.log("Task marked as complete!");
        }
        todoMenu();
      });
      break;

    case "4":
      rl.question("Enter task number to delete: ", (number) => {
        const index = parseInt(number);
        if (!Number.isInteger(index) || index < 1 || index > tasks.length) {
          console.log("Invalid task number.");
        } else {
          tasks.splice(index - 1, 1);
          console.log("Task deleted!");
        }
        todoMenu();
      });
      break;

    case "5":
      mainMenu();
      break;

    default:
      console.log("Invalid option.");
      todoMenu();
  }
}

// Start the app
mainMenu();

module.exports = {
    isPalindrome,
    sumOfUniqueElements,
    fizzBuzz
};
