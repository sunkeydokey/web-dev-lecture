for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ['Max', 'Anna', 'Joel'];

for (const user of users) {
  console.log(user);
}

const userLoggedIn = {
  name: 'Lee',
  age: 26,
  isAdmin: true,
};

for (const propertyNmae in userLoggedIn) {
  console.log(`${propertyNmae}: ${userLoggedIn[propertyNmae]}`);
}

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
