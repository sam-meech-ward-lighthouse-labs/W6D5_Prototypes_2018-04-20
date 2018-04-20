# [[Prototype]]

**How does property lookup work in JavaScript?**

## Classes and Inheritance

* Review
  - Class is like a blueprint for an object.
  - Class names start with a capital letter. Title Case, but we don't have to, it's just convention / tradition.
  - Classes can inherit from other classes, which means that a subclass will inherit certain behavior from the super class.
  - They have constructors.

## [[Prototype]]s

* Why does js even have class syntax?
because the world was going nuts for object oriented languages, and javascript said we have prototypes? and everyone got scared because they didnt say class

* OLOO
  - Objects linked to other objects.
* YOLOOO
  - You only link objects to other objects
* the prototype chain
  - Every object has a [[Prototype]] which is another object
  - Just dealin with objects.
  - If an object does not implement it's own version of a property, it will delegate out to its prototype. 
  - An object can only have a single prototype, but chain can be as long as you want. 
  - The chain can't be a cricle at any point. 
* `.__proto__` vs `.prototype` vs [[Prototype]]

- By default, a new object will have its [[Prototype]] set to Object.prototype `console.log(Object.getPrototypeOf(duck) === Object.prototype);`

**How does property lookup work in JavaScript?**

## `new` and functions

```js
function Cricket() {
  // 1. a new empty object is created {}
  // 2. the object's [[Prototype]] is set to Cricket.prototype
  // 3. returns that object

  // Also, inside this function, `this` refers to the new object.
  this.name = "jiminy";
}
```

* Every single normal (not fat arrow) function in js has a property called `prototype` which is by default, an empty object.


## Links

A good resource for how `this` and `[[Prototype]]`s work.

https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes