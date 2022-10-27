const rollDiceButton = document.querySelector('#statistics button');

function rollDice() {
  return Math.ceil(Math.random() * 6);
}

function numberOfDice() {
  const targetNumberInput = document.getElementById('user-target-number');
  const diceNumberList = document.getElementById('dice-rolls');

  const enteredNumber = targetNumberInput.value;
  const inputLabel = document.querySelector('#statistics label');

  diceNumberList.innerHTML = '';

  if (!enteredNumber || enteredNumber > 6) {
    return (inputLabel.textContent = 'Input should be 1 ~ 6');
  }

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();

    numberOfRolls++;

    const newRollListItemElement = document.createElement('li');
    const outputText = `Rolled ${numberOfRolls} : ${rolledNumber}`;
    newRollListItemElement.textContent = outputText;
    diceNumberList.append(newRollListItemElement);

    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }
  const outputTotalRolls = document.getElementById('output-total-rolls');
  const outputTargetNumber = document.getElementById('output-target-number');

  inputLabel.textContent = 'Your Target Number';
  outputTargetNumber.textContent = enteredNumber;
  outputTotalRolls.textContent = numberOfRolls;
}

rollDiceButton.addEventListener('click', numberOfDice);
