export default function reverseString(str) {
  let reversedStr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }

  return reversedStr.join('');
}
