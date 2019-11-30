const gameSummary = {
    numbers: 0,
    wins: 0,
    looses: 0,
    draws: 0
};

const game = {
    playerHand: null,
    aiHand: null
};

const hands = [...document.querySelectorAll('.select-photos img')];

//Wybieram rękę
function handSelection() {
    game.playerHand = this.dataset.option;
    console.log(this.dataset.option);
    hands.forEach(hand => {
        hand.style.boxShadow = '';
    });
    this.style.boxShadow = '0 0 0 4px yellow'
};

//Funkcja losujaca wybór komputera

function computerChoice() {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
};

//funkcja sprawdzająca kto wygrał
function checkResult(player, ai) {
    if (player == ai) {
        console.log('remis');
        return 'draw';
    } else if ((player === 'paper' && ai === 'rock') || (player === 'rock' && ai === 'scissors') || (player === 'scissors' && ai === 'paper')) {
        console.log('User win!');
        return 'win';
    } else {
        console.log('Computer wins!');
        return 'loss';
    };
};

//funkcja publikujaca wynik
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = 'Zwycięstwo!'
    } else if (result === 'loss') {
        document.querySelector('p.looses span').textContent = ++gameSummary.looses;
        document.querySelector('[data-summary="who-win"]').textContent = 'Porażka'
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis'
    }
};

//funkcja resetująca
function endGame() {
    document.querySelector(`[data-option='${game.playerHand}']`).style.boxShadow = "";
    game.playerHand = null;
};

//funkcja sterująca
function startGame() {
    if (!game.playerHand) return alert('WYBIERZ DŁOŃ!');
    game.aiHand = computerChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
};



hands.forEach(hand => {
    hand.addEventListener('click', handSelection);
});

document.querySelector('.start').addEventListener('click', startGame);