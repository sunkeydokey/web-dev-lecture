const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
  const userNumberElement = document.getElementById('user-number');
  const enteredNumber = userNumberElement.value;

  let sum = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sum += i;
  }

  const outputResultElement = document.getElementById('calculated-sum');

  outputResultElement.textContent = sum;
  outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);
