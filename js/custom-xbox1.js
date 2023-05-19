let progress = 10;
const progressBar = document.querySelector(".progress-bar .progress");
const category1 = document.querySelector("#category1");
const category2 = document.querySelector("#category2");
const category3 = document.querySelector("#category3");
const category4 = document.querySelector("#category4");
const category5 = document.querySelector("#category5");
const category6 = document.querySelector("#category6");
const category7 = document.querySelector("#category7");
const category8 = document.querySelector("#category8");
const category9 = document.querySelector("#category9");
const category10 = document.querySelector("#category10");

function updateProgressBar() {
  progressBar.style.width = `${progress}%`;
}

function increaseProgress() {
  if (progress < 100) {
    progress += 10;
    updateProgressBar();
    checkButtonStatus();
    if (progress === 20) {
      category1.style.display = "none";
      category2.style.display = "inline-block";
    } else if (progress === 30) {
      category2.style.display = "none";
      category3.style.display = "inline-block";
    } else if (progress === 40) {
      category3.style.display = "none";
      category4.style.display = "inline-block";
    } else if (progress === 50) {
      category4.style.display = "none";
      category5.style.display = "inline-block";
    } else if (progress === 60) {
      category5.style.display = "none";
      category6.style.display = "inline-block";
    } else if (progress === 70) {
      category6.style.display = "none";
      category7.style.display = "inline-block";
    } else if (progress === 80) {
      category7.style.display = "none";
      category8.style.display = "inline-block";
    } else if (progress === 90) {
      category8.style.display = "none";
      category9.style.display = "inline-block";
    } else if (progress === 100) {
      category9.style.display = "none";
      category10.style.display = "inline-block";
    }
  }
}

function decreaseProgress() {
  if (progress > 10) {
    progress -= 10;
    updateProgressBar();
    checkButtonStatus();
    if (progress === 90) {
      category10.style.display = "none";
      category9.style.display = "inline-block";
    } else if (progress === 80) {
      category9.style.display = "none";
      category8.style.display = "inline-block";
    } else if (progress === 70) {
      category8.style.display = "none";
      category7.style.display = "inline-block";
    } else if (progress === 60) {
      category7.style.display = "none";
      category6.style.display = "inline-block";
    } else if (progress === 50) {
      category6.style.display = "none";
      category5.style.display = "inline-block";
    } else if (progress === 40) {
      category5.style.display = "none";
      category4.style.display = "inline-block";
    } else if (progress === 30) {
      category4.style.display = "none";
      category3.style.display = "inline-block";
    } else if (progress === 20) {
      category3.style.display = "none";
      category2.style.display = "inline-block";
    } else if (progress === 10) {
      category2.style.display = "none";
      category1.style.display = "inline-block";
    }
  }
}

function checkButtonStatus() {
  const increaseButton = document.querySelector("#increaseButton");
  const decreaseButton = document.querySelector("#decreaseButton");
  const increaseSVG = document.querySelector("#increaseSVG");
  const decreaseSVG = document.querySelector("#decreaseSVG");

  if (progress >= 100) {
    increaseButton.style.cursor = "not-allowed";
    increaseSVG.setAttribute("fill", "#e0e0e0");
  } else {
    increaseButton.style.cursor = "pointer";
    increaseSVG.setAttribute("fill", "#3C3F3F");
  }

  if (progress <= 10) {
    decreaseButton.style.cursor = "not-allowed";
    decreaseSVG.setAttribute("fill", "#e0e0e0");
  } else {
    decreaseButton.style.cursor = "pointer";
    decreaseSVG.setAttribute("fill", "#3C3F3F");
  }
}

const colorChoice = document.getElementById("colorChoice");
const patternChoice = document.getElementById("patternChoice");

colorChoice.addEventListener("click", selectColor);
patternChoice.addEventListener("click", selectPattern);

function selectColor() {
  colorChoice.classList.add("selected");
  patternChoice.classList.remove("selected");
  // Ajoutez ici le code pour gérer la sélection de la couleur
}

function selectPattern() {
  patternChoice.classList.add("selected");
  colorChoice.classList.remove("selected");
  // Ajoutez ici le code pour gérer la sélection du motif
}

updateProgressBar();
checkButtonStatus();
