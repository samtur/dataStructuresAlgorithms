const arr = [1, 2, 3, 5, 8, 20, 100, 2000, 2001, 4000];

function binarySearch(trgt, start, end) {
  if (start > end) {
    return "No value matches";
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === trgt) {
    return `Your value is at index ${mid}`;
  } else if (trgt < arr[mid]) {
    return binarySearch(trgt, start, mid - 1);
  } else if (trgt > arr[mid]) {
    return binarySearch(trgt, mid + 1, end);
  }
}

console.log(binarySearch(4000, 0, arr.length - 1));

// Find out how to return the index of the value in the full array;
