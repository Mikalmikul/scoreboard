let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let homeTitle = document.getElementById("home-title")
let guestTitle = document.getElementById("guest-title")

let countHome = 0
let countGuest = 0

//function to add points to the home team

function add1PointHome() {
    countHome = countHome + 1
    homePoints.textContent = countHome
    leading()
}

function add2PointsHome() {
    countHome = countHome + 2
    homePoints.textContent = countHome
    leading()
}

function add3PointsHome() {
    countHome = countHome + 3
    homePoints.textContent = countHome
    leading()
}

//function to add points to the home team

function add1PointGuest() {
    countGuest = countGuest + 1
    guestPoints.textContent = countGuest
    leading()
}

function add2PointsGuest() {
    countGuest = countGuest + 2
    guestPoints.textContent = countGuest
    leading()
}

function add3PointsGuest() {
    countGuest = countGuest + 3
    guestPoints.textContent = countGuest
    leading()
}

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