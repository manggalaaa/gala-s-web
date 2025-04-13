// Fitur Musik
let musicPlayer = document.getElementById("music-player");

function toggleMusic() {
  if (musicPlayer.paused) {
    musicPlayer.play();
  } else {
    musicPlayer.pause();
  }
}

// Fitur Voice Waifu
let waifuVoice = document.getElementById("waifu-voice");

function playWaifuVoice() {
  waifuVoice.play();
}

// Fitur Mini Game
let gameScore = 0;

function startMiniGame() {
  document.getElementById("game-container").style.display = "block";
  gameScore = 0;
  document.getElementById("game-score").innerText = "Score: " + gameScore;
}

function playGame() {
  gameScore++;
  document.getElementById("game-score").innerText = "Score: " + gameScore;
}
