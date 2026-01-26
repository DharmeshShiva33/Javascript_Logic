//Create a Custom Promise
const promise = new Promise((resolve, reject) => {
  let isSuccess = false;
  if (isSuccess) {
    resolve("Promise Done");
  } else {
    reject("Promise failed");
  }
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error", err);
  });

//Create a Promise using async/await

async function getResult() {
  const promise = new Promise((resolve, rejecet) => {
    let isSucces = true;
    if (isSucces) {
      resolve("async promise resolve");
    } else {
      rejecet("async Promise Reject");
    }
  });

  const resilt = await promise;
  console.log(resilt);
}

getResult();

//Promise use then/catch with API
const promiseUrl = fetch("https://jsonplaceholder.typicode.com/users");
promiseUrl
  .then((data) => data.json())
  .then((result) => console.log("Promise Data Fetch using then/catch", result));

//Promise use async/await with API
const asyncPromiseUrl = async () => {
  const url = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await url.json();
  console.log("Async Fetch Data", data);
};

asyncPromiseUrl();

//Promise.All Method is used to fetch API
const promiseAll1 = new Promise((resolved, reject) => {
  let isSuccess = true;
  if (isSuccess) {
    setTimeout(() => {
      resolved("Promise All 1 woking");
    }, 3000);
  } else {
    reject("Promise All 1 , ERROR");
  }
});
const promiseAll2 = new Promise((resolved, reject) => {
  let isSuccess = false;
  if (isSuccess) {
    resolved("Promise All 2 woking");
  } else {
    reject("Promise All 2 , ERROR");
  }
});
const promiseAll3 = new Promise((resolved, reject) => {
  let isSuccess = true;
  if (isSuccess) {
    resolved("Promise All 2 woking");
  } else {
    reject("Promise All 2 , ERROR");
  }
});

Promise.all([promiseAll1, promiseAll2, promiseAll3])
  .then((values) => console.log(values))
  .catch((err) => console.log("Promis.All failed", err));

const promiseAllUser = async () => {
  const url = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await url.json();
  return data;
};

const promiseAllPost = async () => {
  const url = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await url.json();
  return data;
};
//Promise All Using then/catch with API
Promise.all([promiseAllUser(), promiseAllPost()]).then(([users, posts]) => {
  console.log(" API URL FETCH users", users);
  console.log(" API URL FETCH posts", posts);
});

//Promise All using async/await with API
const asyncPromiseAll = async () => {
  const [users, posts] = await Promise.all([
    promiseAllUser(),
    promiseAllPost(),
  ]);

  console.log("Destructuring Promise All User Value", users);
  console.log("Destructuring Promise All posts Value", posts);
};

asyncPromiseAll();
