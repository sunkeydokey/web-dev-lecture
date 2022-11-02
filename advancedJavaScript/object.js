// const job = {
//   title: 'Developer',
//   location: 'Seoul',
//   salary: 0,
// };

// console.log(new Date().toISOString());

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`);
  }
}

const developer = new Job('Developer', 'Seoul', 1000);
const cook = new Job('Cook', 'Busan', 900);
console.log(developer);

developer.describe();
cook.describe();
