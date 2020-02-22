import { isPrime } from '../src/games/prime';

describe('isPrime', () => {
  test('truthy', () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(17)).toBeTruthy();
    expect(isPrime(313)).toBeTruthy();
  });

  test('falsy', () => {
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(200)).toBeFalsy();
  });
});
