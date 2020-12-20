# Number

## Number 생성자 함수

Number 생성자 함수에 인수를 전달하지 않고 `new` 연산자와 함께 호출하면 `[[NumberData]]` 내부 슬롯에 `0`을 할당한 Number 래퍼 객체를 생성한다. 인수를 전달하면 `[[NumberData]]` 내부 슬롯에 인수가 할당된 Number 래퍼 객체를 생성한다.

Number 생성자 함수의 인수로 숫자가 아닌 값을 전달하면 인수를 숫자로 강제 변환한 후, `[[NumberData]]` 내부 슬롯에 변환된 숫자를 할당한 Number 래퍼 객체를 생성한다. 인수를 숫자로 변환할 수 없다면 `NaN`을 `[[NumberData]]` 내부 슬롯에 할당한 Number 래퍼 객체를 생성한다.

`new` 연산자를 사용하지 않고 Number 생성자 함수를 호출하면 Number 인스턴스가 아닌 숫자를 반환한다. 이를 이용하여 명시적으로 타입을 변환하기도 한다.

---

## Number 프로퍼티

### Number.EPSILON

ES6에서 도입된 `Number.EPSILON`은 1과 1보다 큰 숫자 중에서 가장 작은 숫자와의 차이와 같다. `Number.EPSILON`은 약 2.2204460492503130808472633361816 x 10-16이다.

부동소수점을 표현하기 위해 가장 널리 쓰이는 표준인 IEEE 754는 2진법으로 변환시 무한소수가 되어 미세한 오차가 발생할 수밖에 없는 구조적 한계를 갖는다.

`Number.EPSILON`은 부동소수점으로 인해 발생하는 오차를 해결하기 위해 사용한다. 다음은 `Number.EPSILON`을 사용하여 부동소수점을 비교하는 함수다.

```javascript
0.1 + 0.2; // 0.3000000000004
0.1 + 0.2 === 0.3; // false

function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

isEqual(0.1 + 0.2, 0.3); // true
```

---

### Number.MAX_VALUE

`Number.MAX_VALUE`는 자바스크립트에서 표현할 수 있는 가장 큰 양수 값(1.7976931348623157 x 10308)이다. `Number.MAX_VALUE`보다 큰 숫자는 `Infinity`다.

---

### Number.MIN_VALUE

`Number.MIN_VALUE`는 자바스크립트에서 표현할 수 있는 가장 작은 양수 값(5 x 10-324)이다. `Number.MIN_VALUE`보다 작은 숫자는 0이다.

`Number.MIN_VALUE > 0; // true`

---

### Number.MAX_SAFE_INTEGER

`Number.MAX_SAFE_INTEGER` 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수값(9007199254740991)이다.

---

### Number.MIN_SAFE_INTEGER

`Number.MIN_SAFE_INTEGER`는 자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수값(-9007199254740991)이다.

---

### Number.POSITIVE_INFINITY

`Number.POSITIVE_INFINITY`는 양의 무한대를 나타내는 숫자 값 `Infinity`와 같다.

---

### Number.NEGATIVE_INFINITY

`Number.NEGATIVE_INFINITY`는 음의 무한대를 나타내는 숫자 값 `-Infinity`와 같다.

---

### Number.NaN

`Number.NaN`은 숫자가 아님(Not-a-Number)을 나타내는 숫자 값이다. `Number.NaN`은 `window.NaN`과 같다.

---

## Number 메서드

### Number.isFinite

ES6에서 도입된 `Number.isFinite` 정적 메서드는 인수로 전달된 숫자 값이 정상적인 유한수, 즉 `Infinity` 또는 `-Infinity`가 아닌지 검사하여 그 결과를 불리언 값으로 반환한다. 인수가 `NaN`이면 언제나 `false` 값을 반환한다.

`Number.isFinite` 메서드는 빌트인 전역 함수 `isFinite`와 차이가 있다. 빌트인 전역 함수 `isFinite`는 전달받은 인수를 숫자로 암묵적 타입 변환하여 검사를 수행하지만 `Number.isFinite`는 전달받은 인수를 숫자로 암묵적 타입 변환하지 않는다. 따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 `false`다.

---

### Number.isInteger

ES6에서 도입된 `Number.isInteger` 정적 메서드는 인수로 전달된 숫자값이 정수(integer)인지 검사하여 그 결과를 불리언 값으로 반환한다. 검사하기 전에 인수를 숫자로 암묵적 타입 변환하지 않는다.

---

### Number.isNaN

ES6에서 도입된 `Number.isNaN` 정적 메서드는 인수로 전달된 숫자값이 `NaN`인지 검사하여 그 결과를 불리언 값으로 반환한다.

`Number.isNaN` 메서드는 빌트인 전역 함수 `isNaN`과 차이가 있다. 빌트인 전역 함수 `isNaN`은 전달받은 인수를 숫자로 암묵적 타입 변환하여 검사를 수행하지만 `Number.isNaN` 메서드는 전달받은 인수를 숫자로 암묵적 타입 변환하지 않는다. 따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 `false`다.

---

### Number.isSafeInteger

ES6에서 도입된 `Number.isSafeInteger` 정적 메서드는 인수로 전달된 숫자값이 안전한 정수인지 검사하여 그 결과를 불리언 값으로 반환한다. 안전한 정수값은 -(2^53 - 1)와 2^53 - 1 사이의 정수값이다. 검사전에 인수를 숫자로 암묵적 타입 변환하지 않는다.

---

### Number.prototype.toExponential

`toExponential` 메서드는 숫자를 지수 표기법으로 변환하여 문자열로 반환한다. 지수 표기법이란 매우 크거나 작은 숫자를 표기할 때 주로 사용하며 e(exponent) 앞에 있는 숫자에 10의 n승을 곱하는 형식으로 수를 나타내는 방식이다. 인수로 소수점 이하로 표현할 자리수를 전달할 수 있다.

```javascript
(77.1234).toExponential(); // -> "7.71234e+1"
(77.1234).toExponential(4); // -> "7.7123e+1"
(77.1234).toExponential(2); // -> "7.71e+1"
```

---

### Number.prototype.toFixed

`toFixed` 메서드는 숫자를 반올림하여 문자열로 반환한다. 반올림하는 소수점 이하 자리수를 나타내는 0~20 사이의 정수값을 인수로 전달할 수 있다. 인수를 생략하면 기본값 0이 지정된다.

---

### Number.prototype.toPrecision

`toPrecision` 메서드는 인수로 전달받은 전체 자리수까지 유효하도록 나머지 자리수를 반올림하여 문자열로 반환한다. 인수로 전달받은 전체 자리수로 표현할 수 없는 경우 지수 표기법으로 결과를 반환한다.

전체 자리수를 나타내는 0~21 사이의 정수값을 인수로 전달할 수 있다. 인수를 생략하면 기본값 0이 지정된다.

---

### Number.prototype.toString

`toString` 메서드는 숫자를 문자열로 변환하여 반환한다. 진법을 나타내는 2~36 사이의 정수값을 인수로 전달할 수 있다. 인수를 생략하면 기본값 10진법이 지정된다.
