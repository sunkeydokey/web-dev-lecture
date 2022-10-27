const dummyUser = {
  firstName: 'SunKee',
  lastName: 'Lee',
  age: 26,
};

const displayUserDataButton = document.querySelector('#user-data button');

function displayUserData() {
  const userDataArea = document.getElementById('output-user-data');

  userDataArea.innerHTML = '';

  for (const key in dummyUser) {
    const userProfileList = document.createElement('li');

    userProfileList.textContent = `${key.toUpperCase()}: ${dummyUser[key]}`;

    userDataArea.append(userProfileList);
  }
}

displayUserDataButton.addEventListener('click', displayUserData);
