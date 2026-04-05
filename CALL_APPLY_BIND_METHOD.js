//Predict the output of the following code:
const obj = { name: "A" };

function show() {
  console.log(this.name);
}

show();
show.call(obj);

//Bind but no invocation
function test() {
  return this.x;
}

const fn = test.bind({ x: 10 });
console.log(fn());

//Method extraction
const user = {
  name: "Dev",
  getName() {
    return this.name;
  },
};

const fn1 = user.getName;
console.log(fn1()); // undefined

//bind vs call
function say() {
  console.log(this.name);
}

const fn2 = say.bind({ name: "Bind" });
fn2.call({ name: "Call" }); // here 'this' refers to the bound object, so it will log "Bind" because bind has higher precedence than call and if onced bound value to method so we can't change.
fn2(); // "Bind"

//Arrow + bind
const obj1 = {
  name: "JS",
  fn: () => console.log(this.name),
};

obj1.fn.bind(obj1)(); //undefined

//Fix this using bind only
const user1 = {
  name: "Amit",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 100);
  },
};

user1.greet(); // undefined

const person = {
  age: 25,
  getAge() {
    return this.age;
  },
};

const ageFn = person.getAge.bind(person);
console.log("person", ageFn());

const obj2 = {
  name: "JS TEST",
  say() {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      2000
    );
  },
};

obj2.say(); // "JS TEST" after 2 seconds , bind this to obj2

function multiply(a, b) {
  return a * b;
}

// create triple() using bind
const triple = multiply.bind(null, 4);
console.log("JS METHOD", triple(4)); // 12

//Method borrowing
const car1 = {
  brand: "BMW",
  getBrand() {
    return this.brand;
  },
};

const car2 = { brand: "Audi" };

console.log(car1.getBrand.bind(car2)()); // "Audi"

// bind chaining
function show() {
  return this.name;
}

const a = show.bind({ name: "A" });
const b = a.bind({ name: "B" });

console.log(b());

// 1️bind + constructor
function User(name) {
  this.name = name;
}

const BoundUser = User.bind(null, "Amit");
const u = new BoundUser();

console.log("UUU", u.name); // "Amit"

const obj22 = {
  name: "JS",
  sayHi: function () {
    setTimeout(function () {
      console.log("obj22", this.name);
    }, 0);
  },
};

obj22.sayHi();
// newObj22();

document.body.innerHTML = `
  <div class="flex justify-center items-center">
  <h1>CALL Method</h1>
    <h1>APPLY Method</h1>
  </div>
`;
