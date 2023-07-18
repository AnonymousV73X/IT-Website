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
    question: "Which instruction inverts each bit of a byte or a word?",
    options: ["AND", "OR", "XOR", "NOT"],
    correct: "NOT",
  },
  {
    id: "2",
    question: "What is the purpose of using a mask in logical instructions?",
    options: [
      "To preserve the destination bits",
      "To clear the destination bits",
      "To set the destination bits",
      "To modify selected bits in the destination operand",
    ],
    correct: "To modify selected bits in the destination operand",
  },
  {
    id: "3",
    question:
      "Which logical instruction can be used to clear specific destination bits while preserving the others?",
    options: ["AND", "OR", "XOR", "NOT"],
    correct: "AND",
  },
  {
    id: "4",
    question: "The AND instruction affects which of the following flags?",
    options: ["CF, OF", "PF, SF, ZF", "AF", "All of the above"],
    correct: "PF, SF, ZF",
  },
  {
    id: "5",
    question: "What does the OR instruction do?",
    options: [
      "Inverts each bit of the source operand",
      "Clears specific destination bits",
      "Sets specific destination bits",
      "XORs each bit of the source operand with the destination",
    ],
    correct: "Sets specific destination bits",
  },
  {
    id: "6",
    question:
      "Which instruction can be used to set specific destination bits while preserving the others?",
    options: ["AND", "OR", "XOR", "NOT"],
    correct: "OR",
  },
  {
    id: "7",
    question: "What is the purpose of the XOR instruction?",
    options: [
      "To invert each bit of the source operand",
      "To clear specific destination bits",
      "To set specific destination bits",
      "To invert specific destination bits while preserving the others",
    ],
    correct: "To invert specific destination bits while preserving the others",
  },
  {
    id: "8",
    question: "Which flags are affected by the XOR instruction?",
    options: ["CF, OF", "PF, SF, ZF", "AF", "All of the above"],
    correct: "PF, SF, ZF",
  },
  {
    id: "9",
    question: "What does the TEST instruction do?",
    options: [
      "Inverts the contents of the destination operand",
      "Clears specific destination bits",
      "Sets specific destination bits",
      "ANDs the contents of the source operand with the destination operand",
    ],
    correct:
      "ANDs the contents of the source operand with the destination operand",
  },
  {
    id: "10",
    question: "Which flags are updated by the TEST instruction?",
    options: ["CF, OF", "PF, SF, ZF", "AF", "None of the above"],
    correct: "PF, SF, ZF",
  },
  {
    id: "11",
    question:
      "Which instruction logically ANDs each bit of the source operand with the corresponding bit in the destination operand?",
    options: ["AND", "OR", "XOR", "NOT"],
    correct: "AND",
  },
  {
    id: "12",
    question:
      "The AND instruction can be used to clear specific destination bits while preserving the others by using a mask with which bits set to 0?",
    options: [
      "Mask bits set to 0",
      "Mask bits set to 1",
      "Mask bits set to X",
      "Mask bits set to 1 or X",
    ],
    correct: "Mask bits set to 0",
  },
  {
    id: "13",
    question: "What is the result of X AND 0?",
    options: ["0", "1", "X", "Undefined"],
    correct: "0",
  },
  {
    id: "14",
    question:
      "Which instruction logically ORs each bit of the source operand with the corresponding bit in the destination operand?",
    options: ["AND", "OR", "XOR", "NOT"],
    correct: "OR",
  },
  {
    id: "15",
    question:
      "The OR instruction can be used to set specific destination bits while preserving the others by using a mask with which bits set to 1?",
    options: [
      "Mask bits set to 0",
      "Mask bits set to 1",
      "Mask bits set to X",
      "Mask bits set to 0 or X",
    ],
    correct: "Mask bits set to 1",
  },
  {
    id: "16",
    question: "What is the result of X OR 0?",
    options: ["0", "1", "X", "Undefined"],
    correct: "X",
  },
  {
    id: "17",
    question:
      "Which instruction logically XORs each bit of the source operand with the corresponding bit in the destination operand?",
    options: ["AND", "OR", "XOR", "NOT"],
    correct: "XOR",
  },
  {
    id: "18",
    question:
      "The XOR instruction can be used to invert specific destination bits while preserving the others by using a mask with which bits set to 1?",
    options: [
      "Mask bits set to 0",
      "Mask bits set to 1",
      "Mask bits set to X",
      "Mask bits set to 0 or X",
    ],
    correct: "Mask bits set to 1",
  },
  {
    id: "19",
    question: "What is the result of X XOR 0?",
    options: ["0", "1", "X", "Undefined"],
    correct: "X",
  },
  {
    id: "20",
    question:
      "Which instruction ANDs the contents of a source byte or word with the contents of the specified destination word?",
    options: ["AND", "OR", "XOR", "TEST"],
    correct: "AND",
  },

  {
    id: "21",
    question: "What flags are affected by the TEST instruction?",
    options: ["CF, OF", "PF, SF, ZF", "AF", "None of the above"],
    correct: "PF, SF, ZF",
  },
  {
    id: "22",
    question: "The NOT instruction affects which of the following flags?",
    options: ["CF, OF", "PF, SF, ZF", "AF", "None of the above"],
    correct: "None of the above",
  },
  {
    id: "23",
    question: "Which instruction inverts each bit of a byte or a word?",
    options: ["AND", "OR", "XOR", "NOT"],
    correct: "NOT",
  },
  {
    id: "24",
    question: "What is the purpose of using a mask in logical instructions?",
    options: [
      "To preserve the destination bits",
      "To clear the destination bits",
      "To set the destination bits",
      "To modify selected bits in the destination operand",
    ],
    correct: "To modify selected bits in the destination operand",
  },
  {
    id: "25",
    question:
      "Which logical instruction can be used to clear specific destination bits while preserving the others?",
    options: ["AND", "OR", "XOR", "NOT"],
    correct: "AND",
  },
  {
    id: "26",
    question: "The AND instruction affects which of the following flags?",
    options: ["CF, OF", "PF, SF, ZF", "AF", "All of the above"],
    correct: "PF, SF, ZF",
  },
  {
    id: "27",
    question: "What does the OR instruction do?",
    options: [
      "Inverts each bit of the source operand",
      "Clears specific destination bits",
      "Sets specific destination bits",
      "XORs each bit of the source operand with the destination",
    ],
    correct: "Sets specific destination bits",
  },
  {
    id: "28",
    question:
      "Which instruction can be used to set specific destination bits while preserving the others?",
    options: ["AND", "OR", "XOR", "NOT"],
    correct: "OR",
  },
  {
    id: "29",
    question: "What is the purpose of the XOR instruction?",
    options: [
      "To invert each bit of the source operand",
      "To clear specific destination bits",
      "To set specific destination bits",
      "To invert specific destination bits while preserving the others",
    ],
    correct: "To invert specific destination bits while preserving the others",
  },
  {
    id: "30",
    question:
      "Which instruction ANDs the contents of a source byte or word with the contents of the specified destination word?",
    options: ["AND", "OR", "XOR", "TEST"],
    correct: "AND",
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
