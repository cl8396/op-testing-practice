import caesarCipher from '../modules/caesar-cipher';

test('Regular conditions, lowercase', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
});

test('Regular conditions, lowercase (2)', () => {
  expect(caesarCipher('world', 1)).toBe('xpsme');
});

test('Wrapping', () => {
  expect(caesarCipher('zebra', 5)).toBe('ejgwf');
});

test('Wrapping, uppercase', () => {
  expect(caesarCipher('ZEBRA', 5)).toBe('EJGWF');
});

test('Wrapping, mixed cases', () => {
  expect(caesarCipher('HelloZebra', 8)).toBe('PmttwHmjzi');
});

test('Uppercase', () => {
  expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
});

test('Commas', () => {
  expect(caesarCipher('Hello,Zebra', 1)).toBe('Ifmmp,Afcsb');
});

test('Spaces', () => {
  expect(caesarCipher('hello world', 1)).toBe('ifmmp xpsme');
});

test('Punctuation and mixed cases', () => {
  expect(caesarCipher('Hello. Zebra!?', 1)).toBe('Ifmmp. Afcsb!?');
});
