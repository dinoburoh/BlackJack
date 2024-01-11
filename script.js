const cardText = document.getElementById("cards")
const sumText = document.getElementById("sum")
const startGameText = document.getElementById("start-game")
const newCardButton = document.querySelector("#newcardbutton")
const startButton = document.querySelector("#startbutton")
const resetButton = document.querySelector("#resetbutton")
let playerDetail = document.getElementById("player-detail")
let sum = 0, i = 0
let isAlive = false
let hasBlackJack = false
let cards = []

newCardButton.disabled = true

let player = {
    name: "Per",
    chips: 45
}

resetButton.addEventListener("click", function () {
    i = 0, sum = 0
    hasBlackJack = false, isAlive = false
    cards = []
    sumText.textContent = "Sum: " 
    cardText.textContent = "Cards: " 
    startGameText.textContent = "Want to play a round ?"
    startButton.disabled = false
    newCardButton.disabled = true
    // renderGame()
})

playerDetail.textContent = player.name + ": $ " + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10)
        return 10
    else if (randomCard === 1) {
        if (sum == 20)
            return 1
        else
            return 11
    }
    else
    return randomCard
}

function newCard() {
    cards.push(getRandomCard())
    renderGame()
}


function startGame() {
    isAlive = true
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    renderGame()
}

function renderGame() {
    while (i < cards.length) {
        cardText.textContent += cards[i] + " "
        sum += cards[i]
        i++
    }

    console.log(sum)
    sumText.textContent = "Sum: " + sum

    if (sum < 21 && isAlive) {
        startGameText.textContent = "Do you want to draw a new card? "
        startButton.disabled = true
        newCardButton.disabled = false
    }

    else if (sum == 21) {
        startGameText.textContent = "YOU WON"
        hasBlackJack = true
        newCardButton.disabled = true
    }

    else {
        isAlive = false
        startGameText.textContent = "YOU LOSE"
        newCardButton.disabled = "true"
    }

}



