export default class Tennis {
  constructor() {
    this.player1Score = 0;
    this.scores = {
      0: 'love',
      1: 'fifteen',
      2: 'thirty',
      3: 'forty'
    };
  }

  incrementPlayer1Score() {
    this.player1Score += 1;
  }

  currentScore() {
    if (this.player1Score > 0) {
      return `${this.scores[this.player1Score]} love`;
    }

    return 'love all';
  }
}