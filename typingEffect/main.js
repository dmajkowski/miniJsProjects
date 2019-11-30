//uzyj setTimeout
//opoznic start pisania kazdego slowa


const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.kursor');
const txt = ['Witaj!', 'To mój program emitujący pisanie na maszynie!', 'Mam nadzieje, że Ci się podoba! Życzę Ci miłego dnia!'];

//implementacja
const addLetter = () => {



    let letterIndex = 0;
    spnText.textContent += txt[1][letterIndex]
    letterIndex++;
    console.log(letterIndex);
    setTimeout(addLetter, 100);
};

addLetter();