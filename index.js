// junior_dev_test_js

// Section 1: Algorithmic Challenges

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 15 === 0) console.log("FizzBuzz");
      else if (i % 3 === 0) console.log("Fizz");
      else if (i % 5 === 0) console.log("Buzz");
      else console.log(i);
    }
}
  
function isPalindrome(word) {
    const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
  
function sumOfUniqueElements(nums) {
    const count = new Map();
    for (let num of nums) {
      count.set(num, (count.get(num) || 0) + 1);
    }
    let sum = 0;
    for (let [num, c] of count) {
      if (c === 1) sum += num;
    }
    return sum;
}
  
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  
let tasks = [];
  
function showMenu() {
    console.log(`\nWelcome to the To-Do List App!
  1. Add a Task
  2. View All Tasks
  3. Mark Task as Complete
  4. Delete a Task
  5. Exit`);
    rl.question("Choose an option: ", handleOption);
}
  
function handleOption(choice) {
    switch (choice.trim()) {
      case '1':
        rl.question("Enter the task title: ", title => {
          if (title.trim() === '') {
            console.log("Task title cannot be empty.");
          } else {
            tasks.push({ title: title.trim(), completed: false });
            console.log("Task added!");
          }
          showMenu();
        });
        break;
      case '2':
        if (tasks.length === 0) {
          console.log("No tasks available.");
        } else {
          console.log("Tasks:");
          tasks.forEach((task, i) => {
            console.log(`${i + 1}. [${task.completed ? 'X' : ' '}] ${task.title}`);
          });
        }
        showMenu();
        break;
      case '3':
        rl.question("Enter task number to mark as complete: ", number => {
          const index = parseInt(number);
          if (!Number.isInteger(index) || index < 1 || index > tasks.length) {
            console.log("Invalid task number.");
          } else {
            tasks[index - 1].completed = true;
            console.log("Task marked as complete!");
          }
          showMenu();
        });
        break;
      case '4':
        rl.question("Enter task number to delete: ", number => {
          const index = parseInt(number);
          if (!Number.isInteger(index) || index < 1 || index > tasks.length) {
            console.log("Invalid task number.");
          } else {
            tasks.splice(index - 1, 1);
            console.log("Task deleted!");
          }
          showMenu();
        });
        break;
      case '5':
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid option.");
        showMenu();
    }
}
  
  // showMenu();
  