const morseCode = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
  'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
  'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
  'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
  'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '0': '-----', ' ': '/'
};

const textToMorse = (text) => {
  return text.toUpperCase().split('').map(char => morseCode[char] || '').join(' ');
};

const morseToText = (morse) => {
  const reverseMorseCode = Object.fromEntries(Object.entries(morseCode).map(([k, v]) => [v, k]));
  return morse.split(' ').map(code => reverseMorseCode[code] || '').join('');
};

document.getElementById('translateButton').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value.trim();
  const outputText = /^[.\-\/ ]+$/.test(inputText) 
    ? morseToText(inputText) 
    : textToMorse(inputText);
  document.getElementById('outputText').value = outputText;
});
