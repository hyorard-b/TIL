# strict mode

## strict mode란?

자바스크립트는 자유로운 언어이다. 따라서, 개발자 의도와 상관 없이 오류가 생겨도 암묵적으로 처리하는 동작이 많다. 이는 결국 개발자의 의도와 상관 없는 오류를 일으킬 가능성을 높인다.

strict mode는 이러한 잠재적인 오류를 발생시키기 어렵도록 문법을 좀 더 엄격하게 적용시켜 명시적인 에러를 발생시킨다.

---

## strict mode의 적용

```javascript
'use strict'; // 피해야 함

function manager() {
  'use strict';

  this.hairDryer = function () {
    return `xxckin hell score some goal`;
  };
}
```

---

## 전역에 적용하는 것은 예상치 못한 에러를 일으킬 수 있다

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      'use strict';

    </script>
    <script>
      x = 1; // 에러가 발생하지 않는다.
      console.log(x); // 1
    </script>
    <script>
      'use strict';

      y = 1; // ReferenceError: y is not defined
      console.log(y);
    </script>
  </body>
</html>
```

전역에 적용한 strict mode는 스크립트 단위로 적용된다.

---

## 함수 단위로 strict mode 적용?

```javascript
(function () {
  // non-strict mode
  var lеt = 10; // 에러가 발생하지 않는다.

  function foo() {
    'use strict';

    let = 20; // SyntaxError: Unexpected strict mode reserved word
  }
  foo();
})();
```

어떤 함수는 적용하고, 어떤 함수는 적용하지 않는 것은 바람직하지 않고, 모든 함수에 적용하는 것은 번거로운 일이다.

---

## 그러면 어떻게?

즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분한 뒤, 즉시 실행 함수의 선두에 strict mode를 적용하면, 외부 서드파티 라이브러리를 사용하는 경우에 라이브러리가 non-strict mode여서 발생할 예측하지 못하는 에러도 피할 수 있다.

```javascript
// 즉시 실행 함수의 선두에 strict mode 적용
// 전역 strict mode보다 좋다
(function () {
  'use strict';

  // Do something...

})();
```

---

## strict mode가 발생시키는 에러

1. 암묵적 전역 - ReferenceError

   ```javascript
   (function () {
     'use strict';

     x = 1;
     console.log(x); // ReferenceError: x in not defined
   })();
   ```

2. 변수, 함수, 매개변수의 삭제 - SyntaxError

   ```javascript
   (function () {
     'use strict';

     var x = 1;
     delete x;
     // SyntaxError: Delete of an unqualified identifier in strict mode.

     function foo(a) {
       delete a;
       // SyntaxError: Delete of an unqualified identifier in strict mode.
     }
     delete foo;
     // SyntaxError: Delete of an unqualified identifier in strict mode.
   })();
   ```

   3. 매개변수 이름의 중복

   ```javascript
   (function () {
     'use strict';

     //SyntaxError: Duplicate parameter name not allowed in this context
     function foo(x, x) {
       return x + x;
     }
     console.log(foo(1, 2));
   })();
   ```

   4. with 문의 사용

   코드는 간결해지나, 성능과 가독성 문제가 크기 때문에 쓰지 않는 것이 좋다.

---

## strict mode 적용에 의한 변화

1. 일반 함수의 `this`

   strict mode에서 함수를 일반 함수로 호출하면 `this`에 `undefined`가 바인딩된다.

2. `arguments` 객체

   strict mode에서는 매개변수에 전달된 인수를 재할당하여도 반영되지 않는다.

---
