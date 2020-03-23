class Game {
  constructor(start) {
    this.stats = new Statistics();
    this.wallet = new Wallet(start);
    document
      .getElementById("start")
      .addEventListener("click", this.startGame.bind(this));
    this.spanWallet = document.querySelector(".panel span.wallet");
    this.boards = document.querySelectorAll("div.color");
    this.inputBid = document.getElementById("bid");
    this.spanResult = document.querySelector(".score span.result");
    this.spanGames = document.querySelector(".score span.number");
    this.spanWins = document.querySelector(".score span.win");
    this.spanLosses = document.querySelector(".score span.loss");
    this.render();
  }

  render(
    colors = ["grey", "grey", "grey"],
    result = "",
    money = this.wallet.getWalletValue(),
    stats = [0, 0, 0],
    bid = 0,
    wonMoney = 0
  ) {
    this.boards.forEach((board, index) => {
      board.style.backgroundColor = colors[index];
    });

    if (result) {
      result = `Wygrałeś ${wonMoney}$ !`;
    } else if (!result && result !== "") {
      result = `Przegrałeś ${bid}$ !`;
    }
    this.spanResult.textContent = result;

    this.spanWallet.textContent = money;

    this.spanGames.textContent = stats[0];

    this.spanWins.textContent = stats[1];

    this.spanLosses.textContent = stats[2];
  }
  startGame() {
    if (this.inputBid.value < 1) return alert("Podaj stawkę większą niż 1!");
    const bid = Math.floor(this.inputBid.value);

    if (!this.wallet.checkCanPlay(bid)) {
      return alert(
        "Masz za mało środków lub podana została nie prawodłowa wartość"
      );
    }

    this.wallet.changeWallet(bid, "-");

    this.draw = new Draw();
    const colors = this.draw.drawResult();
    const win = Result.checkWinner(colors);
    const wonMoney = Result.moneyWonInGame(win, bid);
    this.wallet.changeWallet(wonMoney);
    this.stats.addGameToStatistics(win, bid);

    this.render(
      colors,
      win,
      this.wallet.getWalletValue(),
      this.stats.showGameStatistics(),
      bid,
      wonMoney
    );
  }
}
