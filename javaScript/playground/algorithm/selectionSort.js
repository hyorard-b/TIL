function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    for (let j = i; j < array.length; j++) {
      if (array[minIdx] > array[j]) minIdx = j;
    }
    const tmp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = tmp;
  }
  
  return array;
}
  
console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]