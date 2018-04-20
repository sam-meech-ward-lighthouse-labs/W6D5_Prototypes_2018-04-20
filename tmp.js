function something(someFunc) {
  console.log(someFunc.prototype);
}

something(() => {});
something(function() {});