function Cricket(name) {
  this.name = name;
}

function TRex(name) {
  Cricket.call(this, name);
}

TRex.prototype = Object.create( Cricket.prototype );


Cricket.prototype.chirp = function() {
  console.log(`${this.name} is chirping`);
}

const jiminiy = new Cricket("jiminy");
jiminiy.chirp();

const sally = new TRex("sally");
sally.chirp();

// jiminiy's [[Prototype]] is Cricket.prototype

// function newCricket() {
//   const obj = {};
//   Object.setPrototypeOf(newCricket.prototype, obj);
//   return obj;
// }

// Object.prototype;

// console.log(Object.getPrototypeOf(Object.prototype));
