function secondLargestNumber(...args) {
  const arr = [...args];
  let largetNumber = 0;
  let secondLargestNumber = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largetNumber) {
      secondLargestNumber = largetNumber;
      largetNumber = arr[i];
    } else if (arr[i] < largetNumber && arr[i] > secondLargestNumber) {
      secondLargestNumber = arr[i];
    }
  }
  console.log(largetNumber);
  console.log(secondLargestNumber);
  return secondLargestNumber;
}
secondLargestNumber(9, 2, 3, 4, 6, 1, 6);

function secondLargestNumberFromString(str) {
  let largestNumber = 0;
  let secondLargestNumber = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= "0" && char <= "9") {
      let num = Number(char);
      if (num > largestNumber) {
        secondLargestNumber = largestNumber;
        largestNumber = num;
      } else if (num < largestNumber && num > secondLargestNumber) {
        secondLargestNumber = num;
      }
    }
  }
  console.log(largestNumber, secondLargestNumber);
  return { largestNumber, secondLargestNumber };
}
secondLargestNumberFromString("asa8412");
