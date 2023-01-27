const totalScore = {
  computerScore : 0,
  playerScore : 0
}


function getComputerChoice() {
  const rpsChoice = ['Rock','Paper','Scissors']
  const random =  Math.floor(Math.random() * rpsChoice.length)
  return rpsChoice[random]
}


function getResult(playerChoice, computerChoice) {

let score;
if(playerChoice == computerChoice){
  score = 0
}else if(playerChoice == "Rock" && computerChoice=="Scissorss"){
  score = 1
}else if(playerChoice == "Paper" && computerChoice=="Rock"){
  score = 1
}else if(playerChoice == "Scissors" && computerChoice=="Paper"){
  score = 1
}else{
  score = -1
}

return score
}


function showResult(score, playerChoice, computerChoice) {

const playerSCoreDiv = document.getElementById('player-score')
const handsDiv =  document.getElementById('hands')
const resultDiv = document.getElementById('result')

if(score == 0){
  resultDiv.innerText = "It's a tie"
}else if(score == 1){
  resultDiv.innerText = "You won"
}else{
  resultDiv.innerText = "You lost"
}

handsDiv.innerText =  `👱 ${playerChoice} vs 🤖 ${computerChoice}`

playerSCoreDiv.innerText =  `Your score : ${(totalScore['playerScore'])}`
}


function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()

  const score = getResult(playerChoice,computerChoice)
  totalScore['playerScore'] += score
  showResult(score, playerChoice, computerChoice)

}



function playGame() {
  
  const rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })


  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)


}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {

totalScore['playerScore'] = 0
totalScore['computerScore'] = 0


const playerScore = document.getElementById('player-score')
const hands = document.getElementById('hands')
const result = document.getElementById('result')


playerScore.innerText = ''
hands.innerText = ''
result.innerText = ''
}

playGame()