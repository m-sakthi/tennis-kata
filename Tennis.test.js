import Tennis from './Tennis';

describe('Tennis', () => {
  let tennisObj;

  beforeEach(() => {
    tennisObj = new Tennis();
  });

  it('should return love all by default', () => {
    expect(tennisObj.currentScore()).toBe('love all');
  });
});