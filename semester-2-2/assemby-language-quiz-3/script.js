//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 50;
let countdown;

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

//Questions and Options array

const quizArray = [
  {
    id: "1",
    question:
      "Which type of registers in the 8086 microprocessor hold data for an operation?",
    options: [
      "General Purpose Registers",
      "Address Registers",
      "Segment Registers",
      "Status Registers",
    ],
    correct: "General Purpose Registers",
  },
  {
    id: "2",
    question:
      "Which register in the 8086 is used for arithmetic, logic, and data transfer operations?",
    options: ["AX", "BX", "CX", "DX"],
    correct: "AX",
  },
  {
    id: "3",
    question: "Which register in the 8086 is primarily used for addressing?",
    options: ["AX", "BX", "CX", "DX"],
    correct: "BX",
  },
  {
    id: "4",
    question: "Which register in the 8086 is commonly used as a loop counter?",
    options: ["AX", "BX", "CX", "DX"],
    correct: "CX",
  },
  {
    id: "5",
    question:
      "Which register in the 8086 is used for multiplication and division operations?",
    options: ["AX", "BX", "CX", "DX"],
    correct: "DX",
  },
  {
    id: "6",
    question: "What is the purpose of the SP register in the 8086?",
    options: [
      "Points to the top of the processor's stack",
      "Accesses data on the stack",
      "Points to memory locations in the data segment",
      "Performs string operations",
    ],
    correct: "Points to the top of the processor's stack",
  },
  {
    id: "7",
    question:
      "Which register in the 8086 is commonly used to access data on the stack?",
    options: ["SP", "BP", "SI", "DI"],
    correct: "BP",
  },
  {
    id: "8",
    question: "What are SI and DI registers commonly used for in the 8086?",
    options: [
      "Arithmetic operations",
      "Addressing memory locations in the data segment",
      "Multiplication and division operations",
      "String operations",
    ],
    correct: "String operations",
  },
  {
    id: "9",
    question: "How much memory can the 8086 address?",
    options: ["64 kilobytes", "128 kilobytes", "256 kilobytes", "1 megabyte"],
    correct: "1 megabyte",
  },
  {
    id: "10",
    question: "How are memory segments identified in the 8086?",
    options: [
      "By an 8-bit segment number",
      "By a 16-bit segment number",
      "By a 20-bit segment number",
      "By a 32-bit segment number",
    ],
    correct: "By a 16-bit segment number",
  },
  {
    id: "11",
    question: "What is the logical address in the 8086?",
    options: [
      "Segment number multiplied by 16 plus the offset",
      "Segment number minus the offset",
      "Segment number plus the offset",
      "Segment number divided by 16 plus the offset",
    ],
    correct: "Segment number multiplied by 16 plus the offset",
  },
  {
    id: "12",
    question:
      "What do CS, DS, SS, and ES segment registers stand for in the 8086?",
    options: [
      "Control Segment, Data Segment, Stack Segment, Extra Segment",
      "Code Segment, Data Segment, Stack Segment, Extra Segment",
      "Control Segment, Direct Segment, Stack Segment, Extra Segment",
      "Code Segment, Direct Segment, Stack Segment, Extra Segment",
    ],
    correct: "Code Segment, Data Segment, Stack Segment, Extra Segment",
  },
  {
    id: "13",
    question:
      "Which segment register in the 8086 addresses the start of the program's machine code?",
    options: ["CS", "DS", "SS", "ES"],
    correct: "CS",
  },
  {
    id: "14",
    question: "What does IP register contain in the 8086?",
    options: [
      "Address of the next instruction to be executed",
      "Address of the current instruction being executed",
      "Address of the last executed instruction",
      "Address of the interrupt handler",
    ],
    correct: "Address of the next instruction to be executed",
  },
  {
    id: "15",
    question: "Which register is commonly used as a base pointer in the 8086?",
    options: ["AX", "BX", "BP", "SI"],
    correct: "BP",
  },
  {
    id: "16",
    question:
      "Which flags in the FLAGS register reflect the result of an instruction in the 8086?",
    options: [
      "Status flags",
      "Control flags",
      "Interrupt flags",
      "Overflow flags",
    ],
    correct: "Status flags",
  },
  {
    id: "17",
    question: "What does the ZF (zero flag) indicate in the 8086?",
    options: [
      "The result of an arithmetic operation is zero",
      "The result of a logical operation is zero",
      "The result of a data transfer operation is zero",
      "The result of a comparison operation is zero",
    ],
    correct: "The result of an arithmetic operation is zero",
  },
  {
    id: "18",
    question:
      "Which register in the 8086 is used to access the status of the microprocessor?",
    options: ["AX", "BX", "FLAGS", "IP"],
    correct: "FLAGS",
  },
  {
    id: "19",
    question: "How many status flags are there in the 8086?",
    options: ["4", "8", "16", "32"],
    correct: "8",
  },
  {
    id: "20",
    question: "What is the purpose of the control flags in the 8086?",
    options: [
      "Enable or disable certain operations of the processor",
      "Store the result of arithmetic operations",
      "Determine the execution flow of the program",
      "Control the interrupt handling mechanism",
    ],
    correct: "Enable or disable certain operations of the processor",
  },

  {
    id: "21",
    question:
      "Which register in the 8086 is not directly accessible to the user?",
    options: ["AX", "BX", "IP", "FLAGS"],
    correct: "IP",
  },
  {
    id: "22",
    question:
      "Which register in the 8086 is commonly used to hold an offset into any segment, especially the stack segment?",
    options: ["AX", "BX", "BP", "SI"],
    correct: "BP",
  },
  {
    id: "23",
    question: "What do the SI and DI registers in the 8086 commonly specify?",
    options: [
      "Arithmetic operations",
      "Memory locations in the data segment",
      "Input/output ports",
      "Interrupt vectors",
    ],
    correct: "Memory locations in the data segment",
  },
  {
    id: "24",
    question:
      "Which flag in the FLAGS register indicates whether inputs from the keyboard are ignored by the processor?",
    options: [
      "ZF (zero flag)",
      "CF (carry flag)",
      "IF (interrupt flag)",
      "DF (direction flag)",
    ],
    correct: "IF (interrupt flag)",
  },
  {
    id: "25",
    question:
      "How many bits are used to store the status of the microprocessor in the FLAGS register?",
    options: ["4", "8", "16", "32"],
    correct: "8",
  },
  {
    id: "26",
    question:
      "Which flag in the FLAGS register indicates an overflow in an arithmetic operation?",
    options: [
      "ZF (zero flag)",
      "CF (carry flag)",
      "OF (overflow flag)",
      "SF (sign flag)",
    ],
    correct: "OF (overflow flag)",
  },
  {
    id: "27",
    question:
      "What is the purpose of the CF (carry flag) in the FLAGS register?",
    options: [
      "Indicates an overflow in an arithmetic operation",
      "Indicates a borrow in a subtraction operation",
      "Indicates a carry in an addition operation",
      "Indicates the sign of the result",
    ],
    correct: "Indicates a carry in an addition operation",
  },
  {
    id: "28",
    question:
      "What is the purpose of the DF (direction flag) in the FLAGS register?",
    options: [
      "Determines the direction of data movement in string operations",
      "Controls the interrupt handling mechanism",
      "Enables or disables the execution of certain instructions",
      "Indicates the result of a comparison operation",
    ],
    correct: "Determines the direction of data movement in string operations",
  },
  {
    id: "29",
    question:
      "Which flag in the FLAGS register indicates whether the result of an arithmetic operation is negative?",
    options: [
      "ZF (zero flag)",
      "CF (carry flag)",
      "OF (overflow flag)",
      "SF (sign flag)",
    ],
    correct: "SF (sign flag)",
  },
  {
    id: "30",
    question:
      "What is the purpose of the SF (sign flag) in the FLAGS register?",
    options: [
      "Indicates an overflow in an arithmetic operation",
      "Indicates a borrow in a subtraction operation",
      "Indicates whether the result of an arithmetic operation is negative",
      "Indicates whether the result of a comparison operation is zero",
    ],
    correct:
      "Indicates whether the result of an arithmetic operation is negative",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      // Stop the timer
      clearInterval(countdown);

      // Hide the question container and display the score container
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");

      // User score
      userScore.innerHTML =
        "You got " +
        scoreCount +
        " questions correct out of " +
        questionCount +
        " questions.";
    } else {
      // Display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Questions";
      // Display quiz
      quizDisplay(questionCount);
      count = 50;
      clearInterval(countdown);
      timerDisplay();
    }

    // Calculate percentage
    let answeredQuestions = questionCount;
    let totalQuestions = quizArray.length;
    let percentage = Math.floor((scoreCount / answeredQuestions) * 100);
    // Set default value to 0% if no questions answered
    percentage = isNaN(percentage) ? 0 : percentage;
    document.querySelector(".percentage").innerHTML = percentage + "%";

    // Display appraisal message based on percentage
    let appraisalHeading = document.getElementById("appraise-heading");
    if (percentage <= 50) {
      appraisalHeading.innerHTML = "Failed!";
    } else if (percentage <= 60) {
      appraisalHeading.innerHTML = "Above average!";
    } else if (percentage <= 80) {
      appraisalHeading.innerHTML = "Good job!";
    } else if (percentage <= 99) {
      appraisalHeading.innerHTML = "Excellent!";
    } else {
      appraisalHeading.innerHTML = "Perfect!";
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Questions";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

// Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  // Decode the correct option
  let decodedCorrectOption = decodeEntities(quizArray[questionCount].correct);

  // If user clicked answer matches the decoded correct option
  if (userSolution === decodedCorrectOption) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    // For marking the correct option
    options.forEach((element) => {
      if (element.innerText == decodedCorrectOption) {
        element.classList.add("correct");
      }
    });
  }

  // Clear interval (stop timer)
  clearInterval(countdown);
  // Disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

// Function to decode HTML entities
function decodeEntities(encodedString) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = encodedString;
  return textarea.value;
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 50;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});
