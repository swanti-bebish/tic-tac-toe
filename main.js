var isX = true,
 hasWinner = false
function attack(event) {
  var inputBox = event.currentTarget

  if (inputBox.textContent === "" && !hasWinner) {
    if (isX) {
      inputBox.textContent = "X"
      isX = false
      winChecker()
    } else {
      inputBox.textContent = "O"
      isX = true
      winChecker()
    }
  }
}

function winChecker() {
  var box1 = document.getElementById("box1"),
  box2 = document.getElementById("box2"),
  box3 = document.getElementById("box3")
  box4 = document.getElementById("box4"),
  box5 = document.getElementById("box5"),
  box6 = document.getElementById("box6"),
  box7 = document.getElementById("box7"),
  box8 = document.getElementById("box8"),
  box9 = document.getElementById("box9")

  if (box1.textContent == box2.textContent && box2.textContent == box3.textContent && box1.textContent != "") {
    markAsSet(box1, box2, box3)
  } else if (box4.textContent == box5.textContent && box5.textContent == box6.textContent && box4.textContent != "") {
    markAsSet(box4, box5, box6)
  } else if (box7.textContent == box8.textContent && box8.textContent == box9.textContent && box7.textContent != "") {
    markAsSet(box7, box8, box9)
  } else if (box1.textContent == box4.textContent && box4.textContent == box7.textContent && box1.textContent != "") {
    markAsSet(box1, box4, box7)
  } else if (box2.textContent == box5.textContent && box5.textContent == box8.textContent && box2.textContent != "") {
    markAsSet(box2, box5, box8)
  } else if (box3.textContent == box6.textContent && box6.textContent == box9.textContent && box3.textContent != "") {
    markAsSet(box3, box6, box9)
  } else if (box1.textContent == box5.textContent && box5.textContent == box9.textContent && box1.textContent != "") {
    markAsSet(box1, box5, box9)
  } else if (box3.textContent == box5.textContent && box5.textContent == box7.textContent && box3.textContent != "") {
    markAsSet(box3, box5, box7)
  } else if (![box1, box2, box3, box4, box5, box6, box7, box8, box9].map(box => box.textContent != "" ? "true" : "false").includes("false")) {
    for (var i = 1; i <= 9; i++) {
      document.getElementById("box"+i).classList.add("text-success")
      setTimeout(function() {
        for (var i = 1; i <= 9; i++) {
          document.getElementById("box"+i).textContent = ""
          document.getElementById("box"+i).classList.remove("text-success")
       }
      }, 2000)
   }
  }
}

function markAsSet(boxA, boxB, boxC) {
  var boxes = [boxA, boxB, boxC]
  boxes.forEach(function(box) {
    box.classList.add("text-danger")
  })
  hasWinner = true
  setTimeout(function() {
    for (var i = 1; i <= 9; i++) {
      document.getElementById("box"+i).textContent = ""
      document.getElementById("box"+i).classList.remove("text-danger")
      hasWinner = false
   }
  }, 2000)
}

