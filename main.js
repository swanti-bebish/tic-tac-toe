var isX = true,
 hasWinner = false

function attack(event) {
  xIcon = document.createElement("img")
  oIcon = document.createElement("img")
  userOne = document.getElementById("userOne")
  userTwo = document.getElementById("userTwo")
  Xlabel = document.getElementById("X")
  Olabel = document.getElementById("O")

  xIcon.src = "assets/icons/x.png"
  oIcon.src = "assets/icons/o.png"
  xIconWin = "assets/icons/ox_win.png"
  xIcon.style.cssText = "position: relative; top: -7px;"
  oIcon.style.cssText = "position: relative; top: -7px;"
  var inputBox = event.currentTarget
  
  if (inputBox.innerHTML === "" && !hasWinner) {
    if (isX) {
      inputBox.append(xIcon)
      isX = false
      // userOne.classList.add("text-white")
      // userOne.classList.remove("text-primary")
      // userTwo.classList.add("text-primary")
      // userTwo.classList.remove("text-white")

      // Xlabel.classList.add("text-danger")
      // Xlabel.classList.remove("text-success")
      // Olabel.classList.add("text-success")
      // Olabel.classList.remove("text-danger")

      userTwo.parentElement.parentElement.classList.add("offender")
      userOne.parentElement.parentElement.classList.remove("offender")
      winChecker()
    } else {
      inputBox.append(oIcon)
      isX = true
      // userOne.classList.remove("text-white")
      // userOne.classList.add("text-primary")
      // userTwo.classList.remove("text-primary")
      // userTwo.classList.add("text-white")

      // Xlabel.classList.remove("text-danger")
      // Xlabel.classList.add("text-success")
      // Olabel.classList.remove("text-success")
      // Olabel.classList.add("text-danger")

      userTwo.parentElement.parentElement.classList.remove("offender")
      userOne.parentElement.parentElement.classList.add("offender")
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

  if (box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML && box1.innerHTML != "") {
    markAsSet(box1, box2, box3)
  } else if (box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML && box4.innerHTML != "") {
    markAsSet(box4, box5, box6)
  } else if (box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML && box7.innerHTML != "") {
    markAsSet(box7, box8, box9)
  } else if (box1.innerHTML == box4.innerHTML && box4.innerHTML == box7.innerHTML && box1.innerHTML != "") {
    markAsSet(box1, box4, box7)
  } else if (box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML && box2.innerHTML != "") {
    markAsSet(box2, box5, box8)
  } else if (box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML && box3.innerHTML != "") {
    markAsSet(box3, box6, box9)
  } else if (box1.innerHTML == box5.innerHTML && box5.innerHTML == box9.innerHTML && box1.innerHTML != "") {
    markAsSet(box1, box5, box9)
  } else if (box3.innerHTML == box5.innerHTML && box5.innerHTML == box7.innerHTML && box3.innerHTML != "") {
    markAsSet(box3, box5, box7)
  } else if (![box1, box2, box3, box4, box5, box6, box7, box8, box9].map(box => box.innerHTML != "" ? "true" : "false").includes("false")) {
    for (var i = 1; i <= 9; i++) {
      xIconTie = document.createElement("img"),
      oIconTie = document.createElement("img")
      xIconTie.src = "assets/icons/x_tie.png"
      oIconTie.src = "assets/icons/o_tie.png"
      xIconTie.style.cssText = "position: relative; top: -7px;"
      oIconTie.style.cssText = "position: relative; top: -7px;"
      if (document.getElementById("box"+i).childNodes[0].src.includes("x.png")) {
        document.getElementById("box"+i).innerHTML = ""
        document.getElementById("box"+i).appendChild(xIconTie)
      } else {
        document.getElementById("box"+i).innerHTML = ""
        document.getElementById("box"+i).appendChild(oIconTie)
      }
      setTimeout(function() {
        for (var i = 1; i <= 9; i++) {
          document.getElementById("box"+i).innerHTML = ""
       }
      }, 2000)
   }
  }
}

function markAsSet(boxA, boxB, boxC) {
  var boxes = [boxA, boxB, boxC]
  scored = false
  boxes.forEach(function(box) {
    xIconWin = document.createElement("img")
    oIconWin = document.createElement("img")
    userOneScore = document.getElementById("userOneScore")
    userTwoScore = document.getElementById("userTwoScore")
    xIconWin.src = "assets/icons/x_win.png"
    oIconWin.src = "assets/icons/o_win.png"
    xIconWin.style.cssText = "position: relative; top: -7px;"
    oIconWin.style.cssText = "position: relative; top: -7px;"

    if (box.childNodes[0].src.includes("x.png")) {
      box.innerHTML = ""
      if (!scored) userOneScore.textContent = parseInt(userOneScore.textContent) + 1
      scored = true
      box.appendChild(xIconWin)
    } else if (box.childNodes[0].src.includes("o.png")) {
      box.innerHTML = ""
      if (!scored) userTwoScore.textContent = parseInt(userTwoScore.textContent) + 1
      scored = true
      box.appendChild(oIconWin)
    }
  })
  hasWinner = true
  setTimeout(function() {
    for (var i = 1; i <= 9; i++) {
      document.getElementById("box"+i).innerHTML = ""
      hasWinner = false
   }
  }, 2000)
}

