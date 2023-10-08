function fadeInOut(functionElement, functionClass, functionText) {
  functionElement = document.getElementById(`${functionClass}`);
  functionElement.innerText = functionText;
  functionElement.classList.add('fade-in-out', 'd-none-remove');
  setTimeout(function () {
    functionElement.classList.remove('d-none-remove');
    functionElement.classList.add('d-none');
  }, 3000);
}

function checkNumber() {
  tryNumbersMessage = '';
  var randomTextNumber = Math.floor(Math.random() * texts.length);

  if (tryNumbers.includes(Number(getNumberInput.value))) {
    paragraphMessage.innerText = `Atentie! ${getNumberInput.value} a mai fost ales`;
    if (getNumberInput.value < randomNumber) {
      secondParagraphMessage.innerText = numberTexts[1];
    } else {
      secondParagraphMessage.innerText = numberTexts[0];
    }
  } else {
    switch (true) {
      case getNumberInput.value < randomNumber:
        paragraphMessage.innerText =
          getNumberInput.value + texts[randomTextNumber];
        secondParagraphMessage.innerText = '';
        setTimeout(function () {
          secondParagraphMessage.innerText = numberTexts[1];
          getNumberParagraph.style.color = 'var(--lose)';
        }, 1000);
        break;
      case getNumberInput.value > randomNumber:
        paragraphMessage.innerText =
          getNumberInput.value + texts[randomTextNumber];
        secondParagraphMessage.innerText = '';
        setTimeout(function () {
          secondParagraphMessage.innerText = numberTexts[0];
          getNumberParagraph.style.color = 'var(--lose)';
        }, 1000);
        break;
      default:
        paragraphMessage.innerText =
          getNumberInput.value + texts[randomTextNumber];
        secondParagraphMessage.innerText = '';
        setTimeout(function () {
          secondParagraphMessage.innerText = `FELICITARI!`;
          secondParagraphMessage.style.fontSize = '30px';
          secondParagraphMessage.style.color = 'var(--win)';
          getNumberParagraph.style.color = 'var(--win)';
          playerBox.classList.add('d-none');
        }, 1000);
    }
  }

  tryNumbers.push(Number(getNumberInput.value));
  punctuation = ', ';
  for (i = 0; i < tryNumbers.length; i++) {
    let lastUsedNumber = tryNumbers[i];
    if (i === tryNumbers.length - 1) {
      punctuation = '.';
    }
    tryNumbersMessage += lastUsedNumber + punctuation;
  }
  lastNumberInput.innerText = tryNumbersMessage;

  if (
    tryNumbers.length === 10 &&
    Number(getNumberInput.value) !== randomNumber
  ) {
    let restartButton = document.getElementById('restart');

    paragraphMessage.innerText = `${getNumberInput.value}, Hmm...`;
    setTimeout(function () {
      secondParagraphMessage.innerText = `Nu ai reusit sa ghicesti numarul!`;
      secondParagraphMessage.style.color = 'var(--lose)';
      restartButton.classList.remove('d-none');
      restartButton.classList.add('d-none-remove', 'fade-in');
      playerBox.classList.add('d-none');
    }, 1000);
  }
}

function restart() {
  location.reload();
}
