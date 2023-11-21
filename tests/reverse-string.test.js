import reverseString from '../modules/reverse-string';

test('normal string (1)', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

test('normal string (2)', () => {
  expect(reverseString('Dog')).toBe('goD');
});

test('long string', () => {
  expect(reverseString('pneumonoultramicroscopicsilicovolcanoconiosis')).toBe(
    'sisoinoconaclovociliscipocsorcimartluonomuenp'
  );
});

test('single letter string', () => {
  expect(reverseString('O')).toBe('O');
});

test('numbers in string', () => {
  expect(reverseString('2fast4me')).toBe('em4tsaf2');
});

test('empty string', () => {
  expect(reverseString('')).toBe('');
});

test('symbols', () => {
  expect(reverseString('#_%&')).toBe('&%_#');
});
