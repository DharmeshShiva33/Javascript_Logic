function isPrimeNumber(numVal) {
  if (numVal <= 1) {
    return false;
  }

  if (numVal === 2) {
    return true;
  }

  if (numVal % 2 === 0) {
    console.log(false);
    return false;
  }

  for (i = 3; i < numVal; i++) {
    if (numVal % i === 0) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

isPrimeNumber(19);
