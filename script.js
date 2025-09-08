function fullgame(){
let humanChoice;
let computerChoice;
let num;
let winner;
function getcomputerChoice(){
    let choice
num = Math.floor(Math.random()*3);
if (num == 0){
    choice="Rock"
}
else if(num == 1){
choice="Paper"
}
else{
    choice="Scissors"
}
return choice;
}
computerChoice= getcomputerChoice()
console.log("Computer chose",computerChoice)
function gethumanChoice(){
let choice;
let input = prompt("Rock,Paper or Scissors");
choice=input.toLowerCase();
return choice;
}
humanChoice=gethumanChoice()
console.log("You chose", humanChoice)
function game(){
    let game;
if (computerChoice == "Rock" && humanChoice=="rock" ||computerChoice == "Scissors" && humanChoice=="scissors" || computerChoice == "Paper" && humanChoice=="paper" ){
    game="tied"
}

else if (computerChoice == "Rock" && humanChoice=="scissors" ||computerChoice == "Scissors" && humanChoice=="paper" || computerChoice == "Paper" && humanChoice=="rock" ){
    game="compwon"
}
else if (computerChoice == "Rock" && humanChoice=="paper" ||computerChoice == "Scissors" && humanChoice=="rock" || computerChoice == "Paper" && humanChoice=="scissors" ){
    game="usrwon"
}
return game;
}
winner=game()
function winnerAnnouncement(){
    if (winner == "tied"){
        alert("Haha! The Game was tied. The Computer chose " +humanChoice +" too.")
}
  else  if (winner == "usrwon"){
        alert("Wow! You won the game. The Computer chose "+computerChoice)
}

  else  if (winner == "compwon"){
        alert("OOPS! The computer won. It chose "+ computerChoice)
}


}
winnerAnnouncement()

}
for(let i=0; i<=100;i++){
    fullgame()
}
