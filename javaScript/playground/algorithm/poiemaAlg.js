// 1번
console.log('@ 1번 @');
console.log();
function evenOrOdd(num) {
  /* // if 문
  if (num % 2) return 'Odd'
	else return 'Even' */
	
  return num % 2 ? 'Odd' : 'Even';
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

console.log();
console.log('###############');
console.log();

// 2번

console.log('@ 2번 @');
console.log();

function getCount8 () {
  let cnt = 0;
  for (let i =1; i < 10001; i++){
    cnt += [...''+i].filter(v => v === '8').length;
  }
  return cnt;
}

console.log(getCount8()); // 4000

console.log();
console.log('###############');
console.log();

// 3번

console.log('@ 3번 @');
console.log();

function alphaString46(s) {
  if (isNaN(+s) || s.length !== 4) return false
  return true
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false

console.log();
console.log('###############');
console.log();

// 4번

console.log('@ 4번 @');
console.log();

function numPY(s) {
  if (!s) return true;
  const numP = [...s].filter(v => v.toUpperCase() === 'P').length;
  const numY = [...s].filter(v => v.toUpperCase() === 'Y').length;
  return numP === numY ? true : false;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true

console.log();
console.log('###############');
console.log();

// 5번

console.log('@ 5번 @');
console.log();

function toWeirdCase(s) {
  const splitedStr = s.split(' ');
  return splitedStr.map(v => 
    [...v].reduce((weirdCase,v,i) => weirdCase += i % 2 ? v.toLowerCase() : v.toUpperCase(),'')).join(' ');
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'

console.log();
console.log('###############');
console.log();

// 6번

console.log('@ 6번 @');
console.log();

function hideNumbers(str) {
  return '*'.repeat(str.length-4) + str.substring(str.length-4,str.length);
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888

console.log();
console.log('###############');
console.log();

// 7번

console.log('@ 7번 @');
console.log();

function strToInt(str) {
  return +str;
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -12

console.log();
console.log('###############');
console.log();

// 8번

console.log('@ 8번 @');
console.log();

function waterMelon(n) {
  let res = '';
  for (let i = 0; i < n; i++) {
    res += i % 2 ? '박' : '수';
  }
  return res;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));

console.log();
console.log('###############');
console.log();

// 9번

console.log('@ 9번 @');
console.log();

function nextSqaure(n){
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : 'no';
}

console.log(nextSqaure());    // no
console.log(nextSqaure(0));   // 1
console.log(nextSqaure(1));   // 4
console.log(nextSqaure(2));   // no
console.log(nextSqaure(3));   // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441

console.log();
console.log('###############');
console.log();

// 10번

console.log('@ 10번 @');
console.log();

function getMaxValueFromArray(array) {
  return Math.max(...array);
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  return Math.min(...array);
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5

console.log();
console.log('###############');
console.log();

// 11번

console.log('@ 11번 @');
console.log();

function checkPalindrom(str) {
  for (let i = 0; i < Math.floor(str.length / 2) + 1; i++) {
    if (str[i] !== str[str.length-i-1]) return false;
  }
  return true;
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true

console.log();
console.log('###############');
console.log();

// 12번

console.log('@ 12번 @');
console.log();

function uniq(array) {
  return [...array].reduce((uniqArr,v) => {
    if (!uniqArr.includes(v)) uniqArr.push(v);
    return uniqArr;
  },[]);
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

console.log();
console.log('###############');
console.log();

// 13번

console.log('@ 13번 @');
console.log();

function isNotOverlapArray(array) {
  array.reduce()
}

console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3]));    // false

console.log();
console.log('###############');
console.log();

// 14번

