interface Question {
    question: string;
    option1: string;
    option2: string;
    option3: string;
    correctOption: string;
}

const questions: Question[] = [
    {
        question: 'What is the difference between `let` and `var` in JavaScript?',
        option1: '`let` is block-scoped, while `var` is function-scoped',
        option2: '`let` is hoisted, while `var` is not',
        option3: '`var` is block-scoped, while `let` is function-scoped',
        correctOption: '`let` is block-scoped, while `var` is function-scoped'
    },
    {
        question: 'What is a closure in JavaScript?',
        option1: 'A function that returns another function',
        option2: 'A function combined with its lexical environment',
        option3: 'A function that has no parameters',
        correctOption: 'A function combined with its lexical environment'
    },
    {
        question: 'Which method is used to find the index of an element in an array?',
        option1: 'findIndex()',
        option2: 'indexOf()',
        option3: 'searchIndex()',
        correctOption: 'indexOf()'
    },
    {
        question: 'What does the `bind()` method do?',
        option1: 'Creates a new function with a specific `this` value',
        option2: 'Executes a function immediately with a specific `this` value',
        option3: 'Binds a function to an object',
        correctOption: 'Creates a new function with a specific `this` value'
    },
    {
        question: 'How can you prevent an object’s properties from being modified?',
        option1: 'Using `Object.seal()`',
        option2: 'Using `Object.freeze()`',
        option3: 'Using `Object.prevent()`',
        correctOption: 'Using `Object.freeze()`'
    },
    {
        question: 'Which operator is used to check both value and type?',
        option1: '==',
        option2: '===',
        option3: '!=',
        correctOption: '==='
    },
    {
        question: 'What is the purpose of the `setTimeout()` function?',
        option1: 'To call a function repeatedly with a delay',
        option2: 'To call a function after a specified delay',
        option3: 'To delay the execution of a function',
        correctOption: 'To call a function after a specified delay'
    },
    {
        question: 'How do you check if a variable is an array?',
        option1: 'typeof variable === "array"',
        option2: 'variable instanceof Array',
        option3: 'Array.isArray(variable)',
        correctOption: 'Array.isArray(variable)'
    },
    {
        question: 'What will the following code output: `console.log(typeof null)`?',
        option1: '`null`',
        option2: '`object`',
        option3: '`undefined`',
        correctOption: '`object`'
    },
    // {
    //     question: 'What is the purpose of the `Promise.all()` method?',
    //     option1: 'To execute all promises sequentially',
    //     option2: 'To wait until all promises are resolved or rejected',
    //     option3: 'To execute all promises in parallel',
    //     correctOption: 'To wait until all promises are resolved or rejected'
    // },
    // {
    //     question: 'What is the output of `2 + "2"` in JavaScript?',
    //     option1: '`4`',
    //     option2: '`22`',
    //     option3: '`NaN`',
    //     correctOption: '`22`'
    // },
    // {
    //     question: 'What does the `map()` method do in JavaScript?',
    //     option1: 'Creates a new array with results of calling a provided function on every element',
    //     option2: 'Filters the array based on a condition',
    //     option3: 'Creates a new array with elements that match a condition',
    //     correctOption: 'Creates a new array with results of calling a provided function on every element'
    // },
    // {
    //     question: 'What is the difference between `null` and `undefined`?',
    //     option1: '`null` represents an empty value, while `undefined` means a variable has not been assigned a value',
    //     option2: '`null` is an object, while `undefined` is a data type',
    //     option3: '`null` is automatically assigned, while `undefined` must be manually set',
    //     correctOption: '`null` represents an empty value, while `undefined` means a variable has not been assigned a value'
    // },
    // {
    //     question: 'Which of the following is true about JavaScript arrays?',
    //     option1: 'They can hold values of different types',
    //     option2: 'They must hold values of the same type',
    //     option3: 'They cannot hold functions as elements',
    //     correctOption: 'They can hold values of different types'
    // },
    // {
    //     question: 'What is a pure function in JavaScript?',
    //     option1: 'A function that does not change any state outside its scope',
    //     option2: 'A function that changes the global state',
    //     option3: 'A function that does not take any arguments',
    //     correctOption: 'A function that does not change any state outside its scope'
    // },
    // {
    //     question: 'What is the purpose of the `reduce()` method?',
    //     option1: 'To combine elements of an array into a single value',
    //     option2: 'To filter elements of an array',
    //     option3: 'To map elements to a new array',
    //     correctOption: 'To combine elements of an array into a single value'
    // },
    // {
    //     question: 'What does the `this` keyword refer to in a regular function?',
    //     option1: 'The function itself',
    //     option2: 'The object that owns the function',
    //     option3: 'The global object',
    //     correctOption: 'The object that owns the function'
    // },
    // {
    //     question: 'What is the purpose of the `Array.prototype.filter()` method?',
    //     option1: 'To filter an array based on a condition and return a new array',
    //     option2: 'To remove all elements from an array',
    //     option3: 'To find the first element that satisfies a condition',
    //     correctOption: 'To filter an array based on a condition and return a new array'
    // },
    // {
    //     question: 'What is the difference between `==` and `===` in JavaScript?',
    //     option1: '`==` checks for both value and type equality, while `===` checks only for value equality',
    //     option2: '`==` checks for value equality, while `===` checks for both value and type equality',
    //     option3: '`==` and `===` both check for the same equality',
    //     correctOption: '`==` checks for value equality, while `===` checks for both value and type equality'
    // },
    // {
    //     question: 'What is the purpose of the `new` keyword in JavaScript?',
    //     option1: 'To create a new object',
    //     option2: 'To call a function as a constructor',
    //     option3: 'To create a new array',
    //     correctOption: 'To call a function as a constructor'
    // },
    // {
    //     question: 'Which of the following is not a primitive data type in JavaScript?',
    //     option1: 'String',
    //     option2: 'Object',
    //     option3: 'Boolean',
    //     correctOption: 'Object'
    // },
    // {
    //     question: 'What does the `async` keyword do in JavaScript?',
    //     option1: 'Makes a function run asynchronously',
    //     option2: 'Pauses the execution of a function',
    //     option3: 'Allows a function to wait for a promise to resolve',
    //     correctOption: 'Makes a function run asynchronously'
    // },
    // {
    //     question: 'What is a generator function in JavaScript?',
    //     option1: 'A function that can pause and resume its execution',
    //     option2: 'A function that always runs asynchronously',
    //     option3: 'A function that only runs once',
    //     correctOption: 'A function that can pause and resume its execution'
    // },
    // {
    //     question: 'What is the purpose of the `typeof` operator in JavaScript?',
    //     option1: 'To determine the type of a variable or expression',
    //     option2: 'To convert a value to a string',
    //     option3: 'To check if a value is an object',
    //     correctOption: 'To determine the type of a variable or expression'
    // },
    // {
    //     question: 'What is the output of `0.1 + 0.2 === 0.3` in JavaScript?',
    //     option1: '`true`',
    //     option2: '`false`',
    //     option3: '`undefined`',
    //     correctOption: '`false`'
    // },
    // {
    //     question: 'Which of the following methods is used to add new elements to an array?',
    //     option1: 'add()',
    //     option2: 'push()',
    //     option3: 'insert()',
    //     correctOption: 'push()'
    // },
    // {
    //     question: 'What is the purpose of the `Array.prototype.forEach()` method?',
    //     option1: 'To create a new array based on a condition',
    //     option2: 'To execute a provided function once for each array element',
    //     option3: 'To filter elements of an array',
    //     correctOption: 'To execute a provided function once for each array element'
    // },
    // {
    //     question: 'What is the difference between synchronous and asynchronous code in JavaScript?',
    //     option1: 'Synchronous code runs sequentially, while asynchronous code does not',
    //     option2: 'Synchronous code runs in parallel, while asynchronous code runs sequentially',
    //     option3: 'There is no difference between synchronous and asynchronous code',
    //     correctOption: 'Synchronous code runs sequentially, while asynchronous code does not'
    // },
    // {
    //     question: 'What is the purpose of the `Array.prototype.slice()` method?',
    //     option1: 'To remove elements from an array',
    //     option2: 'To return a shallow copy of a portion of an array into a new array',
    //     option3: 'To find an element in an array',
    //     correctOption: 'To return a shallow copy of a portion of an array into a new array'
    // },
    // {
    //     question: 'What is the difference between `call()` and `apply()` in JavaScript?',
    //     option1: '`call()` takes arguments separately, while `apply()` takes them as an array',
    //     option2: '`call()` runs a function, while `apply()` binds a function',
    //     option3: '`call()` binds a function, while `apply()` runs a function',
    //     correctOption: '`call()` takes arguments separately, while `apply()` takes them as an array'
    // }
];

const ques = document.getElementById('question') as HTMLElement;
let index = 0;
const btn = document.getElementById('btn') as HTMLButtonElement;
let score = 0;
let quesNum = 1;
const opt1 = document.getElementById('opt1') as HTMLElement;
const opt2 = document.getElementById('opt2') as HTMLElement;
const opt3 = document.getElementById('opt3') as HTMLElement;

// resultDiv
const resultText = document.getElementById('result-text') as HTMLElement;
const resultGif = document.getElementById('result-gif') as HTMLImageElement;
const resultDiv = document.getElementById('result') as HTMLElement;

const timerDisplay = document.getElementById('timer') as HTMLElement;
let timeLeft = 10 * 60; // 10 minutes in seconds

const interval = setInterval(function () {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;

    if (timeLeft === 0) {
        clearInterval(interval);
        alert('Time is up! Quiz result: ' + ((score / questions.length) * 100) + '%');
    } else {
        timeLeft--;
    }
}, 1000);

function nextQuestion(): void {
    const options = document.getElementsByName('ans') as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            const selectedNumber = options[i].value;
            const selectedAnswer = questions[index - 1][`option${selectedNumber}` as keyof Question];
            const correctOption = questions[index - 1].correctOption;
            if (selectedAnswer === correctOption) {
                score++;
            }
            console.log(selectedNumber);
            console.log(selectedAnswer);
        }
        options[i].checked = false;
        btn.disabled = true;
    }
    if (index > questions.length - 1) {
        clearInterval(interval);
        alert('Quiz result: ' + ((score / questions.length) * 100) + '%');
        showResult();
    } else {
        ques.innerText = "Q" + quesNum++ + ": " + questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++;
    }
}

nextQuestion();

function btnClick(): void {
    btn.disabled = false;
}

function showResult() {
    var percentage = (score / questions.length) * 100;
    if (percentage >= 70) {
        resultText.innerText = "Congratulations! You scored " + percentage + "%";
        resultGif.src = "https://gifdb.com/images/high/happy-jonah-hill-prw5obdo8pxp11p9.gif"; // Dancing GIF
    } else {
        resultText.innerText = "Better luck next time! You scored " + percentage + "%";
        resultGif.src = "https://media1.giphy.com/media/l378giAZgxPw3eO52/200w.gif?cid=6c09b952gbvbgo8pqyg0crq50iupquqxwtjcz16sxggt7ca9&ep=v1_gifs_search&rid=200w.gif&ct=g"; // Sad GIF
    }
    resultDiv.style.display = "block";
}

