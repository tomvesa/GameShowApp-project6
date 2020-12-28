let qwerty = document.querySelector('#qwerty');
let phrase = document.querySelector('#phrase');
let missed = 0;
const resetBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay'); 
const phrases = [
                 "Dont interrupt me while I am interrupting",
                 "Plans are invitation to disappointment",
                 "I am Dead but it is not so bad",
                 "Pietrisycamollaviadelrechiotemexity",
                 "In the end everything is a gag",
                 "Reality continues to ruin my life",
] //quotes generated from: https://quotes-generator.com/quotes-generator.php, thank you ;)


// Reset button => Start the game => hide Overlay element
resetBtn.addEventListener('click', () =>{
    overlay.style.display = 'none';
});


qwerty.addEventListener('click', (e) =>{
    console.log(e.target.textContent);
    e.target.disabled = true;
    e.target.classList.add('chosen');

});

//generate random phrase from the phrases array
const getRandomPhrase =  (arr) => {
    let maxN = arr.length;
    let arrIndx =  Math.round(Math.random() * maxN);
    return arr[arrIndx];
};

let phraseNotAsArray = getRandomPhrase(phrases);
let phraseAsArray = [...phraseNotAsArray];



const createLetter= (letter) =>{
        const li = document.createElement('li');
        const ul = phrase.firstChild;
             li.textContent = 'Hello';
             phrase.firstChild.appendChild(li);

};