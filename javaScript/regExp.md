# RegExp

## 정규표현식이란?

정규 표현식은 일정한 패턴을 가진 문자열을 표현하기 위해 사용한다. 간단하게 문자열을 나타내고, 체크할 수 있다는 장점이 있지만, 주석이나 공백을 허용하지 않고 가독성이 좋지 않다는 문제가 있다.

---

## 정규 표현식의 생성

정규 표현식을 생성하기 위해서는 다음과 같은 두 가지 방법이 있다.

1. 정규 표현식 리터럴

   `const regexp = /is/i;`

2. RegExp 생성자 함수

   `const regexp = new RegExp(/is/i);`

---

## RegExp 메서드

1. `RegExp.prototype.exec`
2. `RegExp.prototype.test`
3. `RegExp.prototype.match`
4. `RegExp.prototype.replace`
5. `RegExp.prototype.search`
6. `RegExp.prototype.split`

---

### RegExp.prototype.exec

`exec` 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다. 매칭 결과가 없는 경우 `null`을 반환한다. `exec` 메서드는 문자열 내의 모든 패턴을 검색하는 `g` 플래그를 지정해도 **첫 번째 매칭 결과** 만 반환한다.

```javascript
const target = 'Is this all there is?';
const regExp = /is/;

regExp.exec(target); // -> ["is", index: 5, input: "Is this all there is?", groups: undefined]
```

---

### RegExp.prototype.test

`test` 메서드는 문자열에서 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.

---

### String.prototype.match

String 표준 빌트인 객체가 제공하는 `match` 메서드는 문자열과 정규 표현식과의 매칭 정보를 배열로 반환한다. `String.prototype.match` 메서드는 `g` 플래그가 지정되면 모든 매칭 결과를 배열로 반환한다.

```javascript
const target = 'Is this all there is?';
let regExp = /is/;

target.match(regExp); // -> ["is", index: 5, input: "Is this all there is?", groups: undefined]

let regExp = /is/g;

target.match(regExp); // ["is", "is"]
```

---

## 플래그

플래그는 옵션이므로 선택적으로 사용할 수 있으며, 순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수도 있다. 어떠한 플래그를 사용하지 않은 경우 대소문자를 구별해서 패턴을 검색한다. 그리고 문자열에 패턴 검색 매칭 대상이 1개 이상 존재해도 첫 번째 매칭한 대상만 검색하고 종료한다.

1. `i`

   대소문자를 구별하지 않고 패턴을 검색한다. (Ignore case)

2. `g`

   대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다. (Global)

3. `m`

   문자열의 행이 바뀌더라도 패턴 검색을 계속한다. (Multi line)

```javascript
const target = 'Is this all there is?';

// target 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색한다.
target.match(/is/);
// -> ["is", index: 5, input: "Is this all there is?", groups: undefined]

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색한다.
target.match(/is/i);
// -> ["Is", index: 0, input: "Is this all there is?", groups: undefined]

// target 문자열에서 is 문자열을 대소문자를 구별하여 전역 검색한다.
target.match(/is/g);
// -> ["is", "is"]

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색한다.
target.match(/is/gi);
// -> ["Is", "is", "is"]
```

---

## 패턴

### 임의의 문자열 검색

`.`은 임의의 문자 한 개를 의미한다.

```javascript
const target = 'Is this all there is?';

// 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
const regExp = /.../g;

target.match(regExp); // -> ["Is ", "thi", "s a", "ll ", "the", "re ", "is?"]
```

### 반복 검색

`{m,n}`은 앞선 패턴이 최소 m번, 최대 n번 반복되는 문자열을 의미한다. `{n}`은 앞선 패턴이 n번 반복되는 문자열을 의미한다. `{n,}`은 패턴이 최소 n번 이상 반복되는 문자열을 의미한다. `+`는 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다 (= `{1,}`). `?`는 패턴이 최대 한 번 이상 반복되는 문자열을 의미한다. (= `{0,1}`).

```javascript
let target = 'A AA B BB Aa Bb AAA';

// 'A'가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다.
let regExp = /A{1,2}/g;

target.match(regExp); // -> ["A", "AA", "A", "AA", "A"]

regExp = /A{2}/g;

target.match(regExp); // ["AA", "AA"]

regExp = /A{2,}/g;

target.match(regExp); // ["AA", "AAA"]

regExp = /A+/g;

target.match(regExp); // ["A", "AA", "A", "AAA"]

target = 'color colour';
regExp = /colou?r/g; // u에만 적용

target.match(regExp); // ["color", "colour"]
```

---

### OR 검색

`|`는 or의 의미를 갖는다. 범위를 지정하려면 `[]` 내에 `-`를 사용한다. `\d`는 숫자를 의미한다. (= `[0-9]`). `\D`는 숫자가 아닌 문자를 의미한다. `\w`는 알파벳, 숫자, 언더스코어를 의미한다. `\W`는 `\w`의 반대로 동작한다.

```javascript
let target = 'A AA B BB Aa Bb';
let regExp = /A|B/g;

target.match(regExp); // ["A", "A", "A", "B", "B", "B", "A", "B"]

regExp = /A+|B+/g;

target.match(regExp); // ["A", "AA", "B", "BB", "A", "B"]

target = 'A AA BB ZZ Aa Bb';
regExp = /[A-Z]+/;

target.match(regExp); // ["A", "AA", "BB", "ZZ", "A", "B"]

regExp = /[A-Za-z]+/g;

target.match(regExp); // ["A", "AA", "BB", "ZZ", "Aa", "Bb"]

target = 'AA BB 12,345';
regExp = /[0-9]+/g;

target.match(regExp); // ["12", "345"]

regExp = /[0-9,]+/g;

target.match(regExp); // ["12,345"]

regExp = /[\D,]+/g; // 공백을 포함한다.

target.match(regExp); // ["AA BB ", ","]

target = 'Aa Bb 12,345 _$%&';
regExp = /[\w,]+/g; // 공백을 포함하지 않는다.

target.match(regExp); // ["Aa", "Bb", "12,345", "_"]

regExp = /[\D,]+/g; // 공백을 포함한다.

target.match(regExp); // [" ", " ", ",", " ", "$%&"] 이거 책 오탄가 ? _ 안드가야하는거 아님?
```

---

### NOT 검색

`[...]` 내의 `^`는 not의 의미를 갖는다.

---

### 시작 위치로 검색

`[...]` 밖의 `^`는 문자열의 시작을 의미한다.

---

### 마지막 위치로 검색

`$`는 문자열의 마지막을 의미한다.

```javascript
const target = 'https://poiemaweb.com';

let regExp = /^https/;

regExp.test(target); // true

regExp = /com$/;

regExp.text(target); // true
```

---

## 자주 사용하는 정규표현식

### 특정 단어로 시작하는지 검사

`?`는 무조건 앞의 한 문자만이 최대 한 번 이상 반복되는지를 의미한다.

```javascript
const url = 'https://hyorard-b.github.io';

/^https?:\/\//.test(url); // true
/^(http|https):\/\//.test(url); // true
```

---

### 숫자로만 이루어진 문자열인지 검사

```javascript
const target = '12345';

/^\d+$/.test(target); // true
```

---

### 하나 이상의 공백으로 시작하는지 검사

`\s`는 여러 공백 문자(스페이스, 탭 등)를 의미한다(= `[\t\r\n\v\f]`).

```javascript
const target = ' Hi!';

/^\s+/.test(target); // true
```

---

### 아이디로 사용 가능한지 검사

알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사한다.

```javascript
const id = 'abc123';

/^[A-Za-z0-9]{4,10}$/.test(id); // true
```

---

### 메일 주소 형식에 맞는지 검사

```javascript

const email = 'reddream09@naver.com`;

아몰랑

```

---

### 핸드폰 번호 형식에 맞는지 검사

```javascript
const cellphone = '010-1234-5678';

/^\d{3}-\d{3,4}-\d{4}$/.test(cellphone); // true
```

---

### 특수 문자 포함 여부 검사

```javascript
const target = 'abc#123';

const res = /[^A-Za-z0-9]/gi.test(target); // true

if (res) target.replace(/[^A-Za-z0-9]/gi, ''); // abc123
```
