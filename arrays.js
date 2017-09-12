var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newarray = [element, ...array];
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newarray = [...array, element];
  return newarray;
}

function accessElementInArray(array, index) {
  return array[index];
}

