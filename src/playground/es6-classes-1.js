// Setup constructor to take name and age {default to 0}
// getDescription - Alan Koger is 31 year(s) old.

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('Alan Koger', 31);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());