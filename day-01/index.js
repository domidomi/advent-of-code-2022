const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const caloriesArray = [0];

content.split("\n").map((mealCalories) => {
  // If the element is not empty
  if (mealCalories !== "") {
    // Sum it with the last element in array
    caloriesArray[caloriesArray.length - 1] =
      caloriesArray[caloriesArray.length - 1] + parseInt(mealCalories);
  } else {
    caloriesArray.push(0);
  }
});

const caloriesArraySorted = caloriesArray.sort((a, b) => a - b);
const topThreeValues = caloriesArraySorted.slice(-3);

const highestValue = topThreeValues.at(-1);
console.log(highestValue); // Answer to part 1

const topThreeValuesSum = topThreeValues.reduce((acc, num) => acc + num);
console.log(topThreeValuesSum); // Answer to part 2
