function baked() {
  console.log("is global", this === global);
  console.log("is pizza", this === pizza);
  console.log(`baked: ${this.thickness}`)
}

var pizza = {
  thickness: "medium",
  baked: baked
}

baked(); // this is global
thickness = "global medium";
baked(); // this is global
pizza.baked(); // this is pizza

var pizzaBaked = pizza.baked;
pizzaBaked(); // this is global

pizzaBaked.call(pizza);

var table = {
  thickness: "thin"
}

pizza.baked.call(table); // this is table

const bakedAgain = pizza.baked.bind(table);
bakedAgain(); // this is table

bakedAgain.call(pizza); // this is table because, bind wins.