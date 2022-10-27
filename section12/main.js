const productNameInputElement = document.getElementById('product-name');
const remaininCharsElement = document.getElementById('remaining-chars');
const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharactors(event) {
  const enteredText = event.target.value;
  const textLength = enteredText.length;

  const remainingCharactors = maxAllowedChars - textLength;

  remaininCharsElement.textContent = remainingCharactors;

  if (remaininCharsElement <= 10) {
    productNameInputElement.classList.add('warning');
    remaininCharsElement.classList.add('warning');
  } else {
    productNameInputElement.classList.remove('warning');
    remaininCharsElement.classList.remove('warning');
  }
}

productNameInputElement.addEventListener('input', updateRemainingCharactors);
