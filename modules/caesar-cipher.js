export default function caesarCipher(str, shiftFactor) {
  let shiftedStr = '';

  str.split('').forEach((strLetter) => {
    shiftedStr += shiftLetter(strLetter, shiftFactor);
    return;
  });

  return shiftedStr;
}

function shiftLetter(letter, shiftFactor) {
  let alphabet = getAlphabet(letter);

  if (alphabet) {
    let index = alphabet.findIndex(
      (alphabetLetter) => alphabetLetter === letter
    );

    index += shiftFactor;

    // allow for wrapping
    if (index >= alphabet.length) {
      index -= alphabet.length;
    }

    return alphabet[index];
  } else {
    return letter;
  }
}

function getAlphabet(letter) {
  const lowerCaseLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const upperCaseLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  if (lowerCaseLetters.includes(letter)) {
    return lowerCaseLetters;
  }

  if (upperCaseLetters.includes(letter)) {
    return upperCaseLetters;
  }

  return null;
}
