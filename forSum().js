// Using a for Loop (Traditional Method)
function sum(...args) {
  let arr = [...args];
  if (arr.length <= 0) return 0;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum);
}

// Using map() Method (Less Common but Works)
function sum(...args) {
  let arr = [...args];
  if (arr.length <= 0) return 0;

  let sum = 0;

  arr.map((val) => (sum += val));

  console.log(sum);
}

// Using reduce() (Best & Cleanest)
function sum(...args) {
  let arr = [...args];
  if (arr.length <= 0) return 0;

  const total = arr.reduce((acc, curr) => acc + curr, 0);

  console.log(total);
}

sum(3, -4, 5);
