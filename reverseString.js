function reverseStringWithLoop(args) {
  let newReverseString = "";
  for (let i = args.length - 1; i >= 0; i--) {
    newReverseString += args[i];
  }
  console.log("reverseStringWithLoop", newReverseString);
  return newReverseString;
}

reverseStringWithLoop("Hello");

function reverseStringWithBuildInMethod(args) {
  const charArray = args.split("");
  charArray.reverse();
  const reverseStr = charArray.join("");
  console.log("reverseStringWithBuildInMethod", reverseStr);
  return reverseStr;
}

reverseStringWithBuildInMethod("Hello");

function reverseStringWithRecursion(args) {
  if (args === "") {
    return "";
  } else {
    return reverseStringWithRecursion(args.substring(1)) + args.charAt(0);
  }
}

console.log("reverseStringWithRecursion", reverseStringWithRecursion("Hello"));
