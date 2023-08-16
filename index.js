const keyboard = document.querySelector(".keyboard"),
wordShow = document.querySelector(".word-display"),
guessesText = document.querySelector(".guesses-text b");

let currentWord;
let wrongGuessCount = 0, maxGuess = 6,
corrects = [];

for(let i = 97; i <= 122; i++){
    let button = document.createElement("button");
    button.innerHTML = String.fromCharCode(i);
    keyboard.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)))
}

function initGame(button, clickedLetter){
    console.log(button, clickedLetter)
    if(currentWord.includes(clickedLetter)){
        console.log("hi")
        for(let i = 0; i < currentWord.length; i++){
            console.log(i)
            if(currentWord[i] == clickedLetter){
                corrects.push(clickedLetter);
                console.log(corrects)
                wordShow.querySelectorAll("li")[i].innerHTML = clickedLetter;
                wordShow.querySelectorAll("li")[i].classList.add("guessed");
            }
        }
    }else{
        console.log("fuk")
        wrongGuessCount++;
    }
    guessesText.innerHTML = `${wrongGuessCount} / ${maxGuess}`
    if(currentWord.length == corrects.length) return gameOver();
}
function gameOver(){
    setTimeout(() => {
        alert("won")
    }, 300);
}

function getRandomWord(){
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(word, hint)
    let wordDisplay = word.split("").map(() => `<li class="letter"></li>`).join("");
    wordShow.innerHTML = wordDisplay;
    console.log(wordDisplay)
}

getRandomWord();