import calculator from '../modules/calculator';

test('add function', () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(8, 8)).toBe(16);
});

test('subtract function', () => {
  expect(calculator.subtract(1, 1)).toBe(0);
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.subtract(8, 7)).toBe(1);
});

test('multiply function', () => {
  expect(calculator.multiply(1, 1)).toBe(1);
  expect(calculator.multiply(4, 2)).toBe(8);
  expect(calculator.multiply(8, 7)).toBe(56);
});

test('divide function', () => {
  expect(calculator.divide(1, 1)).toBe(1);
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.divide(8, 2)).toBe(4);
});

test('Error thrown if no args provided', () => {
  expect(() => {
    calculator.add();
  }).toThrow('2 numbers must be provided');

  expect(() => {
    calculator.subtract();
  }).toThrow('2 numbers must be provided');

  expect(() => {
    calculator.multiply();
  }).toThrow('2 numbers must be provided');

  expect(() => {
    calculator.divide();
  }).toThrow('2 numbers must be provided');
});

test('Error thrown if missing 1 arg', () => {
  expect(() => {
    calculator.add(1);
  }).toThrow('2 numbers must be provided');

  expect(() => {
    calculator.subtract(1);
  }).toThrow('2 numbers must be provided');

  expect(() => {
    calculator.multiply(1);
  }).toThrow('2 numbers must be provided');

  expect(() => {
    calculator.divide(1);
  }).toThrow('2 numbers must be provided');
});

test('Error thrown if too many args', () => {
  expect(() => {
    calculator.add(1, 2, 3);
  }).toThrow('Too many args. Max 2');
  expect(() => {
    calculator.subtract(1, 2, 3);
  }).toThrow('Too many args. Max 2');
  expect(() => {
    calculator.multiply(1, 2, 3);
  }).toThrow('Too many args. Max 2');
  expect(() => {
    calculator.divide(1, 2, 3);
  }).toThrow('Too many args. Max 2');
});

test('Error thrown if wrong type passed as arg', () => {
  expect(calculator.add('A', 'B')).toBe(NaN);
  expect(calculator.subtract('A', 'B')).toBe(NaN);
  expect(calculator.multiply('A', 'B')).toBe(NaN);
  expect(calculator.divide('A', 'B')).toBe(NaN);
});
