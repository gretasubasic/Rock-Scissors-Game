// Containing all the code 

const game = () =>{
    let pScore = 0;
    let cScore = 0;


    // Start Game

    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", function(){
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn")

        });

    };

    // Play Match 

    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        // Computer Options 

        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option =>{
            option.addEventListener("click", function(){
                // Computer Choice 
                const computerNumbers = Math.floor(Math.random() * 3) + 1;
                const computerChoice = computerOptions[computerNumbers];

                // Here is where we call compare hands 
                
                compareHands(this.textContent, computerChoice)


                // Update Images 
                playerHand.src = `./imgs/${this.textContent}.png`
                computerHand.src = `./imgs/${computerChoice}.png`
            });
        });

    };

    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    };

    const compareHands = (playerChoice, computerChoice) =>{
        //Update Text 
        const winner = document.querySelector(".winner");
       
        // We are checking for a tie!

        if(playerChoice === computerChoice){
            winner.textContent = "it is a tie";
            return;
        }

        // Check for a Rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player Wins"
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = "Computer Wins"
                cScore++;
                updateScore();
                return;
            }
        }

        // Check For Paper 
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer Wins"
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = "Player Wins"
                pScore++;
                updateScore();
                return;
            }
        }

        // Check For Scissors
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer Wins"
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = "Player Wins"
                pScore++;
                updateScore();
                return;
            }
        }

    }

// Call all the inner functions 
startGame();
playMatch();


};

// start the game function

game();
