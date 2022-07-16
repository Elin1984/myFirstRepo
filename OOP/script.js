class Person {
    // Class builder
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHey() {
      console.log(`Hey my name is: ${this.name}`);
    }
  
    myAge() {
      return this.age;
    }
  
    canDrink() {
      if (this.age >= 21) {
        return true;
      }
      return false;
    }
  
    isOlder(other) {
      if (this.age > other.age) {
        return true;
      }
      return false;
    }
  }
  
  let person = new Person("John", 30);
  let person2 = new Person("Mike", 35)