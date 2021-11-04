// Task 1: Create a function to get the even numbers from an array
//return type of function and input type already declarted
function getEvens(array: Array<number>): Array<number> {
  let newArray = [];
  // TODO: Return a new array containing just the event numbers
  for (let num of array) {
    if (num % 2 === 0) {
      newArray.push(num);
    }
  }
  return newArray;
}

let nums = [1, 2, 3, 4, 5, 6];

let evens = getEvens(nums);

console.log(evens);

//unit tests
console.log(getEvens([2, 5, 6]));

console.log(getEvens([1, 5, 6]));
