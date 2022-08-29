import {replaceCharacters, setNumbersWithCommas} from "./helpers";

beforeAll(() => {
  if (typeof String.prototype.replaceAll === "undefined") {
    String.prototype.replaceAll = function (match, replace) {
      //@ts-ignore
      return this.replace(new RegExp(match, 'g'), () => replace);
    }
  }
})

describe('replace characters function',  () => {
  test('check is letter removed', () => {
    const testData = '11a'
    expect(replaceCharacters(testData)).toBeDefined()
    expect(replaceCharacters(testData)).toEqual(11)
    expect(replaceCharacters(testData)).toBeTruthy()

  })
  test('check is character is removed', () => {
    const testData = '1$'
    expect(replaceCharacters(testData)).toBeDefined()
    expect(replaceCharacters(testData)).toBeNaN()
  })
  test('only letters case', () => {
    expect(replaceCharacters('aaa')).toBeDefined()
    expect(replaceCharacters('aaa')).toEqual(0)
    expect(replaceCharacters('aaa')).toBeFalsy()
  })
  test('remove commas', () => {
    expect(replaceCharacters('11111')).toBeDefined()
    expect(replaceCharacters('111,111')).toEqual(111111)
    expect(replaceCharacters('11111')).toBeTruthy()
  })
});

describe('setNumbersWithCommas function',  () => {
  test('transform string with commas', () => {
    expect(setNumbersWithCommas('111111')).toEqual('111,111')
  })
  test('Zero value', () => {
    expect(setNumbersWithCommas('0')).toEqual('0')
  })
  test('Negative value', () => {
    expect(setNumbersWithCommas('-11111')).toEqual('11,111')
  })
});
