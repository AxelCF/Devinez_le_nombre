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

var ecoute = document.querySelector(".output ul");
ecoute.innerHTML = "";
var greetings = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You're all I want for Christmas",
  "Get well soon",
];

let text = document.querySelector(".guessText");
let textSubmit = document.querySelector(".textSubmit");

textSubmit.addEventListener("click", () => {
  console.log(text.value);
  ecoute.innerHTML = "";
  for (var i = 0; i < greetings.length; i++) {
    var input = greetings[i];
    if (greetings[i].indexOf(text.value) !== -1) {
      var result = input;
      var listItem = document.createElement("li");
      listItem.textContent = result;
      ecoute.appendChild(listItem);
    }
  }
});

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

var list = document.querySelector(".outputfourth ul");
var totalBox = document.querySelector(".outputfourth p");
var total = 0;
list.innerHTML = "";
totalBox.textContent = "";
// number1
let products = [
  "Caleçons:6.99",
  "Chaussettes:5.99",
  "T-shirt:14.99",
  "Pantalons:31.99",
  "Chaussures:23.99",
];

for (let i = 0; i < products.length; i++) {
  // number 2

  // number 3
  let subArray = products[i].split(":");
  let name = subArray[0];
  let price = Number(subArray[1]);
  total += price;

  // number 4

  // number 5
  itemText = name + " - " + price + " €";

  let listItem = document.createElement("li");
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = "Total:" + total.toFixed(2) + "€";

// Top 5 des recherches

let liste = document.querySelector(".outputfive ul");
let searchInput = document.querySelector(".outputfive input");
let searchBtn = document.querySelector(".outputfive button");

liste.innerHTML = "";

let myHistory = [];

searchBtn.onclick = function () {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== "") {
    // number 1
    myHistory.unshift(searchInput.value);
    console.log(myHistory);
    // empty the liste so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    liste.innerHTML = "";

    // loop through the array, and display all the search terms in the liste
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      let listItem = document.createElement("li");
      listItem.textContent = itemText;
      liste.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = "";
    searchInput.focus();
  }
};
