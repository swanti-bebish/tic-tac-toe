var isX = true
function attack(event) {
  var inputBox = event.currentTarget

  if (inputBox.textContent === "") {
    if (isX) {
      inputBox.textContent = "X"
      isX = false
    } else {
      inputBox.textContent = "O"
      isX = true
    }
  }
}