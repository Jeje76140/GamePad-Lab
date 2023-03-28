let progress = 10;
const progressBar = document.querySelector(".progress-bar .progress");

function updateProgressBar() {
  progressBar.style.width = `${progress}%`;
}

function increaseProgress() {
  if (progress < 100) {
    progress += 10;
    updateProgressBar();
    checkButtonStatus();
  }
}

function decreaseProgress() {
  if (progress > 10) {
    progress -= 10;
    updateProgressBar();
    checkButtonStatus();
  }
}

function checkButtonStatus() {
  const increaseButton = document.querySelector("#increaseButton");
  const decreaseButton = document.querySelector("#decreaseButton");

  if (progress >= 100) {
    increaseButton.style.cursor = "not-allowed";
  } else {
    increaseButton.style.cursor = "pointer";
  }

  if (progress <= 10) {
    decreaseButton.style.cursor = "not-allowed";
  } else {
    decreaseButton.style.cursor = "pointer";
  }
}
