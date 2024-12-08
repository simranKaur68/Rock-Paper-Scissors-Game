let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let paraMsg = document.querySelector("#msg");
let userScoreBoard = document.querySelector("#you");
let compScoreBoard = document.querySelector("#comp");


const drawGame = () =>{
    paraMsg.innerText = "Game Draw!! Play Again.";
    paraMsg.style.backgroundColor = "#2f5061";
};


const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const ranIndx = Math.floor(Math.random()*3);
    return options[ranIndx];
};


const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScoreBoard.innerText = userScore;
        paraMsg.innerText = "You Win!!";
        paraMsg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreBoard.innerText = compScore;
        paraMsg.innerText = "You lose! Computer Wins";
        paraMsg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
     let compChoice = genCompChoice();
     if(userChoice === compChoice){
         drawGame();
        
     }
     else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "scissors" ? true : false;
        }
        else if(userChoice === "scissors"){
            userWin = compChoice === "paper" ? true : false;
        }
        else{
            userWin = compChoice === "rock" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
     }
};


choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});