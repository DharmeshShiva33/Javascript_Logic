console.log("Hello");

//Create a method in global object method
Object.prototype.sayHi = function () {
  console.log("javdshjavs");
  return "Globle object prototype function";
};

const user = { name: "Dharma" };

console.log(user.sayHi());

//create a prototype for cunstructer functiona and class cunstructer
function userFn(name) {
  this.name = name;
}

userFn.prototype.sayHiFn = function () {
  console.log("Create a method in cunstructer function");
  return " cunstructer function";
};

const userFn1 = new userFn("cunstructer function");

console.log(userFn1); //in that function im passing a prototype of userFn and also pass

// #create Class Cunstructer

class UserClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

UserClass.prototype.sayHiClass = function () {
  console.log("create a cunstructer function");
  return "Class cunstructer";
};

const UserClass1 = new UserClass("nameClass", 28);

console.log("UserClass", UserClass1); //in that im create prototype method using a class constructor
