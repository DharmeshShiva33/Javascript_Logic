function palindromeNumber(strVal) {
  let str = "";

  for (let i = strVal.length - 1; i >= 0; i--) {
    str += strVal[i];
  }

  if (str === strVal) {
    console.lo(true);
    return true;
  }
  console.log(false);
  return false;
}

palindromeNumber("str");
