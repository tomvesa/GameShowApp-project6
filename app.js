let qwerty = document.querySelector('#qwerty');
let phrase = document.querySelector('#phrase');
let missed = 0;
const resetBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay'); 


// Reset button => Start the game => hide Overlay element
resetBtn.addEventListener('click', () =>{
    overlay.style.display = 'none';
});


qwerty.addEventListener('click', (e) =>{
    console.log(e.target.textContent);

});