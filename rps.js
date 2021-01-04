const buttons = document.querySelectorAll('input');
let computerScore = 0;
let playerScore = 0;
let scoreCap = 5;

function computerPlay(){
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0){
        computerChoice = "ROCK";
    } else if (computerChoice == 1){
        computerChoice = "PAPER";
    } else{
        computerChoice = "SCISSORS";
    } 
    return computerChoice;
    console.log("CPU" + computerChoice);
}

function disableGame(){
    buttons.forEach(elem => {
        elem.disabled = true
    })
}



function round(playerChoice){
    let computerChoice = computerPlay();
    let result = "";


    if(playerChoice == "ROCK" && computerChoice == "PAPER"){
            computerScore++;
            result = ("You lose<br>" + "Current Score: "+"<br> Player:" + playerScore+"<br> Computer: "+ computerScore);
            
        }else if (playerChoice == "ROCK" && computerChoice == "SCISSORS"){
            playerScore++;
            result = ("You win<br>" + "Current Score: "+"<br> Player:" + playerScore+"<br> Computer: "+ computerScore);
            
        }else if (playerChoice == "ROCK" && computerChoice == "ROCK"){
            result = ("Tie<br>" + "Current Score: "+"<br> Player:" + playerScore+"<br> Computer: "+ computerScore);
        }else if (playerChoice == "PAPER" && computerChoice == "SCISSORS"){
            computerScore++;
            result = ("You lose<br>" + "Current Score: "+"<br> Player:" + playerScore+"<br> Computer: "+ computerScore);
           
        }else if (playerChoice == "PAPER" && computerChoice == "ROCK"){
            playerScore++;
            result = ("You win<br>" + "Current Score: "+"<br> Player:" + playerScore+"<br> Computer: "+ computerScore);
            
        }else if (playerChoice == "PAPER" && computerChoice == "PAPER"){
            result = ("Tie<br>" + "Current Score: "+"<br> Player:" + playerScore+"<br> Computer: "+ computerScore);
        }else if (playerChoice == "SCISSORS" && computerChoice == "ROCK"){
            computerScore++;
            result = ("You lose<br>" + "Current Score: "+"<br> Player:" + playerScore+"<br> Computer: "+ computerScore);
            
        }else if (playerChoice == "SCISSORS" && computerChoice == "PAPER"){
            playerScore++;
            result = ("You win<br>" + "Current Score: "+"<br> Player:" + playerScore+"<br> Computer: "+ computerScore);
            
        }else if (playerChoice == "SCISSORS" && computerChoice == "SCISSORS"){
            result = ("Tie<br>" + "Current Score: "+"<br> Player:" + playerScore+"<br> Computer: "+ computerScore);
        }

        if(computerScore == 5){
            result = ("Computer wins the game with a score of: "+computerScore+ " to "+playerScore);
            disableGame();
        }else if(playerScore == 5){
            result = ("You win the game with a score of: "+playerScore+ " to "+computerScore);
            disableGame();
        }
     document.getElementById('result').innerHTML = result
    }
    
    

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        round(button.value)
    })
})