# 배열

## 배열이란?

1. 배열이 가지고 있는 값을 요소(element)라고 부른다.
2. 배열의 요소는 배열에서 자신의 위치를 나타내는 0 이상의 정수인 인덱스(index)를 갖는다.
3. 배열은 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다.
4. 배열 리터럴, Array 생성자 함수, `Array.of`, `Array.from` 메서드로 생성할 수 있다.
5. 배열의 프로토타입 객체는 `Array.prototype`이다. `Array.prototype`은 배열을 위한 빌트인 메서드를 제공한다.

---

## 자바스크립트 배열은 배열이 아니다.

배열의 요소는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다. 이러한 배열을 밀집 배열(dense array)이라 한다. 인덱스를 통해 단 한 번의 연산으로 임의의 요소에 접근(임의 접근(random access), 시간 복잡도 O(1))할 수 있다. 이는 매우 효율적이며, 고속으로 동작한다.

그러나, 정렬되지 않은 배열에서 특정한 요소를 검색하는 경우 배열의 모든 요소를 처음부터 특정 요소를 발견할 때까지 차례대로 검색(선형 검색(linear search), 시간 복잡도 O(n))해야 한다. 또한 배열에 요소를 삽입하거나 삭제하는 경우 배열의 요소를 연속적으로 유지하기 위해 요소를 이동시켜야 하는 단점도 있다.

자바스크립트 배열은 배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며, 연속적으로 이어져 있지 않을 수도 있다. 배열의 요소가 연속적으로 이어져 있지 않는 배열을 희소 배열(sparse array)이라 한다.

자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체다. 자바스크립트 배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 가지며, length 프로퍼티를 갖는 특수한 객체다. 자바스크립트 배열의 요소는 사실 프로퍼티 값이다.

```javascript
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
/*
{
  '0': {value: 1, writable: true, enumerable: true, configurable: true}
  '1': {value: 2, writable: true, enumerable: true, configurable: true}
  '2': {value: 3, writable: true, enumerable: true, configurable: true}
  length: {value: 3, writable: true, enumerable: false, configurable: false}
}
*/
```

자바스크립트 배열은 해시 테이블로 구현된 객체이므로 인덱스로 요소에 접근하는 경우 일반적인 배열보다 성능적인 면에서 느릴 수밖에 없는 구조적인 단점이 있다. 하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대할 수 있다.

인덱스로 배열 요소에 접근할 때 일반적인 배열보다 느릴 수밖에 없는 구조적인 단점을 보완하기 위해 대부분의 모던 자바스크립트 엔진은 배열을 일반 객체와 구별하여 좀 더 배열처럼 동작하도록 최적화하여 구현했다.

---

## length 프로퍼티와 희소 배열

배열은 요소를 최대 2^32 – 1개 가질 수 있다. 따라서, 최대 인덱스는 2^32 - 2이다. 현재 length 프로퍼티 값보다 작은 숫자 값을 할당하면 배열이 잘라진다. 현재 length 프로퍼티 값보다 큰 숫자 값을 할당하면 값은 변경되지만 실제 배열 길이가 늘어나지는 않는다.

```javascript
const arr = [1, 2, 3, 4, 5];

// 현재 length 프로퍼티 값인 5보다 작은 숫자 값 3을 length 프로퍼티에 할당
arr.length = 3;

// 배열의 길이가 5에서 3으로 줄어든다.
console.log(arr); // [1, 2, 3]

const arr2 = [1];

// 현재 length 프로퍼티 값인 1보다 큰 숫자 값 3을 length 프로퍼티에 할당
arr2.length = 3;

// length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않는다.
console.log(arr2.length); // 3
console.log(arr2); // [1, empty × 2]
```

자바스크립트의 배열은 희소 배열을 문법적으로 허용하여, 연속적으로 보일 수 있으나 앞이나 중간, 뒷 부분이 비어 있을 수도 있다.

```javascript
const sparse = [, 2, , 4];

// 희소 배열의 length 프로퍼티 값은 요소의 개수와 일치하지 않는다.
console.log(sparse.length); // 4
console.log(sparse); // [empty, 2, empty, 4]

// 배열 sparse에는 인덱스가 0, 2인 요소가 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(sparse));
/*
{
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
*/
```

희소 배열은 length와 배열 요소의 개수가 일치하지 않는다. 희소 배열은 length는 희소 배열의 실제 요소 개수보다 언제나 크다.

---

## 배열 생성

```javascript
// 1.배열 리터럴

let arr = [1, 2, 3];
arr = [1, , 3]; // 희소 배열

// 2.Array 생성자 함수

arr = new Array(10);
console.log(arr); // [empty * 10]

// 배열의 요소 개수

arr = new Array(4294967296); // RangeError
new Array(-1); // RangeError

arr = new Array(); // []
arr = Array(1, 2, 3); // new.target 확인해서 생성자 함수로 동작함. [1,2,3]

// 3.Array.of

arr = Array.of(1, 2, 3); // [1,2,3]

// 4. Array.from
// 유사 배열 객체 또는 이터러블 객체를 배열로 변환한다.

Array.from({ length: 2, 0: 'hyorard', 1: 'gerrard' }); // 유사배열 객체 ->['hyorard', 'gerrard']
Array.from('thiago'); // 이터러블 객체 -> ['t','h','i','a','g','o']
```

---

## 배열 요소의 참조

존재하지 않는 요소의 인덱스에 접근하면 `undefined`가 반환된다.

---

## 배열 요소의 추가와 갱신

존재하지 않는 인덱스에 접근하여 값을 할당하면 새로운 요소가 추가되며 length 프로퍼티는 자동 갱신된다.

만약 정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라 **프로퍼티** 가 생성된다. 이때 추가된 프로퍼티는 length 프로퍼티 값에 영향을 주지 않는다.

---

## 배열 요소의 삭제

1. `delete`
   `delete` 연산자는 객체의 프로퍼티를 제거하며, 배열도 객체이기 때문에, `delete arr[1]`이라고 하면 프로퍼티 키가 `1`인 프로퍼티를 제거하고, 이때 배열은 희소 배열이 된다.

2. `Array.prototype.splice`

   희소 배열을 만들지 않으려면 `Array.prototype.splice` 메서드를 사용한다.

   ```javascript
   const arr = [1, 2, 3];

   arr.splice(1, 1); // arr[1]부터 1개 요소 제거
   console.log(arr); // [1,3]
   ```

---

## 배열 메서드

배열에는 원본 배열(배열 메서드를 호출한 배열, 즉 배열 메서드의 구현체 내부에서 this가 가리키는 객체)을 직접 변경하는 메서드(mutator method)와 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드(accessor method)가 있다.

### Array.isArray

Array 생성자 함수의 정적 메서드이다. 전달된 인수가 배열이면 `true`, 아니면 `false`를 반환한다.

---

### Array.prototype.indexOf

프로토타입 메서드로, 호출한 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.

- 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환한다.
- 없다면 `-1`를 반환한다.

두 번째 인수로 검색을 시작할 인덱스를 지정할 수 있다.

```javascript

const arr = [2,10,9,8,2,1];
arr.indexOf(2,1); // 4

arr.indexOf(3) ? console.log('3 is in arr'); : console.log('3 is not in arr');
arr.includes(3) ? console.log('3 is in arr'); : console.log('3 is not in arr');

```

---

### Array.prototype.push

인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다. `push` 메서드는 원본 배열을 직접 변경한다.

`push` 메서드는 성능 면에서 좋지 않다. 마지막 요소로 추가할 요소가 하나뿐이라면 `push` 메서드를 사용하지 않고 length 프로퍼티를 사용하여 배열의 마지막에 요소를 직접 추가할 수도 있다. 이 방법이 `push` 메서드보다 빠르다.

```javascript
const arr = [1, 2];
arr[arr.length] = 3;
arr.push(4); // 부수효과 o

const newArr = [...arr, 4]; // 부수효과 x
```

---

### Array.prototype.pop

`pop` 메서드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. 원본 배열이 빈 배열이면 undefined를 반환한다. `pop` 메서드는 원본 배열을 직접 변경한다.

```javascript
const Stack = (function () {
  function Stack(stack = []) {
    if (!Array.isArray(stack)) throw new TypeError(`${stack} is not Array`);
    this.stack = stack;
  }

  Stack.prototype = {
    constructor: Stack,
    push(value) {
      return this.stack.push(value);
    },
    pop() {
      return this.stack.pop();
    },
    entries() {
      return [...this.stack];
    },
  };

  return Stack;
})();

const stack = new Stack([1, 2, 3]);
stack.push(4);
console.log(stack); // Stack { stack: [ 1, 2, 3, 4 ] }
stack.pop();
console.log(stack); // Stack { stack: [ 1, 2, 3 ] }
console.log(stack.entries()); // [ 1, 2, 3 ]
```

---

### Array.prototype.unshift

`unshift` 메서드는 인수로 전달받은 모든 값을 원본 배열의 **선두에 요소로 추가** 하고 변경된 length 프로퍼티 값을 반환한다. `unshift` 메서드는 원본 배열을 직접 변경한다.

```javascript
const arr = [1, 2];
arr.unshift(-1, 0); // 부수효과 o
console.log(arr); // [ -1, 0, 1, 2 ]

const newArr = [-2, ...arr]; // 부수효과 x
console.log(newArr); // [ -2, -1, 0, 1, 2 ]
```

---

### Array.prototype.shift

`shift` 메서드는 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다. 원본 배열이 빈 배열이면 undefined를 반환한다. `shift` 메서드는 원본 배열을 직접 변경한다.

```javascript
const Q = (function () {
  function Q(Q = []) {
    if (!Array.isArray(Q)) throw new TypeError(`${Q} is not Array`);
    this.Q = Q;
  }

  Q.prototype = {
    constructor: Q,
    enqueue(value) {
      return this.Q.push(value);
    },
    dequeue() {
      return this.Q.shift();
    },
    entries() {
      return [...this.Q];
    },
  };

  return Q;
})();

const q = new Q([1, 2, 3]);
console.log(q.entries()); // [ 1, 2, 3 ]
q.enqueue(4);
console.log(q.entries()); // [ 1, 2, 3, 4 ]
q.dequeue();
console.log(q.entries()); // [ 2, 3, 4 ]
```

```javascript
class Q {
  #queue;
  constructor(queue = []) {
    if (!Array.isArray(queue)) throw new TypeError(`${queue} is not Array`);
    this.#queue = queue;
  }

  enqueue(value) {
    return this.#queue.push(value);
  }

  dequeue() {
    return this.#queue.shift();
  }

  entries() {
    return [...this.#queue];
  }
}

const q = new Q([1, 2, 3]);
console.log(q.entries()); // [ 1, 2, 3 ]
q.enqueue(4);
console.log(q.entries()); // [ 1, 2, 3, 4 ]
q.dequeue();
console.log(q.entries()); // [ 2, 3, 4 ]
```

---

### Array.prototype.concat

`concat` 메서드는 인수로 전달된 값들(배열 또는 원시값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다. 인수로 전달한 값이 배열인 경우 **배열을 해체하여 새로운 배열의 요소로 추가** 한다. 원본 배열은 변경되지 않는다.

```javascript

const arr = [1,2,3];

const newArr = arr.concat([4,5,6]);

const newArr2 = [..newArr,...[7,8,9]];

```

스프레드 문법 쓰는 게 좋다.

---

### Array.prototype.splice

원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 `splice` 메서드를 사용한다. 3개의 매개변수가 있으며 원본 배열을 직접 변경한다.

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(arr.splice(1, 3, 20, 30, 40)); // 제거한 요소가 배열로 반환. [2,3,4]
console.log(arr); // [1,20,30,40,5]

arr.splice(0, 0, -3, -2, -1, 0); // 두 번째 인수에 0을 주면 요소를 제거하지 않는다.
console.log(arr); // [-3,-2,-1,0,1,20,30,40,5]

arr.splice(4);
console.log(arr); // [-3,-2,-1,0]
```

---

### Array.prototype.slice

`slice` 메서드는 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다. 첫 번째 인수는 포함되지만, 두 번째 인수수 인덱스의 요소는 복사되지 않는다.

첫 번째 인수가 음수일 경우 끝에서 해당 인덱스까지를 복사하여 반환한다.

두 번째 인수를 생략하면 첫 번째 인수부터 모든 요소를 복사한다.

인수를 모두 생략하면 원본 배열을 얕은 복사하여 반환한다.

```javascript
const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false },
];

// 얕은 복사(shallow copy)
const _todos = todos.slice();
// const _todos = [...todos];

// _todos와 todos는 참조값이 다른 별개의 객체다.
console.log(_todos === todos); // false

// 배열 요소의 참조값이 같다. 즉, 얕은 복사되었다.
console.log(_todos[0] === todos[0]); // true

// 또 다른 배열 복사 방법 3가지

function makeArray() {
  return Array.prototype.slice.call(arguments); // ES5
  // return Array.from(arguments); Array.from 메서드
  // return [...arguments];
}
const arr = makeArray(1, 2, 3);
```

---

### Array.prototype.join

`join` 메서드는 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열, 즉 구분자(separator)로 연결한 문자열을 반환한다. 구분자는 생략 가능하며 생략할 경우 구분자는 `,`다.

---

### Array.prototype.reverse

`reverse` 메서드는 원본 배열의 순서를 반대로 뒤집는다. 이때 원본 배열이 변경된다. 반환값은 변경된 배열이다.

---

### Array.prototype.fill

ES6에서 도입된 `fill` 메서드는 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다. 이때 원본 배열이 변경된다. 두 번째 인수로 요소 채우기를 시작할 인덱스를 전달할 수 있다. 세 번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.

---

### Array.prototype.includes

ES7에서 도입된 `includes` 메서드는 배열 내에 특정 요소가 포함되어 있는지 확인하여 `true` 또는 `false`를 반환한다. 두 번째 인수로 검색을 시작할 인덱스를 전달할 수 있다. 두 번째 인수를 생략할 경우 기본값 0이 설정된다. 만약 두 번째 인수에 음수를 전달하면 length 프로퍼티 값과 음수 인덱스를 합산하여(length + index) 검색 시작 인덱스를 설정한다. 즉, 음수 인덱스부터 검색을 시작한다.

`Array.prototype.indexOf` 메서드를 `includes` 메서드와 같은 동작을 하게 할 수 있지만 `-1` 인지 검사하여야 하고, `NaN`이 포함되어 있는지 `Array.prototype.indexOf` 메서드로는 검사할 수 없다.

---

### Array.prototype.flat

ES10(ECMAScript 2019)에서 도입된 `flat` 메서드는 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화한다.

```javascript
// 중첩 배열을 평탄화하기 위한 깊이 값의 기본값은 1이다.
[1, [2, [3, [4]]]].flat(); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(1); // -> [1, 2, [3, [4]]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 2로 지정하여 2단계 깊이까지 평탄화한다.
[1, [2, [3, [4]]]].flat(2); // -> [1, 2, 3, [4]]
// 2번 평탄화한 것과 동일하다.
[1, [2, [3, [4]]]].flat().flat(); // -> [1, 2, 3, [4]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 Infinity로 지정하여 중첩 배열 모두를 평탄화한다.
[1, [2, [3, [4]]]].flat(Infinity); // -> [1, 2, 3, 4]
```

---

## 배열 고차 함수

함수형 프로그래밍은 순수 함수(pure function)와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임이다.

고차 함수(Higher-Order Function, HOF)는 외부 상태의 변경이나 가변 데이터를 피하고, 불변성을 지향하는 함수형 프로그래밍에 기반을 두며, 함수를 인수로 전달받거나 함수를 반환하는 함수를 말한다.

---

### Array.prototype.sort

1. 문자열 정렬

`sort` 메서드는 배열의 요소를 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다. 내림차순으로 요소를 정렬하려면 `sort` 메서드를 사용하여 오름차순으로 정렬한 후 `reverse` 메서드를 사용하여 요소의 순서를 뒤집는다.

2. 숫자 정렬

배열의 요소가 숫자 타입이라 할지라도 배열의 요소를 일시적으로 문자열로 변환한 후 유니코드 코드 포인트의 순서를 기준으로 정렬한다. 따라서 숫자 요소를 정렬할 때는 `sort` 메서드에 정렬 순서를 정의하는 비교 함수를 인수로 전달해야 한다.

```javascript
array.sort((a, b) => a - b); // 오름차순 정렬
array.sort((b, a) => b - a); // 내림차순 정렬
```

3. 객체 정렬

```javascript
const todos = [
  { id: 4, content: 'JavaScript' },
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' },
];

const compare = (key) => {
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
};

todos.sort(compare('id'));
console.log(todos);
```

---

### Array.prototype.forEach

`forEach` 메서드는 반복문을 추상화한 고차 함수로서 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야할 처리를 콜백 함수로 전달받아 반복 호출한다. `forEach` 메서드의 콜백 함수는 `forEach` 메서드를 호출한 배열의 요소값과 인덱스, `forEach` 메서드를 호출한 배열 자체, 즉 `this`를 순차적으로 전달받을 수 있다.

`forEach` 메서드의 반환값은 언제나 `undefined`다.

```javascript
class Numbers {
  arr = [];

  /* multiply(array) {
    array.forEach(function (item) {
      this.arr.push(item*item);
    })
  } */

  /* multiply(array) {
    array.forEach(function (v) {
      this.arr.push(v*v);
    }, this);
  } */

  multiply(array) {
    array.forEach((v) => this.arr.push(v * v));
  }
}
```

```javascript

// forEach 메서드의 폴리필

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callBack, thisArg) {

    if (typeof callBack !== 'function) {
      throw new TypeError(`${callBack} is not a function`);
    }

    thisArg = thisArg ?? window;

    for (let i = 0; i < this.length; i++) {
      callBack.call(thisArg, this[i], i, this);
    }
  };
}

```

`forEach` 메서드는 `for` 문과는 달리 `break`, `continue` 문을 사용할 수 없다. 다시 말해, 배열의 모든 요소를 빠짐없이 모두 순회하며 중간에 순회를 중단할 수 없다. `forEach` 메서드는 배열의 모든 요소를 빠짐없이 모두 순회하며 언제나 `undefined`를 반환한다. 희소 배열의 경우 존재하지 않는 요소는 순회 대상에서 제외된다.

---

### Array.prototype.map

`map` 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다. 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다. 이때 원본 배열은 변경되지 않는다.

`forEach` 메서드와 마찬가지로 `map` 메서드의 두 번째 인수로 `map` 메서드의 콜백 함수 내부에서 `this`로 사용할 객체를 전달할 수 있다.

```javascript
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map((v) => this.prefix + v);
  }
}
```

---

### Array.prototype.filter

콜백 함수의 반환값이 `true`인 요소로만 구성된 새로운 배열을 반환한다.

```javascript

class Users {
  constructor() {
    this.users = {
      {id:1, name:'Lee'},
      {id:2, name:'Kim'}
    };
  }

  findById(id) {
    return this.users.filter(v => v.id === id);
  }

  remove(id) {
    this.users = this.users.filter(v => v.id !== id);
  }
}

```

---

### Array.prototype.reduce

콜백 함수의 반환값을 다음 순회 시에 콜백 함수의 첫 번째 인수로 전달하면서 콜백 함수를 호출하여 하나의 결과값을 만들어 반환한다. `reduce` 메서드는 첫 번째 인수로 콜백 함수, 두 번째 인수로 초기값을 전달받는다. `reduce` 메서드의 콜백 함수에는 4개의 인수, 초기값 또는 콜백 함수의 이전 반환값, `reduce` 메서드를 호출한 배열의 요소값과 인덱스, `reduce` 메서드를 호출한 배열 자체, 즉 `this`가 전달된다.

```javascript
// 평균 구하기

const values = [1, 2, 3, 4, 5, 6];

// const avg = values.reduce((res,v,i,arr) => res += v, 0) / values.length;

const avg = values.reduce(
  (res, v, i, arr) => (i === arr.length - 1 ? (res + v) / arr.length : res + v),
  0,
);
```

```javascript
// 중복 횟수 구하기

const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((res, v, i, arr) => {
  res[arr[i]] ? (res[arr[i]] += 1) : (res[arr[i]] = 1);
  return res;
}, {});
```

```javascript
// 중첩 배열 평탄화

const values = [1, [2, 3], 4, [5, 6]];

const flatten = values.reduce((res, v, i, arr) => {
  return res.concat(v);
}, []);
```

---

### Array.prototype.some

`some` 메서드는 콜백 함수의 반환값이 단 한 번이라도 참이면 `true`, 모두 거짓이면 `false`를 반환한다. 단, `some` 메서드를 호출한 배열이 빈 배열인 경우 언제나 `false`를 반환한다.

---

### Array.prototype.every

every 메서드는 콜백 함수의 반환값이 모두 참이면 `true`, 단 한 번이라도 거짓이면 `false`를 반환한다. 단, `every` 메서드를 호출한 배열이 빈 배열인 경우 언제나 `true`를 반환한다.

---

### Array.prototype.find

ES6에서 도입된 `find` 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 `true`인 첫 번째 요소를 반환한다. 콜백 함수의 반환값이 `true`인 요소가 존재하지 않는다면 `undefined`를 반환한다.

---

### Array.prototype.findIndex

ES6에서 도입된 `findIndex` 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 `true`인 첫 번째 요소의 인덱스를 반환한다. 콜백 함수의 반환값이 `true`인 요소가 존재하지 않는다면 `-1`을 반환한다.

---

### Array.prototype.flatMap

ES10(ECMAScript 2019)에서 도입된 `flatMap` 메서드는 `map` 메서드를 통해 생성된 새로운 배열을 평탄화한다. 즉, `map` 메서드와 `flat` 메서드를 순차적으로 실행하는 효과가 있다.
