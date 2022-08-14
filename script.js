const messages = [
  "Yes",
  "No",
  "I don't know",
  "Of Course",
  "Indubitably",
  "In your dreams",
];
const message = messages[Math.floor(Math.random() * messages.length)];
const clickBtn = document.getElementById("click");
const resetBtn = document.getElementById("Reset");

const QuestionBallInput = document.querySelector("input[type=text]");

const resultDiv = document.getElementById("result");

clickBtn.addEventListener("click", function () {
  if (showRandomMassage) {
    resultDiv.innerHTML = message;
  }
  if (QuestionBallInput.value == "") {
    resultDiv.innerHTML = "";
    alert("Enter Question ");
  }
});

resetBtn.addEventListener("click", function () {
  if (resetAnswer) {
    location.reload(" ");
  }
});

function showRandomMassage() {
  const messages = [
    "Yes",
    "No",
    "I don't know",
    "Of Course",
    "Indubitably",
    "In your dreams",
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
}

function resetAnswer() {
  resultDiv.innerHTML = "";
}
