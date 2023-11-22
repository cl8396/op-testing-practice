import analyzeArray from '../modules/analyse-array';

test('default case (1)', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('default case (2)', () => {
  expect(analyzeArray([0, 10])).toStrictEqual({
    average: 5,
    min: 0,
    max: 10,
    length: 2,
  });
});

test('Invalid values in array (1)', () => {
  expect(() => {
    analyzeArray([1, 2, 3, 'Hello']);
  }).toThrow('Invalid values in array');
});

test('Invalid values in array (2)', () => {
  expect(() => {
    analyzeArray(['HelloWorld', '######']);
  }).toThrow('Invalid values in array');
});

test('Invalid values in array (3)', () => {
  expect(() => {
    analyzeArray(['#', 'Nope']);
  }).toThrow('Invalid values in array');
});
