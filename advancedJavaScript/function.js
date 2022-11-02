function greetUser(greetingPrefix, userName = 'User') {
  console.log(`${greetingPrefix} ${userName}`);
}

greetUser('HI', 'Sunkeydokey');
greetUser('HELLO');

function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }
  return result;
}

const inputNumbers = [1, 5, 10, 11, 20];

console.log(sumUp(...inputNumbers));
