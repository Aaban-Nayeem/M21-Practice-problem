//? Write a function to find lowest number.

function lowInNumber(numbers) {
  let lowest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}

const heights = [412, 180, 521, 209, 160, 700];
const lowest = lowInNumber(heights);
console.log("The lowest number: " + lowest);
