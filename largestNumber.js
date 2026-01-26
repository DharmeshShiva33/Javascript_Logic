function largestNumber(...args) {
  const arr = [...args];
  let largetNumber = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largetNumber) {
      largetNumber = arr[i];
    }
  }
  console.log(largetNumber);
  return largetNumber;
}

largestNumber(2, 3, 5, 6, 1, 6);
