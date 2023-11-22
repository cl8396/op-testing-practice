export default function analyzeArray(arr) {
  if (
    arr.every((val) => {
      return typeof val === 'number';
    }) === false
  ) {
    throw new Error('Invalid values in array');
  } else {
    return {
      average: calculateAverage(arr),
      min: calculateMin(arr),
      max: calculateMax(arr),
      length: arr.length,
    };
  }
}

function calculateAverage(arr) {
  return (
    arr.reduce((accu, current) => {
      return (accu += current);
    }) / arr.length
  );
}

function calculateMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function calculateMax(arr) {
  let max = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
