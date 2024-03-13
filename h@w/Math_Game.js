
function playGame() {
  // Get difficulty level
  let difficulty = prompt("Choose difficulty (easy, intermediate, difficult):").toLowerCase();

  // Validate difficulty
  if (difficulty !== "easy" && difficulty !== "intermediate" && difficulty !== "difficult") {
    alert("Invalid difficulty. Please choose from easy, intermediate, or difficult.");
    playGame();
  }

  let score = 0;
  let numQuestions = 10;

  // Loop for each question
  for (let i = 1; i <= numQuestions; i++) {
    // Generate random operation
    let num1, num2, operator;
    switch (difficulty) {
      case "easy":
        num1 = Math.floor(Math.random() * 9);
        num2 = Math.floor(Math.random() * 9);
        operator = pickRandomOperator(["+", "-", "*"]);
        break;
      case "intermediate":
        num1 = Math.floor(Math.random() * 99) ;
        num2 = Math.floor(Math.random() * 99) ;
        operator = pickRandomOperator(["+", "-", "*"]);
        break;
      case "difficult":
        num1 = Math.floor(Math.random() * 999) ;
        num2 = Math.floor(Math.random() * 999) ;
        operator = pickRandomOperator(["+", "-", "*"]);
        break;
    }

    // Ensure positive subtraction

    if (operator === "-" && num1 < num2) {
      [num1, num2] = [num2, num1]; // Swap values
    }

    // Display question
    let question = `Question ${i}/${numQuestions}: ${num1} ${operator} ${num2} = `;

    // Get user answer
    let answer = prompt(question);

    // Validate answer
    if (isNaN(answer)) {
      alert("Please enter a number.");
       // Decrement counter to repeat the question
     i--;
     continue;
    }

    // Check answer
    let correctAnswer = eval(`${num1} ${operator} ${num2}`); // Use eval cautiously
    if (answer == correctAnswer) {
      alert("Correct answer!");
      score++;
    } else {
      alert(`Wrong answer. Correct answer: ${correctAnswer}`);
    }
  }

  // Display summary message
  let message;
  if (score <= 4) {
    message = "Review your math.";
  } else if (score <= 7) {
    message = "Not bad, but could do better.";
  } else {
    message = "Good job!";
  }
  alert(`Your score: ${score}/${numQuestions}. ${message}`);

  // Option to restart
  if (confirm("Play again?")) {
    playGame();
  }
 /*  if (confirm("CLose the Game")) {
    alert('you have sucessfully quit the game');
  } */
}

// Function to pick a random operator
function pickRandomOperator(operators) {
  return operators[Math.floor(Math.random() * operators.length)];
}

// Start the game
playGame();