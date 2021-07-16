const memo = document.getElementById("memo")
const addButton = document.getElementById("add-button")
const cardsContainer = document.getElementById("cards-container")

let memos = []

addButton.onclick = function() {
  memos.push(memo.value)
  localStorage.memos = JSON.stringify(memos)

  const memoContent = document.createElement("div")
  memoContent.textContent = memo.value
  const memodelete = document.createElement("button")
  memodelete.textContent = "削除"

  memodelete.onclick = function() {
    memoContent.remove()
    memodelete.remove()
  }

  cardsContainer.append(memoContent)
  cardsContainer.append(memodelete)
  memo.value = ""
}

if (localStorage.memos) {
  const memosJson = localStorage.memos
  memos = JSON.parse(memosJson)

  for (let i = 0; i < memos.length; i++) {
    const div = document.createElement("div")
    div.textContent = memos[i]
    cardsContainer.append(div)
  }
}
console.log(memos)
