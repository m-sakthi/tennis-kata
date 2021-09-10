export default class Tennis {
  constructor() {
    this.player1Score = 0;
  }

  incrementPlayer1Score() {
    this.player1Score += 1;
  }

  currentScore() {
    if (this.player1Score === 1) {
      return 'fifteen love';
    } else if (this.player1Score === 2) {
      return 'thirty love';
    } else if (this.player1Score === 3) {
      return 'forty love';
    } 

    return 'love all';
  }
}