import { isEven } from '../src/games/even';

describe('isEven', () => {
  test('truthy', () => {
    expect(isEven(58)).toBeTruthy();
    expect(isEven(128)).toBeTruthy();
    expect(isEven(1000)).toBeTruthy();
  });

  test('falsy', () => {
    expect(isEven(77)).toBeFalsy();
    expect(isEven(555)).toBeFalsy();
    expect(isEven(9999)).toBeFalsy();
  });
});
