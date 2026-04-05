// function debounceFn() {}

// const div = document.createElement("div");
// const h1 = document.createElement("h1");
// div.appendChild(h1);
// document.body.appendChild(div);

// h1.textContent = "Debounce Function";
// div.innerHTML = `
// <h2>Subtopic</h2>
// <input id="debounceId" type="text" style="color: blue; font-size: 16px; margin: 10px; padding: 20px; border-radius: 10px" />
// `;

// function debounceFunction(fn, delay) {
//   let timer;

//   return function (...arg) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       return fn(...arg);
//     }, delay);
//   };
// }

// function throttlingFn(fn, delay) {
//   let isActive = false;

//   return function (...args) {
//     if (isActive) return; // block if already active

//     fn.apply(this, args); // run function
//     isActive = true; // block next calls

//     setTimeout(() => {
//       isActive = false; // allow again after delay
//     }, delay);
//   };
// }

// function handleSearchInput(e) {
//   console.log(e.target.value);
//   const result = e.target.value ?? null;
//   return result;
// }

// // const callDebounce = debounceFunction(handleSearchInput, 2000);
// const callDebounce = throttlingFn(handleSearchInput, 2000);

// document.getElementById("debounceId").addEventListener("input", callDebounce);

// console.log(test(2, 3));

const basicDebounce = document.createElement("div");
document.body.appendChild(basicDebounce);

basicDebounce.innerHTML = `
<h1>Basic Debounce Function</h1>
<input id="debounceId" type="text" style="color: blue; font-size: 16px; margin: 10px; padding: 20px; border: 4px solid blue; border-radius: 10px" />
`;

function debounceFn(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function handleSearchInput(e) {
  console.log("Typing:", e.target.value);
}

const callDebounce = debounceFn(handleSearchInput, 2000);

document.getElementById("debounceId").addEventListener("input", callDebounce);
