import capitalise from '../modules/capitalise';

it('should be capitalised', () => {
  expect(capitalise('cat')).toBe('Cat');
});

it('should be capitalised (2)', () => {
  expect(capitalise('dog')).toBe('Dog');
});

test('single letter string', () => {
  expect(capitalise('i')).toBe('I');
});

test('already capitalised string', () => {
  expect(capitalise('Hello')).toBe('Hello');
});

test('already capitalised single letter string', () => {
  expect(capitalise('K')).toBe('K');
});

test('empty string', () => {
  expect(capitalise('')).toBe('');
});

test('null value', () => {
  expect(capitalise(null)).toBe('');
});

test('numbers in string', () => {
  expect(capitalise('l337x0r')).toBe('L337x0r');
});

test('number at start of string', () => {
  expect(capitalise('4eva')).toBe('4eva');
});

test('symbol at start of string', () => {
  expect(capitalise('$$$money')).toBe('$$$money');
});
