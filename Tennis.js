export default class Tennis {
  constructor() {
    this.player1Score = 0;
    this.player2Score = 0;
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

  incrementPlayer2Score() {
    this.player2Score += 1;
  }

  currentScore() {
    if (this.player1Score !== this.player2Score) {
      if ((this.player1Score > 3 || this.player2Score > 3) && this.hasAdvantage()) {
        return `${this.advPlayer()} Advantage`;
      }

      return `${this.scores[this.player1Score]} ${this.scores[this.player2Score]}`;
    }

    if (this.player1Score >= 3 || this.player2Score >= 3) {
      return 'deuce'
    }

    return `${this.scores[this.player1Score]} all`;
  }

  advPlayer() {
    return this.player1Score > this.player2Score ? 'Player1' : 'Player2';
  }

  hasAdvantage() {
    return (Math.abs(this.player1Score - this.player2Score) === 1);
  }

}