let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let paraMsg = document.querySelector("#msg");
let userScoreBoard = document.querySelector("#you");
let compScoreBoard = document.querySelector("#comp");
let reset = document.querySelector(".reset-btn");
let dropButton = document.querySelector(".drop-btn");
let dropContent  = document.querySelector(".drop-content");


dropButton.addEventListener("click",()=>{
   dropContent.classList.toggle("drop");
})

reset.addEventListener("click",()=>{
    resetGame();
})

const resetGame = ()=>{
    userScore = 0;
    compScore = 0;
    userScoreBoard.innerText = userScore;
    compScoreBoard.innerText = compScore;
    paraMsg.innerText = "Play your move";
    paraMsg.style.backgroundColor = "#4297a0";
}

const drawGame = () =>{
    paraMsg.innerText = "Game Draw!! Play Again.";
    paraMsg.style.backgroundColor = "#2f5061";
};


const createCompChoice = () =>{
    const options = ["wizard","dragon","knight"];
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
     let compChoice = createCompChoice();
     if(userChoice === compChoice){
         drawGame();
        
     }
     else{
        let userWin = true;
        if(userChoice === "wizard"){
            userWin = compChoice === "dragon" ? true : false;
        }
        else if(userChoice === "dragon"){
            userWin = compChoice === "knight" ? true : false;
        }
        else{
            userWin = compChoice === "wizard" ? true : false;
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