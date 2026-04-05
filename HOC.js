// LEVEL 1: Absolute Basic HOC (Wrapper Only)

function basicHOC(fn) {
  return function () {
    console.log("HOC Execute");
    return fn();
  };
}

function sayHi() {
  console.log("HI");
  return 3;
}

const enhanceHi = basicHOC(sayHi);
console.log(enhanceHi());

//LEVEL 2: Passing Arguments (REAL HOC)
function withArgs(fn) {
  return function (...args) {
    console.log("Arguments:", args);
    return fn(...args);
  };
}

function add(a, b) {
  return a + b;
}

const addWithArgs = withArgs(add);
addWithArgs(2, 3);

// Before & After Logic
function withTiming(fn) {
  return function (...args) {
    console.log("Before function");
    const result = fn(...args);
    console.log("After function");
    return result;
  };
}
const timedAdd = withTiming(add);
timedAdd(5, 5);

// Blocking Execution (Auth-style)
function withAuth(fn) {
  return function (...args) {
    const isAllowed = true;

    if (!isAllowed) {
      console.log("Access denied");
      return;
    }

    return fn(...args);
  };
}

const secureAdd = withAuth(add);
secureAdd(1, 2);

// HOC with Configuration (NEXT LEVEL)
function withRole(requiredRole) {
  console.log(requiredRole); //Admin
  return function (fn) {
    //fn function that pass
    return function (currentRole) {
      //currentRole - User
      return function (...args) {
        if (currentRole === requiredRole) {
          console.log("permission grantend!");
          return fn(...args);
        } else {
          console.log("You Don't have Permission!");
          return null;
        }
      };
    };
  };
}
const userRole = "admin";
const adminAdd = withRole(userRole)(add());
adminAdd("user")(2, 3);

const objPreserveThis = {
  x: 5,
  getX(para1, para2) {
    console.log(`OBJ VALUE:- ${this.x} and ${para1} and ${para2}`);
  },
};

const getX1 = objPreserveThis.getX.bind(objPreserveThis, 6, 7); // onced we bind value here at that time if we pass the value again from getX1 function it's doesn't consider

getX1(3, 4);
console.log();

function memoization(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log("get val from cache");
      console.log("cache[key]", cache[key]);
      return cache[key];
    }
    console.log("Store the val in cache");
    const result = fn(...args)(...args)(...args);
    console.log("cache[key]", cache);
    cache[key] = result;
    return result;
  };
}

const addWithCurring = (a, b) => {
  // return a + b;
  return function (b) {
    return function (c) {
      console.log(a * b + c);
      return a * b + c;
    };
  };
};

const enhanceMemoization = memoization(addWithCurring);
console.log(enhanceMemoization(5, 6));
console.log(enhanceMemoization(3, 5));
console.log(enhanceMemoization(3, 5));

//Retry Logic (Production-level)
function withRetry(fn, retries = 3) {
  return function (...args) {
    let attempts = 0;

    while (attempts < retries) {
      try {
        console.log();
        return fn(...args);
      } catch (e) {
        attempts++;
        if (attempts === retries) throw e;
      }
    }
  };
}

const enhanceWithRetry = withRetry(add);
console.log(enhanceWithRetry(2, 4));
console.log(enhanceWithRetry(2, 4));
console.log(enhanceWithRetry(2, 4));
console.log(enhanceWithRetry(2, 4));

document.body.innerHTML = `
     <div>
        <h1>HOC Function</h1>
        <button onclick="test()()" class="call-func p-5 border border-white rounded-2xl">Call Function</button>
    </div>
`;

// document.querySelector(".call-func").onclick = test();

function memoizeHOC(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    console;
    if (cache[key]) {
      console.log("print from cahche", cache[key]);
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    console.log("Print a new Val", cache[key]);
    return result;
  };
}
function add(a, b) {
  console.log(a + b);
  return a + b;
}
const mewMemoizeVal = memoizeHOC(add);
mewMemoizeVal(2, 4);
mewMemoizeVal(2, 4);
