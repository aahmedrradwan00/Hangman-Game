const letters = "abcdefghijklmnopqrstuvwxyz";

let letteraArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

letteraArray.forEach((letter) => {
  let span = document.createElement("span");

  let theLetter = document.createTextNode(letter);

  span.appendChild(theLetter);

  span.className = "letter-box";

  lettersContainer.appendChild(span);
});

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

let allKeys = Object.keys(words);

// console.log(allKeys);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValue = randomPropValue[randomValueNumber];

document.querySelector(".category span").innerHTML = randomPropName;

let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomValue);

lettersAndSpace.forEach((letter) => {
  let emptySpan = document.createElement("span");

  if (letter === " ") {
    emptySpan.className = "with-space";
  }

  lettersGuessContainer.appendChild(emptySpan);
});

let gussSpan = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    let theClickedLetter = e.target.innerHTML.toLowerCase();
    let theChosenWord = Array.from(randomValue.toLowerCase());
    theChosenWord.forEach((wordsLetter, wordindex) => {
      if (theClickedLetter === wordsLetter) {
        theStatus = true;

        gussSpan.forEach((span, spanIndex) => {
          if (wordindex === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });

    if (theStatus === false) {
      wrongAttempts++;
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      if (wrongAttempts === 8) {
        endGame();

        lettersContainer.classList.add("finished");
      }
    }
  }
});

function endGame() {
  let div = document.createElement("div");

  let divText = document.createTextNode(
    `Game Over, The Word Is ${randomValue}`
  );

  div.appendChild(divText);

  div.className = "popup";

  document.body.appendChild(div);
}
