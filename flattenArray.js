let nestedArray = [1, 3, [4, 2], [6, 7, [5, 8, 9]]];

//First we use flat() method.
function FlattenArrayUsingFlat(flatArrayVal) {
  let flatArray = [];
  console.log("NestedArray:-", flatArrayVal);

  flatArray = flatArrayVal.flat(2); //In that we have a nestedArray of length is 2 step.
  flatArray = flatArrayVal.flat(Infinity); //In that no matter how much of steps of nestedArray, infinite method is fla

  console.log("FlatArray", flatArray);
}

FlattenArrayUsingFlat(nestedArray);

//Here we use a Reduce method for Flat an Array.
function FlattenArrayUsingReduce(val) {
  return val.reduce((acc, crr) => {
    return Array.isArray(crr)
      ? acc.concat(FlattenArrayUsingReduce(crr)) // Here im call recursion if i fine a Array.
      : acc.concat(crr); //if val are not an Array so Add in Accumulator.
  }, []);
}

console.log("REDUCE METHOD:-", FlattenArrayUsingReduce(nestedArray));

//Here we use for loop to Flat an Array.

function FlattenArrayUsingForLoop(val) {
  const value = val;
  let newVal = [];
  for (let i = 0; i < value.length; i++) {
    if (!Array.isArray(value[i])) {
      newVal.push(value[i]);
    } else {
      newVal = newVal.concat(FlattenArrayUsingForLoop(value[i]));
    }
  }

  return newVal;
}

console.log(
  "USING FOR LOOP AND RECURSION:- ",
  FlattenArrayUsingForLoop(nestedArray)
);

//Here using for loop with push method to Flat an Array

function flattenArrayUsingForLoopWithPush(val) {
  let newArray = [];
  for (item of val) {
    if (!Array.isArray(item)) {
      newArray.push(item);
    } else {
      newArray.push(...flattenArrayUsingForLoopWithPush(item));
    }
  }
  return newArray;
}
flattenArrayUsingForLoopWithPush(nestedArray);
console.log(
  "FLAT AN ARRAY USING FOR LOOP WITH PUSH METHOD",
  flattenArrayUsingForLoopWithPush(nestedArray)
);
