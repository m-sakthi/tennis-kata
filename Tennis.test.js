import Tennis from './Tennis';

let tennisObj;

describe('Tennis', () => {
  beforeEach(() => {
    tennisObj = new Tennis();
  });

  it('should return love all by default', () => {
    expect(tennisObj.currentScore()).toBe('love all');
  });

  it('should return fifteen love', () => {
    assignPlayer1Score(1);
    expect(tennisObj.currentScore()).toBe('fifteen love');
  });

  it('should return thirty love', () => {
    assignPlayer1Score(2);
    expect(tennisObj.currentScore()).toBe('thirty love');
  });

  it('should return forty love', () => {
    assignPlayer1Score(3);
    expect(tennisObj.currentScore()).toBe('forty love');
  });

  it('should return love fifteen', () => {
    assignPlayer2Score(1);
    expect(tennisObj.currentScore()).toBe('love fifteen');
  });

  it('should return love thirty', () => {
    assignPlayer2Score(2);
    expect(tennisObj.currentScore()).toBe('love thirty');
  });

  it('should return love forty', () => {
    assignPlayer2Score(3);
    expect(tennisObj.currentScore()).toBe('love forty');
  });

  it('should return fifteen all', () => {
    assignPlayer1Score(1);
    assignPlayer2Score(1);
    expect(tennisObj.currentScore()).toBe('fifteen all');
  });

  it('should return thirty all', () => {
    assignPlayer1Score(2);
    assignPlayer2Score(2);
    expect(tennisObj.currentScore()).toBe('thirty all');
  });

  it('should return deuce', () => {
    assignPlayer1Score(3);
    assignPlayer2Score(3);
    expect(tennisObj.currentScore()).toBe('deuce');
  });

  it('should return Player1 Advantage', () => {
    assignPlayer1Score(4);
    assignPlayer2Score(3);
    expect(tennisObj.currentScore()).toBe('Player1 Advantage');
  });

  it('should return Player2 Advantage', () => {
    assignPlayer1Score(3);
    assignPlayer2Score(4);
    expect(tennisObj.currentScore()).toBe('Player2 Advantage');
  });

  it('should return Player1 Won', () => {
    assignPlayer2Score(3);
    assignPlayer1Score(5);
    expect(tennisObj.currentScore()).toBe('Player1 Won');
  });

  it('should return Player2 Won', () => {
    assignPlayer1Score(3);
    assignPlayer2Score(5);
    expect(tennisObj.currentScore()).toBe('Player2 Won');
  });
});

function assignPlayer1Score(times) {
  for (let i = 0; i < times; i++) {
    tennisObj.incrementPlayer1Score();
  }
}

function assignPlayer2Score(times) {
  for (let i = 0; i < times; i++) {
    tennisObj.incrementPlayer2Score();
  }
}