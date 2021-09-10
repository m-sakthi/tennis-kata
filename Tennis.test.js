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
});

function assignPlayer1Score(times) {
  for (let i = 0; i < times; i++) {
    tennisObj.incrementPlayer1Score();
  }
}