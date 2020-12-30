let qwerty = document.querySelector('#qwerty');
let phrase = document.querySelector('#phrase');
let missed = 5;
let matchCount = 0;
let round = 0;
const hearts = document.querySelectorAll('.tries');
const resetBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay'); 
let phraseLi
const phrases = [
                 ["Dont interrupt me while I am interrupting", "Winston Churchil"],
                 ["Humor is reason gone mad","Groucho Marx"],
                 ["A goal without a plan is just a wish", "Antoine de Saint-Exupéry"],
                 ["I am Dead but it is not so bad","Isaac Marion"],
                 ["Time is an illusion Lunchtime doubly so","Douglas Adams"],
                 ["In the end everything is a gag", "Charlie Chaplin"],
                 ["Monkeys cant talk stupid","Jeff Kinney"],
] //quotes generated from: https://quotes-generator.com/quotes-generator.php, thank you ;)

//generate random phrase from the phrases array
function getRandomPhrase(arr) {
    let maxN = arr.length - 1;
    let arrIndx = Math.floor(Math.random() * maxN);
    console.log(arrIndx);
    return arr[arrIndx];
}



function createPhraseArrs() {
    let phraseArr = getRandomPhrase(phrases);
    let phraseNotAsArray = phraseArr[0];
    let author = phraseArr[1];
    let phraseAsArray = [...phraseNotAsArray];
    let phraseArrayNoSpace = phraseAsArray.filter(item => item !== " ");
    return { phraseAsArray, phraseArrayNoSpace, phraseNotAsArray, author };
}

//function to create LI element with a letter attribute passed in
// if space then create space Li element
function createLetter(letter) {
    const li = document.createElement('li');
    const ul = phrase.firstElementChild;
    li.textContent = letter.toUpperCase();
    ul.appendChild(li);

    if (letter == " ") {
        li.classList.add('space');
    } else {
        li.classList.add('letter');
        li.style.transition = 'all 2s';

    }

}
let phraseArrs = {};
//create a letter element for every item in a phrase array

//select all LI elements from the phrase 


// Reset button => Start the game => hide Overlay element
resetBtn.addEventListener('click', () =>{
    overlay.style.display = 'none';
    // getRandomPhrase(phrases);
    phraseArrs = createPhraseArrs();
    createLetterSection(phraseArrs.phraseAsArray);
    return  phraseLi = document.querySelectorAll('#phrase li');
});

qwerty.addEventListener('click', (e) =>{
    let letter = e.target.textContent;
    //lettercount check on how many times the letter appears in a phrase
    let letterCount = 0;
   
   if(e.target.tagName ==='BUTTON'){
       disableKeybordLetter(e.target)
    //2. check phrase and let a letter show in a phrase section if it match
    letterCount = letterLoop(letterCount, letter);
    //3. if selected letter has 0 match => withdraw life (count and heart)
    if(letterCount === 0){
            missed--;
                //console.log(missed);
            removeLifeIcon(hearts,missed);
    }}



    setTimeout(checkWin, 500, matchCount);
    checkLost(missed);
    
    


});

function reduceLifeCount(count) {
    return count--;
}

function removeLifeIcon(icon, count) {
    icon[missed].style.display = 'none';
}

function letterLoop(letterCount, letter) {
    for (let i = 0; i < phraseArrs.phraseAsArray.length; i++) {
        letterCount = countLetterMatch(letter, i, letterCount);
    }
    return letterCount;
}

function countLetterMatch(letter, i, letterCount) {
    if (letter === phraseArrs.phraseAsArray[i].toLowerCase()) {
        phraseLi[i].classList.add('show');
        matchCount++;
        letterCount++;
    }
    return letterCount;
}

function createLetterSection(arr) {
    for (let i = 0; i < arr.length; i++) {
        createLetter(arr[i]);
    }
}

function checkWin (count){

    if(phraseArrs.phraseArrayNoSpace.length === count){
       resetBtn.textContent = 'Start new Game?'; 
       overlay.style.display = 'flex';
       overlay.classList = 'win';
       overlay.querySelector('.title').innerHTML = `Congratulations,<br> You have won!!!`
       round += 1;
      
       let p = document.createElement('p');
       p.innerHTML = `Quotation round ${round}: <strong><cite>${phraseArrs.phraseNotAsArray}.</cite></strong><br> by ${phraseArrs.author}`;
       resetBtn.insertAdjacentElement("afterend", p);
       resetGame();
       //getRandomPhrase(phrases);
       

    }

}

function checkLost (lCount){

    if(lCount === 0){
       overlay.style.display = 'flex';
       overlay.classList = 'lose'
       overlay.querySelector('.title').innerHTML = `You Lost!!!`
       round += 1;

       let p = document.createElement('p');
       p.innerHTML = `Correct answer round ${round}: <strong><cite>${phraseArrs.phraseNotAsArray}.</cite></strong><br> Quotation by ${phraseArrs.author}`;
       resetBtn.insertAdjacentElement("afterend", p); 
        resetGame();

    }

}

function disableKeybordLetter(e){
    e.disabled = true;
    e.classList.add('chosen');
}

function removeLife(index, icon){
    return icon[index].style.display = 'none';
}

function showLifeIcons(icons){
    return icons.forEach(icon => icon.style.display = 'inline-block');
}

function resetGame(){
    
    missed = 5;
    matchCount = 0;
    showLifeIcons(hearts);
    removeOldPhraseLetters(phrase.firstElementChild)
    qwerty.querySelectorAll('button').forEach(item => {
        item.classList = '';
        item.disabled = false;
        });
        phraseLi = [];
        // phraseArr = "";
        // phraseNotAsArray = "";
        // author = "";
        // phraseArrayNoSpace = [];    
        // phraseAsArray = [];
    }

function removeOldPhraseLetters(whereFrom){
    while(whereFrom.lastElementChild){
        whereFrom.removeChild(whereFrom.lastElementChild);
    }
}


