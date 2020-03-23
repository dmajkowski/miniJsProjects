class Statistics {
  constructor() {
    this.gameResults = [];
  }

  addGameToStatistics(win, bid) {
    let gameResult = { win: win, bid: bid };
    console.log(gameResult);
    this.gameResults.push(gameResult);
  }

  showGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter(result => result.win);
    let looses = this.gameResults.filter(result => !result.win);
    return [games, wins.length, looses.length];
  }
}

const stats = new Statistics();
