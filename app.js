texts = [
  '? Hmmm... ',
  ' zici? Hai sa vedem!',
  ', un numar bun!',
  '? o alegere inteleapta!',
  '? bun bun!',
];

// wrongTexts = ['Însă nu suficient!', 'Mai încearcă!', 'Ooo nu!'];

numberTexts = [
  'Numarul introdus este mai mare!',
  'Numarul introdus este mai mic!',
];

let tryNumbers = [];
let tryNumber = 0;

var randomNumber = Math.floor(Math.random() * 100);

let getNumberParagraph = document.getElementById('tableAnswer');
const getNumberInput = document.getElementById('numberInput');
paragraphMessage = document.getElementById('chatBoxTextOne');
secondParagraphMessage = document.getElementById('chatBoxTextTwo');
let lastNumberInput = document.getElementById('lastNumberInput');
const playerBox = document.getElementById('playerBox');

getNumberInput.addEventListener('keyup', function (event) {
  if (
    getNumberInput.value === '' ||
    getNumberInput.value > 100 ||
    getNumberInput.value < 0
  ) {
    getNumberInput.value = '';
    fadeInOut(notification, 'notification', 'Nu ai introdus un numar valid!');
  } else {
    if (event.key === 'Enter') {
      tryNumber = getNumberInput.value;
      getNumberParagraph.innerText = tryNumber;
      checkNumber();
      getNumberInput.value = '';
      getNumberParagraph.style.color = 'var(--white)';
    }
  }
});

function getNumber() {
  if (
    getNumberInput.value === '' ||
    getNumberInput.value > 100 ||
    getNumberInput.value < 0
  ) {
    getNumberInput.value = '';
    fadeInOut(notification, 'notification', 'Nu ai introdus un numar valid!');
  } else {
    tryNumber = getNumberInput.value;
    getNumberParagraph.innerText = tryNumber;

    checkNumber();
    getNumberInput.value = '';
    getNumberParagraph.style.color = 'var(--white)';
  }
}
