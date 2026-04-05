//REVERSE STRING
function reverseStr(strValReverse) {
  let strVal = strValReverse;
  let reverseStrVal = "";
  for (let i = strVal.length - 1; i >= 0; i--) {
    reverseStrVal += strVal[i];
  }
  console.log(reverseStrVal);
  return reverseStrVal;
}

reverseStr("REDDD");

//CHECK PELINDROME
function palindrome(strValPal) {
  let strVal = strValPal;
  let newStrVal = "";

  for (let i = strVal.length - 1; i >= 0; i--) {
    newStrVal += strVal[i];
  }
  console.log(newStrVal, " " + " ", strVal);
  if (strVal === newStrVal) {
    console.log(true);
    return true;
  }

  console.log(false);
  return false;
}

palindrome("STS");

//COUNT VOWELS
function countVowel(strValCountVowel) {
  let strVal = strValCountVowel;
  let vowels = ["a", "e", "i", "o", "u"];
  let newStrVal = 0;

  for (let str of strVal) {
    for (let v of vowels) {
      if (str === v) {
        newStrVal++;
      }
    }
  }
  console.log("Total Counts", newStrVal);
  return newStrVal;
}

countVowel("countvowel");

function removeDuplicates(strDuplicated) {
  let removeDuplicatesStr = strDuplicated;
  let newRemoveDuplicatesStr = "";

  //HERE USING FOR LOOP
  for (let i = 0; i < removeDuplicatesStr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < newRemoveDuplicatesStr.length; j++) {
      if (removeDuplicatesStr[i] === newRemoveDuplicatesStr[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      newRemoveDuplicatesStr += removeDuplicatesStr[i];
    }
  }

  console.log("REMOVE DUPLICATES", newRemoveDuplicatesStr);
}

removeDuplicates("aabbccdd");

function removeDuplicatesUsingObject(strWithObj) {
  let strVal = strWithObj;
  let strValObj = {};
  let newStrVal = "";

  for (let str of strVal) {
    if (!strValObj[str]) {
      strValObj[str] = true;
      newStrVal += str;
    }
  }

  console.log("Remove Duplicates with strObjectVal", newStrVal);
}

removeDuplicatesUsingObject("ooopppsss");

function removeDuplicatesUsingWhile(strWithWhile) {
  let strValUsingWhile = strWithWhile;
  let newStrValUsingWhile = "";
  let i = 0;

  while (i < strValUsingWhile.length) {
    let isDuplicate = false;
    let j = 0;

    while (j < newStrValUsingWhile.length) {
      if (strValUsingWhile[i] === newStrValUsingWhile[j]) {
        isDuplicate = true;
        break;
      }
      j++;
    }
    i++;

    if (!isDuplicate) {
      newStrValUsingWhile += strValUsingWhile[i];
    }
  }
  console.log("REMOVE DUPLIACTES USING WHILE LOOP", newStrValUsingWhile);
}
removeDuplicatesUsingWhile("sssxxx");

function firstStringNonRepeatCharacter(strVal) {
  let firstNonRepeatVal = {};
  let freq = {};
  //using for of method to creating object.
  for (let char of strVal) {
    freq[char] = (freq[char] || 0) + 1;
  }

  //using for loop method to creating object.
  for (let i = 0; i < strVal.length; i++) {
    firstNonRepeatVal[strVal[i]] = (firstNonRepeatVal[strVal[i]] || 0) + 1;
  }

  //onced im creating object we have to check object value.
  for (i of strVal) {
    if (firstNonRepeatVal[i] === 1) {
      console.log("First Non Repeating character", i);
      return i;
    }
  }

  console.log(
    "First Non Repeat Value in firstNonRepeatVal:-",
    firstNonRepeatVal
  );
  console.log("First Non Repeat Value in freq:-", freq);
}

firstStringNonRepeatCharacter("programmng");
