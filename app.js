class Cat {
  constructor(name) {
    this.name = name;
  }
  meow() {
    console.log("🐱");
  }
}

const chairmanMeow = new Cat("Chairman Meow");

class WeedCat extends Cat {
  constructor(name, canScoreCatNip) {
    super(name);
    this.canScoreCatNip = canScoreCatNip;
    this.fatness = 100;
  }
  sleep() {
    console.log(this.name + " is zzzzzzzzz ing");
    this.fatness--;
  }
  snack() {
    console.log(this.name + " is nom nom nom nom ing");
    this.fatness++;
  }
}

const randy = new WeedCat("randu", true);
randy.sleep();
randy.snack();
randy.meow();
console.log(randy.fatness);

const steve = new WeedCat("stefen", false);
steve.sleep();
steve.sleep();
console.log(steve.fatness);


console.log(typeof WeedCat);

