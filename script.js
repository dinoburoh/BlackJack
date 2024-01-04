let cardText = document.getElementById("cards")
let sumText = document.getElementById("sum")
let startGameText = document.getElementById("start-game")
let newCardButton = document.querySelector("#newcardbutton")
let startButton = document.querySelector("#startbutton")
let playerDetail = document.getElementById("player-detail")
let sum = 0, i = 0
let isAlive = false
let hasBlackJack = false
let cards = []

let player = {
    name: "Per",
    chips: 45
}

playerDetail.textContent = player.name + ": $ " + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard > 10)
        return 10
    else if(randomCard === 1)
        return 11
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
    }

    else if (sum == 21) {
        startGameText.textContent = "YOU WON"
        isAlive = false
        hasBlackJack = true
        newCardButton.disabled = "true"
    }

    else {
        isAlive = false
        startGameText.textContent = "YOU LOSE"
        newCardButton.disabled = "true"
    }

}



