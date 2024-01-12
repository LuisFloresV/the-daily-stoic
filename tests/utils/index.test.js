const { getRandomInt } = require('../../utils/index');

describe('utils tests', () => {
  it('should return a random int number between 1 to 10', () => {
    const random = getRandomInt(1, 10);
    expect(random).toBeGreaterThanOrEqual(1);
    expect(random).toBeLessThanOrEqual(10);
  });

  it('should return the min number if min and max are the same', () => {
    const random = getRandomInt(1, 1);
    expect(random).toBe(1);
  });
});
