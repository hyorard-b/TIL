# 클로저

클로저는 자바스크립트 고유의 개념이 아니므로 클로저의 정의가 ECMAScript 사양에 등장하지 않는다.

## 렉시컬 스코프

자바스크립트 엔진은 함수를 어디서 호출했는지가 아니라 함수를 어디에 정의했는지에 따라 상위 스코프를 결정한다. 이를 렉시컬 스코프(정적 스코프)라 한다.

즉, 함수가 호출되어 실행 컨텍스트를 생성하고 렉시컬 환경을 생성하여 외부 렉시컬 환경에 대한 참조값에 함수 객체에 저장되어 있던 `[[Environment]]`의 값을 할당하는데, 이 `[[Environment]]`의 값이 정의된 함수를 평가하고 함수 객체를 생성할 때 할당되기 때문에, 함수를 정의한 곳에 따라 상위 스코프가 결정되는 것이다.

---

## 함수 객체의 내부 슬롯 [[Environment]]

함수는 자신의 내부 슬롯 `[[Environment]]`에 자신이 정의된 환경, 즉 상위 스코프의 참조를 저장한다. 또한 호출되었을 때, 렉시컬 환경의 외부 렉시컬 환경에 대한 참조의 값을 `[[Environment]]`로 사용한다.

---

## 클로저와 렉시컬 환경

자신을 포함하고 있는 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 외부 함수 밖에서 중첩 함수를 호출하더라도 외부 함수의 지역 변수에 접근할 수 있는데 이러한 함수를 클로저(closure)라고 부른다.

함수를 어디서 호출하든 상관없이 함수는 언제나 자신이 기억하는 상위 스코프의 식별자를 참조할 수 있으며 식별자에 바인딩된 값을 변경할 수도 있다.

```javascript
const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  const e = 20;
  console.log(e);
}

foo(); // bar는 상위 스코프를 참조하지 않으므로 클로저가 아니다.

function foo2() {
  const y = 10;
  function bar2() {
    console.log(y);
  }
  bar2();
}

foo2(); // bar2는 외부 함수 foo2보다 생명 주기가 짧으므로 클로저가 아니다.

function foo3() {
  let z = 100;
  function bar3() {
    console.log(z++);
  }

  return bar3;
}

const hyorardClosure = foo3(); // bar3는 상위 스코프를 참조하고, 외부 함수보다 생명 주기가 기므로 클로저이다.
hyorardClosure();
hyorardClosure();
hyorardClosure();
```

클로저에 의해 참조되는 상위 스코프의 변수를 **자유 변수(free variable)** 이라고 한다. 이론적으로 클로저는 상위 스코프를 기억해야 하므로 불필요한 메모리의 점유를 걱정할 수도 있겠다. 하지만 모던 자바스크립트 엔진은 최적화가 잘 되어 있어서 클로저가 참조하고 있지 않는 식별자는 기억하지 않는다. 즉, 상위 스코프의 식별자 중에서 기억해야 할 식별자만 기억한다. 기억해야 할 식별자를 기억하는 것은 낭비라고 볼 수 없다. 따라서 클로저의 메모리 낭비는 걱정하지 않아도 된다.

---

## 클로저의 활용

그렇다면 이 클로저는 어디에 쓰는 것일까? 클로저는 상태를 안전하게 변경하고 유지하기 위해 사용하는데 이를 정보 은닉이라 한다.

다음은 상태를 안전하게 **은닉** 하고, 상태 변경을 **특정 함수에게만 허용** 하기 위해 클로저를 활용한 것이다.

```javascript
const sayMyFavoritePlayer = (function () {
  let favPlayer = 'thiago';

  return function (newOne = null) {
    favPlayer = newOne ?? favPlayer;
    console.log(favPlayer);
  };
})();

sayMyFavoritePlayer();
sayMyFavoritePlayer('gerrard');
sayMyFavoritePlayer();

console.log('--------');

const favoritePlayer = (function () {
  let myFavorite = 'gerrard';

  return {
    say() {
      console.log(myFavorite);
    },
    change(newOne = null) {
      myFavorite = newOne ?? myFavorite;
    },
  };
})();

favoritePlayer.say();
favoritePlayer.change();
favoritePlayer.say();
favoritePlayer.change('thiago');
favoritePlayer.say();
```

```javascript
// 반환할 클로저 함수는 자신만의 독립된 렉시컬 환경을 가지는 예제

function makeFavoritePlayer(helper) {
  let favPlayer = 'thiago';

  return function (newOne = null) {
    favPlayer = helper(favPlayer, newOne);
    return favPlayer;
  };
}

function speak(fav) {
  console.log(fav);
  return fav;
}

function changeAndSpeak(...argument) {
  const newOne = argument[1] ?? argument[0];
  console.log(newOne);
  return newOne;
}

const speaker = makeFavoritePlayer(speak);
const chanpeaker = makeFavoritePlayer(change);

speaker();
chanpeaker();
speaker();
chanpeaker('gerrard');
speaker();
chanpeaker('gerrard');
changer();
chanpeaker('thiago');
```

---

## 캡슐화와 정보 은닉

캡슐화는 객체의 상태인 프로퍼티와 상태를 조작하는 동작인 메서드를 하나로 묶는 것을 말하는데, 특정 프로퍼티나 메서드를 감출 목적으로 사용할 때 정보 은닉이라고 한다.

정보 은닉은 객체 간의 상호 의존성, 결합도를 낮출 수 있게 한다.

```javascript
function Person(name, age) {
  this.name = name;
  const _age = age;
}

Person.prototype.sayHi = function () {
  // Person 생성자 함수의 지역 변수 _age를 참조할 수 없다
  console.log(
    `Hi! My name is ${this.name}. I am ${this.__proto__.constructor._age}.`,
  );
};

const person = new Person('hyorard', 27);
person.sayHi(); // prototype 메서드가 평가될 때 [[Environment]]에 전역 렉시컬 환경이 들어가서, Person 생성자 함수의 _age 지역 변수를 참조할 수가 없다.

// 해결 방식 -> prototype 메서드의 [[Environment]] 참조값인 렉시컬 환경에 age가 들어있도록 한 곳에 묶는다!

const Person = (function () {
  let _age = 0;

  function Person(name, age) {
    this.name = name;
    _age = age; // Person 함수 객체의 스코프 체인을 통해 _age를 찾게 된다.
  }

  Person.prototype.sayHi = function () {
    console.log(`Hi my name is ${this.name} and i'm ${_age}`); // 이제 찾을 수 있다!
  };

  return Person;
})();

const hyorard = new Person('hyorard', 27);
hyorard.sayHi(); // Hi my name is hyorard and i'm 27

// 그러나 이 방법 또한 여러 개의 인스턴스를 생성할 경우 생성자 함수를 공유하기 때문에, 생성자 함수의 지역 변수 또한 공유하게 되고, 각각의 상태 유지가 불가능하다.

const thiago = new Person('thiago', 30);
thiago.sayHi(); // Hi my name is thiago and i'm 30
hyorard.sayHi(); // Hi my name is hyorard and i'm 30
```

이처럼 자바스크립트는 정보 은닉을 완전하게 지원하지 안지만, 최신 브라우저와 최신 Node.js에 구현되어 있고, 표준 사양으로 승급이 확실시되는 `private` 필드로 해결할 수 있다.

---

## 자주 발생하는 실수

다음은 `var` 키워드를 사용한 `for` 반복문의 흔한 실수이다. `var` 키워드를 사용하여 `i`는 전역 변수가 되었고, 함수가 호출될 때의 상위 스코프는 전역이고, 전역 변수 `i`는 3값을 가지고 있기 때문에 모두 3이 출력된다.

해결 방식은 블록 레벨 스코프를 가지는 `let` 키워드를 사용해 `for`문을 돌린다. `for`문의 반복이 한 번 끝날 때마다 새로운 렉시컬 환경을 생성하여 현재 실행 중인 실행 컨텍스트의 렉시컬 환경과 교체한다. 새로운 환경 레코드에는 새로운 `i`가 등록되고, 나중에 함수가 호출될 때에는 각각 이 새로운 렉시컬 환경들을 참조하기 때문에 새로운 `i`들이 출력되게 된다. `for`문이 끝나면 원래 실행 컨텍스트의 렉시컬 환경으로 되돌리게 된다.

```javascript
var arr = [];

for (var i = 0; i < 3; i++) {
  arr[i] = function () {
    return i;
  };
}

for (var j = 0; j < 3; j++) {
  console.log(arr[j]());
} // 3 3 3
//

// 해결 방식 -
// for문의 반복이 한 번 끝날 때마다 새로운 렉시컬 환경을 생성하여 현재 실행 중인 실행 컨텍스트의 렉시컬 환경과 교체한다., 환경 레코드에 i를 새로 등록하기 때문에 외부 렉시컬 환경에 대한 참조값을 참조할 필요가 없어진다.
```
