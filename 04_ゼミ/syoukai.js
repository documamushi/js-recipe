const button0 = document.getElementById("button0")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const question = document.getElementById("question")

const quizSet = [
  { Q: "好きな食べ物は何でしょう？", A: ["いちご", "チョコ", "バナナ"] },
  { Q: "好きなスポーツは何でしょう？", A: ["サッカー", "バスケ", "野球"] },
]

const setQuiz = function() {
  question.textContent = quizSet[0].Q
}

button0.onclick = setQuiz
