# 스프레드 문법

스프레드 문법을 사용할 수 있는 대상은 Array, String, Map, Set, DOM 컬렉션(NodeList, HTMLCollection), arguments와 같이 `for…of` 문으로 순회할 수 있는 이터러블에 한정된다.

**스프레드 문법의 결과는 값이 아니다.** 이는 스프레드 문법 `...`이 피연산자를 연산하여 값을 생성하는 연산자가 아님을 의미한다. 따라서 스프레드 문법의 결과는 변수에 할당할 수 없다.

---

## 함수 호출문의 인수 목록에서 사용하는 경우

스프레드 문법이 제공되기 이전에는 배열을 펼쳐서 요소들의 목록을 함수의 인수로 전달하고 싶은 경우 `Function.prototype.apply`를 사용했다.

```javascript
const arr = [1, 2, 3];

var ES5Max = Math.max.apply(null, arr);
const ES6Max = Math.max(...arr);
```

---

## 배열 리터럴 내부에서 사용하는 경우

1. `concat`

   ```javascript
   var arr = [1, 2].concat([3, 4]);

   const arr = '?';
   ```

2. `splice`

   ```javascript
   var arr1 = [1, 4];
   var arr2 = [2, 3];

   var ES5Res = Array.prototype.splice.apply(null, [1, 0].concat(arr2));
   const ES6Res = '?';
   ```

3. 배열 복사

   ES5에서는 `slice` 메서드를 사용하여 배열을 복사하였다.

4. 이터러블을 배열로 변환

   ```javascript
   function sum() {
     var args = Array.prototype.slice.call(arguments); // ES5에서의 배열로 변환

     return args.reduce(function (res, v) {
       return res + v;
     }, 0);
   }

   console.log(sum(1, 2, 3));
   ```

   단, 이터러블이 아닌 유사 배열 객체는 스프레드 문법의 대상이 될 수 없다.

   ```javascript
   // 이터러블이 아닌 유사 배열 객체
   const arrayLike = {
     0: 1,
     1: 2,
     2: 3,
     length: 3,
   };

   const arr = [...arrayLike];
   // TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))

   const arr = Array.prototype.slice.call(arrayLike); // [1,2,3]
   const arr2 = Array.from(arrayLike); // 1,2,3
   ```

---

## 객체 리터럴 내부에서 사용하는 경우

Rest 프로퍼티와 함께 현재 TC39 프로세스의 stage 4(Finished) 단계에 제안되어 있는 스프레드 프로퍼티를 사용하면 객체 리터럴의 프로퍼티 목록에서도 스프레드 문법을 사용할 수 있다. 스프레드 문법의 대상은 이터러블이어야 하지만 스프레드 프로퍼티 제안은 일반 객체를 대상으로도 스프레드 문법의 사용을 허용한다.
