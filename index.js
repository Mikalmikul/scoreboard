const homePoints = document.getElementById("home-points")
const guestPoints = document.getElementById("guest-points")
const homeTitle = document.getElementById("home-title")
const guestTitle = document.getElementById("guest-title")

let countHome = 0
let countGuest = 0

//function to add points to the home team

function score(team, plusPoints) {
   if (team === "home") {
    countHome += plusPoints
    homePoints.textContent = countHome
    leading()
   }
   else {
    countGuest += plusPoints
    guestPoints.textContent = countGuest
    leading()
   }
}

//0 = 0 + 1, itll return 1. when


//Function for RESTART button, to reset both scores back to 0//

let resetBtn = document.getElementById("reset-btn")

function resetGame() {
    countHome = 0
    countGuest = 0
    homePoints.textContent = countHome
    guestPoints.textContent = countGuest
    leading()
}

// function to compare scores and highlight the leading side

function leading() {
    if (countHome > countGuest) {
        homeTitle.classList.add("leading")
        guestTitle.classList.remove("leading")
    }
    else if (countGuest > countHome) {
        guestTitle.classList.add("leading")
        homeTitle.classList.remove("leading")
    }
    else {
         guestTitle.classList.remove("leading")
         homeTitle.classList.remove("leading")  
    }
}