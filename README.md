Section 1:Algorithmic Challenges

1.FizzBuzz
Prints numbers from 1 to 100, replacing:
-Multiples of 3 with "Fizz"
-Multiples of 5 with "Buzz"
-Multiples of both with "FizzBuzz"


2.Palindrome Checker
Checks if a given word or phrase is a palindrome.  
-Case and spaces are ignored  
-Non-alphanumeric characters are also stripped

3.Sum of Unique Elements
Receives a list of numbers and returns the sum of elements that appear *only once*.

---

Section 2: To-Do List Console App

A terminal-based application that lets the user:

-Add a task
-View all tasks
-Mark tasks as completed
-Delete tasks

---

Tests

Basic test files are included for:
-`isPalindrome`
-`sumOfUniqueElements`

Run tests with:

npm test

--

How to Run the App

1.Clone the repository:

git clone https://github.com/RakuraiRaiton/coding-test.git
cd coding-test


2.Install dependencies:

npm install


3.Run the app:

node index.js




##Menu Options

When you run the program, you'll see this menu:


Welcome! What would you like to run?

1.FizzBuzz
2.Palindrome Checker
3.Sum of Unique Elements
4.To-Do List App
5.Exit
```

Each option runs the associated functionality. The app continues running until you choose to exit.

---

## Assumptions

- Input for the palindrome function may include spaces and punctuation — these are cleaned out for fairness.
- Sum of unique numbers assumes valid integer input separated by commas.
- The To-Do list is in-memory only; tasks will reset when the app is closed.
- No frameworks (like Express or React) were used to keep everything pure JavaScript and console-based.

---

## Project Structure

```
coding-test/
├── index.js               # Main code (all logic)
├── test/                  # Basic test files
│   ├── palindrome.test.js
│   ├── unique.test.js
├── .gitignore
├── package.json
└── README.md
```

---

Author

Jose David — Front End Developer 

---
