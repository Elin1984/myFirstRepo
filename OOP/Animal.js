class Animal {
    constructor(age, name, predator) {
      this.age = age;
      this.name = name;
      this.predator = predator;
    }
  
    makeNoise() {
      console.log("This animal make noise");
    }
  
    getAge() {
      return this.age;
    }
  }
  
  class Dog extends Animal {
    constructor(age, name, predator, furColor) {
      super(age, name, predator);
      this.furColor = furColor;
    }
  
    makeNoise() {
      console.log("Awufff");
    }
  }
  
  class Cat extends Animal {
    constructor(age, name, predator, color) {
      super(age, name, predator);
      this.color = color;
    }
  
    makeNoise() {
      console.log("Mewwwo");
    }
  }
  
  let a = new Animal(10, "Mishmish", false);
  
  let d = new Dog(3, "Snow", false, "white");
  d.makeNoise();
  
  let c = new Cat(5, "Mitzi", true, "red", "gray");
  console.log(c.color);
  

}