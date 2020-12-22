# String

## String 생성자 함수

1. 인수 없이 `new` 연산자와 호출

   String 생성자 함수에 인수를 전달하지 않고 `new` 연산자와 함께 호출하면 `[[StringData]]` (ES5에서는 `[[PrimitiveValue]]`) 내부 슬롯에 빈 문자열을 할당한 String 래퍼 객체를 생성한다.

2. `new` 연산자 없이 호출

   `new` 연산자를 사용하지 않고 String 생성자 함수를 호출하면 String 인스턴스가 아닌 문자열을 반환한다. 이를 이용하여 명시적으로 타입을 변환하기도 한다.

3. 인수로 문자열이 아닌 값 전달

   String 생성자 함수에 문자열이 아닌 값을 인수로 전달하면 전달받은 인수를 문자열로 강제 변환한 후, `[[StringData]]` 내부 슬롯에 변환된 문자열을 할당한 String 래퍼 객체를 생성한다.

---

## length 프로퍼티

String 레퍼 객체는 배열과 마찬가지로 `length` 프로퍼티를 갖는다.

---

## String 메서드

문자열은 변경 불가능한 원시값이기 때문에 String 래퍼 객체도 읽기 전용 객체로 제공되고, 이에 따라 String 메서드에는 원본 래퍼 객체를 변경하지 않고 새로운 문자열을 반환하는 accessor 메서드만이 존재한다.

---

### String.prototype.indexOf

인수로 전달받은 문자열을 검색하여 첫 번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다. ES6에 도입된 `String.prototype.includes` 메서드를 사용하면 가독성이 더 좋긴한데 인덱스가 아닌 불리언 값 반환한다리.

---

### String.prototype.search

대상 문자열에서 인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다. 검색에 실패하면 `-1`을 반환한다.

```javascript
const hufsBestMidfielder = 'Hyorard Kim';

hufsBestMidfielder.search(/K/); // 8
```

---

### String.prototype.includes

대상 문자열에 인수로 전달받은 문자열이 포함되어 있는지 확인하여 그 결과를 `true` 또는 `false`로 반환한다. (ES6)

```javascript
const hufsBestMidfielder = 'Hyorard Kim';

hufsBestMidfielder.includes('r', 5); // true
hufsBestMidfielder.includes('g'); // false
```

---

### String.prototype.startsWith

대상 문자열이 인수로 전달받은 문자열로 시작하는지 확인하여 그 결과를 `true` 또는 `false`로 반환한다. (ES6)

---

### String.prototype.endsWith

대상 문자열이 인수로 전달받은 문자열로 끝나는지 확인하여 그 결과를 `true` 또는 `false`로 반환한다. (ES6)

---

### String.prototype.charAt

대상 문자열에서 인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환한다. 인덱스를 벗어난 숫자를 인수로 전달하면 빈 문자열을 반환한다.

```javascript
const hufsBestMidfielder = 'Hyorard Kim';
let whoIsBestOne = '';

for (let i = 0; i < hufsBestMidfielder.length; i++) {
  whoIsBestOne += hufsBestMidfielder.charAt(i);
}
console.log(whoIsBestOne);
```

---

### String.prototype.substring

대상 문자열에서 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두 번째 인수로 전달받은 인덱스에 위치하는 문자의 바로 이전 문자까지의 부분 문자열을 반환한다. 두 번째 인수가 첫 번째 인수보다 작은 경우 교환된다. 인수가 음수나 `NaN`인 경우 0으로 취급한다. 문자열 길이보다 큰 인수의 경우 문자열 길이로 대체된다.

```javascript
const hufsBestMidfielder = 'Hyorard Kim';

str.substring(0, 7); // Hyorard
str.substring(7, 0); // Hyorard
str.substring(-8); // Hyorard
str.substring(0, 9999); // Hyorard Kim

str.substring(0, str.indexOf(' ')); // Hyorard
Str.substring(str.indexOf(' ') + 1, str.length); // Kim
```

---

### String.prototype.slice

배열 프로토타입 메서드인 `slice`와 동일하게 음수를 인수로 전달할 수 있고, 이 경우 뒤에서부터 잘라 반환한다. 나머지는 `substring` 메서드와 동일하게 동작한다리.

---

### String.prototype.toUpperCase

대상 문자열을 모두 대문자로 변경한 문자열을 반환한다.

---

### String.prototype.toLowerCase

대상 문자열을 모두 소문자로 변경한 문자열을 반환한다.

---

### String.prototype.trim

대상 문자열 앞뒤에 공백 문자가 있을 경우 이를 제거한 문자열을 반환한다. 다음은 stage4에 제안되어 있는 두 가지 메서드이다.

- `String.prototype.trimStart`

  대상 문자열 앞의 공백 문자만 제거한 문자열을 반환한다.

- `String.prototype.trimEnd`

  대상 문자열 뒤의 공백 문자만 제거한 문자열을 반환한다.

---

### String.prototype.repeat

문자열을 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환한다. 인수로 전달받은 정수가 0이면 빈 문자열을 반환하고 음수이면 RangeError를 발생시킨다. 인수를 생략하면 기본값 0이 설정된다.

```javascript
const dribble = 'dribble';
const lostBall = 'lostBall';

const mingee = dribble.repeat(0) + lostBall;
const hyorard = dribble.repeat(Number.MAX_VALUE);
```

---

### String.prototype.replace

대상 문자열에서 첫 번째 인수로 전달받은 문자열 또는 정규표현식을 검색하여 두 번째 인수로 전달한 문자열로 치환한 문자열을 반환한다. 문자열이 중복될 경우 첫 번째 문자열만 치환한다.

```javascript
const str = 'Hello world';

// 특수한 교체 패턴을 사용할 수 있다. ($& => 검색된 문자열)
str.replace('world', '<strong>$&</strong>');
```

---

### String.prototype.split

대상 문자열에서 첫 번째 인수로 전달한 문자열 또는 정규 표현식을 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다. 인수로 빈 문자열을 전달하면 각 문자를 모두 분리하고, 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다. 두 번째 인수로 배열의 길이를 지정할 수 있다. 이 경우, 요소의 개수가 길이를 넘는다면 초과된 요소는 무시한다.
