// declaring global variables
var humanChoice;
var compScore=1;
var humScore=1;

// for displaying images of choice
function callImgRock(){
  document.getElementById("outputShow").style.backgroundImage = "url('https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png')";
  document.getElementById("outputShow").style.backgroundSize = "100% 100%";
  humanChoice = 1;
  return humanChoice;
}
function callImgPaper(){
  document.getElementById("outputShow").style.backgroundImage = "url('https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png')";
  document.getElementById("outputShow").style.backgroundSize = "100% 100%";
  humanChoice = 2;
  return humanChoice;
}
function callImgScissors(){
  document.getElementById("outputShow").style.backgroundImage = "url('https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-5.jpg')";
  document.getElementById("outputShow").style.backgroundSize = "100% 100%";
  humanChoice = 3;
  return humanChoice;
}



// Choosing computer's option
function comp(){
  var choice = Math.floor(1 + Math.random() * 3);
  if(choice==1){
    document.getElementById("compShow").style.backgroundImage = "url('https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png')";
  }
  else if (choice==2){
    document.getElementById("compShow").style.backgroundImage = "url('https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png')";
  }
  else if (choice==3){
    document.getElementById("compShow").style.backgroundImage = "url('https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-5.jpg')";
  }
  

  // checking and adding points
  if ((humanChoice == 1) && (choice == 3)) {
    document.getElementById("result").innerText = "You win";
    document.getElementById("score").innerText = humScore++;
  }
  else if ((humanChoice == 1) && (choice == 2)) {
    document.getElementById("result").innerText = "Computer wins";
    document.getElementById("scoreComp").innerText = compScore++;
  }
  else if ((humanChoice == 2) && (choice == 1)) {
    document.getElementById("result").innerText = "You win";
    document.getElementById("score").innerText = humScore++;
  }
  else if ((humanChoice == 2) && (choice == 3)) {
    document.getElementById("result").innerText = "Computer wins";
    document.getElementById("scoreComp").innerText = compScore++;
  }
  else if ((humanChoice == 3) && (choice == 2)) {
    document.getElementById("result").innerText = "You win";
    document.getElementById("score").innerText = humScore++;
  }
  else if ((humanChoice == 3) && (choice == 1)) {
    document.getElementById("result").innerText = "Computer wins";
    document.getElementById("scoreComp").innerText = compScore++;
  }
  else {
    document.getElementById("result").innerText = "Draw";
  }


  // checking for any winners
  if(compScore==6){
    document.getElementById("res").innerText = "Computer wins this match!";
    compScore=0;
    humScore=0;
  }
  else if(humScore==6){
    document.getElementById("res").innerText = "You win this match!";
    compScore=0;
    humScore=0;
  }
  else{
    compScore=compScore;
    humScore=humScore;
  }
}

