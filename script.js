```javascript
const questions = [
  {
    question: "What's your favorite type of game?",
    answers: ["🎮 Video games", "🏀 Sports", "🧩 Puzzle games", "🎲 Board games"]
  },
  {
    question: "What do you enjoy doing?",
    answers: ["🎨 Creating", "🎵 Music", "💻 Technology", "📚 Reading"]
  },
  {
    question: "Pick a vibe:",
    answers: ["😂 Funny", "😎 Chill", "⚡ Energetic", "🧠 Curious"]
  }
];

let currentQuestion = 0;
let choices = [];

function startMatch() {
  document.querySelector("main .card").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  currentQuestion = 0;
  choices = [];

  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];

  document.getElementById("question").textContent = question.question;

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.textContent = answer;
    button.className = "answer";

    button.onclick = () => chooseAnswer(index);

    answers.appendChild(button);
  });
}

function chooseAnswer(index) {
  choices.push(index);

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const names = [
    "Mystery Match",
    "Pixel",
    "Nova",
    "Echo"
  ];

  const randomName = names[Math.floor(Math.random() * names.length)];

  document.getElementById("matchName").textContent = randomName;

  document.getElementById("matchInfo").textContent =
    "You have some interests in common! Remember to keep personal information private.";
}

function restart() {
  document.getElementById("result").classList.add("hidden");
  document.querySelector("main .card").classList.remove("hidden");
}
```
