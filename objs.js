const duck = {
  name: "fred",
  quack() {
    console.log(`${this.name} can Quack`);
  }
};

duck.quack();

const cat = Object.create(duck);
// This will create a new empty object called cat.
// And set cat's [[Prototype]] to be duck.

cat.name = "Baron Cuddles VonFlufferton the Third";
cat.meow = function() {
  console.log(`${this.name} can Meow`);
}

// cat.__proto__ = duck;
// Object.setPrototypeOf(cat, duck);

cat.meow();
cat.quack();

// console.log(Object.getPrototypeOf(duck) === Object.prototype);
// duck.__proto__
