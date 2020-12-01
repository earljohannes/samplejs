// __proto__ vs .prototype
// https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript

/**
 * `__proto__` is an object in every class instance that points to the prototype it was created from.
 * The only true difference between `prototype` and `__proto__` is that the former
 * is a property of a class constructor, while the latter is a property of a class instance.
 */

/**
 * `__proto__` is the actual object that is used in the lookup chain to resolve methods,
 * `prototype` is the object that is used to build `__proto__`
 * when we create an object with `new`
 */

// `prototype` is a property of a Function object.
// It is the prototype of objects constructed by that function.

/**
 * `__proto__` is internal property of an object,
 * pointing to its prototype. Current standards provide an
 * equivalent Object.getPrototypeOf(O) method
 */

function Point(x, y) {
  this.x = x;
  this.y = y;
}

const myPoint = new Point();

// the following are all true
myPoint.__proto__ == Point.prototype
myPoint.__proto__.__proto__ == Object.prototype
myPoint instanceof Point;
myPoint instanceof Object;

/******************************************************************************
 * So prototype is not available on the instances themselves (or other objects),
 * but only on the constructor functions.
 */

console.log(Point.prototype);
console.log(myPoint.prototype);