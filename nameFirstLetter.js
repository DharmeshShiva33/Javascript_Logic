function nameFirstLetter(name) {
  //in that time complexity is O(n) and space complexity is O(n)
  const nameArray = name.split(" ");

  const firstNameFirstLetter = nameArray[0];
  const lastNameFirstLetter = nameArray[nameArray.length - 1].charAt(0);

  if (nameArray.length < 2) {
    console.log(
      "Please provide both first name.",
      firstNameFirstLetter.slice(0, 2).toUpperCase()
    );
    return firstNameFirstLetter.slice(0, 2).toUpperCase();
  } else if (nameArray.length >= 2) {
    console.log(
      firstNameFirstLetter.charAt(0).toUpperCase() +
        lastNameFirstLetter.toUpperCase()
    );
    return (
      firstNameFirstLetter.charAt(0).toUpperCase() +
      lastNameFirstLetter.toUpperCase()
    );
  }
}

nameFirstLetter("Dharma Shiva");

function getInitialOptimized(name) {
  //in that time complexity is O(n) and space complexity is O(1)
  let firstInitial = "";
  let lastInitial = "";
  let i = 0;

  // Get first initial
  while (i < name.length && name[i] === " ") {
    i++;
  }
  firstInitial = name[i].toUpperCase();

  for (; i < name.length && name[i + 1] !== " "; i++) {
    lastInitial = name[i + 1].toUpperCase();
  }
  console.log(firstInitial + lastInitial);
}

getInitialOptimized("The Loard of Shiva");
