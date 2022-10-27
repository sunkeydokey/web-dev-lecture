const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');
const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharactors(event) {
  const enteredText = event.target.value;
  const textLength = enteredText.length;

  const remainingCharactors = maxAllowedChars - textLength;

  remainingCharsElement.textContent = remainingCharactors;

  if (remainingCharactors <= 10) {
    productNameInputElement.classList.add('warning');
    remainingCharsElement.classList.add('warning');
  } else {
    productNameInputElement.classList.remove('warning');
    remainingCharsElement.classList.remove('warning');
  }
}

productNameInputElement.addEventListener('input', updateRemainingCharactors);
