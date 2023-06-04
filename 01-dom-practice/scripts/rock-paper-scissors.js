const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function updateStats() {
  document.querySelector(
    ".js-stats"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
updateStats();

function getComputerMove() {
  let rand = Math.ceil(3 * Math.random());
  let computerMove = "";
  if (rand === 1) {
    computerMove = "Rock";
  } else if (rand === 2) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
  return computerMove;
}

function getResult(playerMove, computerMove) {
  let result = "";
  if (
    (playerMove === "Rock" && computerMove === "Paper") ||
    (playerMove === "Paper" && computerMove === "Scissors") ||
    (playerMove === "Scissors" && computerMove === "Rock")
  ) {
    result = "You lose.";
    score.losses++;
  } else if (playerMove === computerMove) {
    result = "Tie.";
    score.ties++;
  } else {
    result = "You win.";
    score.wins++;
  }
  updateStats();
  return result;
}