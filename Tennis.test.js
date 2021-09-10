import Tennis from './Tennis';

describe('Tennis', () => {
  let tennisObj;

  beforeEach(() => {
    tennisObj = new Tennis();
  });

  it('should return love all by default', () => {
    expect(tennisObj.currentScore()).toBe('love all');
  });

  it('should return fifteen love', () => {
    tennisObj.incrementPlayer1Score();
    expect(tennisObj.currentScore()).toBe('fifteen love');
  });

  it('should return thirty love', () => {
    tennisObj.incrementPlayer1Score();
    tennisObj.incrementPlayer1Score();
    expect(tennisObj.currentScore()).toBe('thirty love');
  });

  it('should return thirty love', () => {
    tennisObj.incrementPlayer1Score();
    tennisObj.incrementPlayer1Score();
    tennisObj.incrementPlayer1Score();
    expect(tennisObj.currentScore()).toBe('forty love');
  });
});