function palindromeString(strVal) {
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
palindromeString("str");

function palindromeNumberWithString(numVal) {
  let num = String(numVal);
  let num1 = "";

  for (i = num.length - 1; i >= 0; i--) {
    num1 += num[i];
  }

  if (num1 === num) {
    console.log(true);
    return true;
  }

  console.log(false);
  return false;
}

palindromeNumberWithString(898);

function palindromeNumber(numVal) {
  let lastDigit = numVal % 10; // Js engine divide by 10 and after that it remove the decimal point then multiply by 10 and then subtract from the number and get the last digit
  let removeLastDigit = Math.floor(numVal / 10); // Js engine divide by 10 and after that it remove the decimal point and get the number without last digit
  let reverseNum = 0;

  while (numVal > reverseNum) {}
}

palindromeNumber(12421);
