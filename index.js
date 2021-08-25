const handOptions = {
  rock: "assets/Rock.png",
  paper: "assets/Paper.png",
  scissors: "assets/Scissors.png",
};

let SCORE = 0;

const pickUserHand = (hand) => {
  // hide the current page
  let hands = document.querySelector(".hands");
  hands.style.display = "none";
  //show the next page with the hand you picked

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set the user pick
  document.getElementById("userpick").src = handOptions[hand];

  let househand = houseHand();
  referee(hand, househand);
};

const houseHand = () => {
  let hands = ["rock", "paper", "scissors"];
  let househand = hands[Math.floor(Math.random() * 3)];

  document.getElementById("housepick").src = handOptions[househand];

  return househand;
};

const referee = (userHand, houseHand) => {
  if (userHand == "paper" && houseHand == "scissors") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "paper" && houseHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && houseHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && houseHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && houseHand == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "rock" && houseHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && houseHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && houseHand == "rock") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissors" && houseHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
  //show the next page with the hand you picked
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (score) => {
  SCORE = score;
  document.querySelector(".score h1").innerText = score;
};
