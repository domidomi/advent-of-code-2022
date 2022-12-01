const fs = require("fs");

let result;
const content = fs.readFileSync("input.txt", "utf8");
const tempArray = [0];

content.split("\n").map((meal) => {
  // If the element is not empty
  if (meal !== "") {
    // Sum it with the last element in array
    tempArray[tempArray.length - 1] =
      tempArray[tempArray.length - 1] + parseInt(meal);
  } else {
    tempArray.push(0);
  }
});

const arrSorted = tempArray.sort((a, b) => a - b);
result = arrSorted.pop();

console.log(result);
