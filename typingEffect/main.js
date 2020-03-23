//uzyje setTimeout
//opoznie start pisania kazdego slowa


const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.kursor');
const txt = ['Witaj!', 'To jest moj pierwszy projekt, gdzie nauczyłem się efektu pisania na maszynie', 'Życzę Ci miłego dnia!'];
let letterIndex = 0;
let wordIndex = 0;

//implementacjaa
const addLetter = () => {

    if(spnText.textContent != txt[wordIndex]){

        spnText.textContent += txt[wordIndex][letterIndex]
        letterIndex++;
        const letterTimeout = setTimeout(addLetter, 300);





        // if(letterIndex > txt[0].length-1){
        //     clearTimeout(letterTimeout);
        // }

    }else {
        wordIndex++;
        console.log(wordIndex);
    };
};

addLetter();

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
};

setInterval(cursorAnimation, 400);