/*  // 이진 탐색
 function binarySearch(array, target) {
    let start = 0, end = array.length - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (target === array[mid]) return mid;

      if (target > array[mid]) start = mid + 1;
      else end = mid - 1;
    }
    return -1;
  }
  
console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1 */

// 재귀 이진 탐색
function binarySearch(array, target) {
  function search(start, end) {
    const mid = Math.floor((start + end) / 2);
    
    if (start === end && array[start] === target) return start;
    if (start > end) return -1;
    
    if (array[mid] === target) return mid;
    return array[mid] > target ? search(start, mid - 1) : search(mid + 1, end);
  }
  return search(0,array.length-1);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1