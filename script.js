let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");

let guessSubmit = document.querySelector(".guessSubmit");
let guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Propositions précédentes: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Bravo, vous avez trouvé le nombre !";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! PERDU !!! Le nombre était " + randomNumber;
    setGameOver();
  } else {
    lastResult.textContent = "Faux !";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Le nombre saisi est trop petit !";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Le nombre saisi est trop grand !";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Recommencer une nouvelle partie";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

var list = document.querySelector(".output ul");
list.innerHTML = "";
var greetings = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You're all I want for Christmas",
  "Get well soon",
];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  if (greetings[i].indexOf("Christmas") !== -1) {
    var result = input;
    var listItem = document.createElement("li");
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}

var list = document.querySelector(".outputsecond ul");
list.innerHTML = "";
var cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];
for (var i = 0; i < cities.length; i++) {
  var input = cities[i];
  let lowerCase = input.toLowerCase();
  let firstLetter = lowerCase[0].toUpperCase();
  let update = lowerCase.replace(lowerCase[0], firstLetter);
  var result = update;
  var listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}

var list = document.querySelector(".outputthird ul");
list.innerHTML = "";
var stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // write your code just below here
  let three = input.slice(0, 3);
  let found = input.indexOf(";");
  let station = input.slice(found + 1);
  let final = three + ": " + station;
  console.log(final);
  var result = final;
  var listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
