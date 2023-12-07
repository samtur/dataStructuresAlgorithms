const arr = [1, 2, 3, 5, 8, 20];
const trgt = 3;

let mid = Math.floor(arr.length / 2);
let end = arr.length - 1;
let start = 0;

function binarySearch(trgt, arr) {
  if (arr.length < 0) {
    return;
  } else if (arr[mid] === trgt) {
    console.log(`Your value is at index ${mid}`);
    return;
  } else if (trgt < arr[mid]) {
    end = mid;
    arr = arr.slice(start, end);
    mid = Math.floor(arr.length / 2);
    binarySearch(trgt, arr);
  } else if (trgt > arr[mid]) {
    start = mid;
    arr = arr.slice(start, end);
    mid = Math.floor(arr.length / 2);
    binarySearch(trgt, arr);
  }
}

binarySearch(trgt, arr);

// Find out how to return the index of the value in the full array;
