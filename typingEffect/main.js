//uzyje setTimeout
//opoznie start pisania kazdego slowa


const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.kursor');
const txt = ['Witaj!', 
//implementacjaa
const addLetter = () => {



    let letterIndex = 0;
    spnText.textContent += txt[1][letterIndex]
    letterIndex++;
    console.log(letterIndex);
    setTimeout(addLetter, 100);
};

addLetter();