// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// Create a Dog and Cat child class from the Animal Class.

class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }
  getAnimalInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, type) {
    super(name, age, color, legs)
    this.type = type
  }
  getDogInfo() {
    return `${this.getAnimalInfo()}, Type: ${this.type}`
  }
  getAnimalInfo() {
    return `the method is overriden,${this.name}`
  }
}

const d = new Dog('Tommy', 2, 'Brown', 4, 'Pug')
console.log(d.getAnimalInfo())

class Cat extends Animal {
  constructor(name, age, color, legs, type) {
    super(name, age, color, legs)
    this.type = type
  }
  getCatInfo() {
    return `${this.getAnimalInfo()}, Type: ${this.type}`
  }
  set setCatType(type) {
    this.type = type
  }
  get getCatType() {
    return this.type
  }

  static catInfo() {
    return 'This is a cat class static method'
  }
}

const b = new Cat('Kitty', 1, 'White', 4, 'Persian')
b.setCatType = 'Siamese'
console.log(Cat.catInfo())
