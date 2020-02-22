import { getGreatestCommonDivisor } from '../src/games/gcd';

describe('getGreatestCommonDivisor', () => {
  test('gcd', () => {
    expect(getGreatestCommonDivisor(180, 150)).toEqual(30);
    expect(getGreatestCommonDivisor(33, 99)).toEqual(33);
    expect(getGreatestCommonDivisor(48, 12)).toEqual(12);
    expect(getGreatestCommonDivisor(48, 92)).toEqual(4);
    expect(getGreatestCommonDivisor(20, 53)).toEqual(1);
  });
});
