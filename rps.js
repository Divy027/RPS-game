//Model
 const ComputerChoice = () =>{  // generate a random choice by bot
    const choices = ['Rock', 'Paper', 'Scissor'];
    const number = Math.floor(Math.random() *3);
    const computerChoice = choices[number];
    return computerChoice;
    
}

const getResult = (computerChoice , playerChoice) => {
    console.log (playerChoice,computerChoice);
    let score
    // if player wins
    if (playerChoice === 'Rock' && computerChoice === 'Scissor' ){
        score = 1;
    }
    else if (playerChoice === 'Paper' && computerChoice === 'Rock' ){
        score = 1;
    }
    else if (playerChoice === 'Scissor' && computerChoice ==='Paper' ){
        score = 1;
    }
    else if (playerChoice === computerChoice){ // draw
        score = 0;
    }
    // if computer wins
    else {     
        score = -1;
    }
    console.log(score);
    return score;

}

//controller
const OnclickButton = (playerChoice) => {
    const computerChoice = ComputerChoice();

    const result = getResult(computerChoice, playerChoice.value ); // playerChoice.value = value of button element 
    ShowResult(result, computerChoice, playerChoice.value);
}


//View
const play = () => {
    let rpsButton = document.querySelectorAll('.rpsButtons');
    console.log (rpsButton); 
    rpsButton.forEach(button =>{
      button.onclick =() => OnclickButton(button);  // sending each button as a parameter

    });

}

const ShowResult = (score , computerChoice, playerChoice) => {
    const scoreBox = document.getElementById('score');
    scoreBox.innerHTML =  'score ='+ ' ' + score;

    const ansBox = document.getElementById('opponent-Box');
    ansBox.innerHTML = playerChoice + ' ' + 'vs' +' ' + computerChoice;

    const resultBox = document.getElementById('result');
    if (score === 1){
        resultBox.innerHTML = 'You Win !' ;
    }
    else if(score === -1){
        resultBox.innerHTML = 'You Lose !';
    }
    else{
        resultBox.innerHTML = 'It is Draw !';
    }
}

const end = ()=>{
    const scoreBox = document.getElementById('score');
    const ansBox = document.getElementById('opponent-Box');
    const resultBox = document.getElementById('result');

    scoreBox.innerHTML = 'click above button to play again ;) ';
    ansBox.innerHTML = 'The End ;(';
    resultBox.innerHTML = '';
}
play();
