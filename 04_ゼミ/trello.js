const memo = document.getElementById("memo")
const addButton = document.getElementById("add-button")
const cardsContainer = document.getElementById("cards-container")

addButton.onclick = function() {
  const memoContent = document.createElement("div")
  memoContent.textContent = memo.value
  cardsContainer.append(memoContent)
  memo.value = ""
}
