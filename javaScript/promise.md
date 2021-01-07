# 프로미스

## 비동기 처리를 위한 콜백 패턴의 단점

### 콜백 헬

비동기 함수란 함수 내부에 비동기로 동작하는 코드를 포함한 함수를 말한다. 비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 종료된다. 즉, 비동기 함수 내부의 비동기로 동작하는 코드는 비동기 함수가 종료된 이후에 완료된다. 따라서 **비동기 함수 내부의 비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 기대한 대로 동작하지 않는다.**

비동기 함수는 비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프의 변수에 할당할 수도 없다. 따라서 비동기 함수의 처리 결과(서버의 응답 등)에 대한 후속 처리는 비동기 함수 내부에서 수행해야 한다. 이때 비동기 함수를 범용적으로 사용하기 위해 비동기 함수에 비동기 처리 결과에 대한 후속 처리를 수행하는 콜백 함수를 전달하는 것이 일반적이다. 필요에 따라 비동기 처리가 성공하면 호출될 콜백 함수와 비동기 처리가 실패하면 호출될 콜백 함수를 전달할 수 있다.

이처럼 콜백 함수를 통해 비동기 처리 결과에 대한 후속 처리를 수행하는 비동기 함수가 비동기 처리 결과를 가지고 또 다시 비동기 함수를 호출해야 한다면 콜백 함수 호출이 중첩되어 복잡도가 높아지는 현상이 발생하는데, 이를 콜백 헬(callback hell)이라 한다.

---

### 에러 처리의 한계

비동기 처리를 위한 콜백 패턴의 문제점 중에서 가장 심각한 것은 에러 처리가 곤란하다는 것이다.

에러는 호출자(caller) 방향으로 전파된다. 즉, 콜 스택의 아래 방향(실행 중인 실행 컨텍스트가 푸시되기 직전에 푸시된 실행 컨텍스트 방향)으로 전파된다.

대표적인 비동기 함수인 setTimeout의 콜백 함수가 에러를 발생시킨다고 가정하였을 때, 이 에러 처리를 위해 setTimeout 함수 호출 후 바로 catch 문을 사용하면, 타이머가 종료되지 않아 콜백 함수가 에러를 일으키기 전에 catch문을 통과한다면 에러 처리가 불가능하게 된다.

이렇게 콜백 패턴은 콜백 헬을 일으키거나 에러 처리가 곤란하다는 단점이 존재하고, 이를 극복하기 위해 ES6에서 프로미스가 도입되었다.

---

## 프로미스의 생성

Promise 생성자 함수를 new 연산자와 함께 호출하면 프로미스(Promise 객체)를 생성한다. ES6에서 도입된 Promise는 호스트 객체가 아닌 ECMAScript 사양에 정의된 표준 빌트인 객체다.

Promise 생성자 함수는 비동기 처리를 수행할 콜백 함수를 인수로 전달받는데 이 콜백 함수는 resolve와 reject 함수를 인수로 전달받는다.

프로미스는 다음과 같이 현재 비동기 처리가 어떻게 진행되고 있는지를 나타내는 상태(state) 정보를 갖는다.

| 프로미스의 상태 정보 | 의미                                  | 상태 변경 조건                   |
| :------------------: | :------------------------------------ | :------------------------------- |
|       pending        | 비동기 처리가 아직 수행되지 않은 상태 | 프로미스가 생성된 직후 기본 상태 |
|      fulfilled       | 비동기 처리가 수행되어 성공한 상태    | resolve 함수 호출                |
|       rejected       | 비동기 처리가 수행되어 실패한 상태    | reject 함수 호출                 |

- 비동기 처리 성공

  resolve 함수를 호출하고 프로미스는 fulfilled 상태가 된다.

- 비동기 처리 실패

  reject 함수를 호출하고 프로미스는 rejected 상태가 된다.

이처럼 프로미스의 상태는 resolve 또는 reject 함수를 호출하는 것으로 결정된다. fulfilled 또는 rejected 상태를 settled 상태라고 한다. settled 상태는 fulfilled 또는 rejected 상태와 상관 없이 pending이 아닌 상태로 비동기 처리가 수행된 상태를 말한다.

프로미스는 pending 상태에서 fulfilled 또는 rejected 상태, 즉 settled 상태로 변화할 수 있다. 하지만 일단 settled 상태가 되면 더는 다른 상태로 변화할 수 없다.

---

## 프로미스의 후속 처리 메서드

프로미스의 비동기 처리 상태가 변화하면 이에 따른 후속 처리를 해야 한다. 예를 들어, 프로미스가 fulfilled 상태가 되면 프로미스의 처리 결과를 가지고 무언가를 해야 하고, 프로미스가 rejected 상태가 되면 프로미스의 처리 결과(에러)를 가지고 에러 처리를 해야 한다. 이를 위해 프로미스는 후속 처리 메서드 then, catch, finally를 제공한다.

resolve와 reject는 프로미스의 상태만 변경시키고, 후속 처리 메서드를 통해 후속 처리를 한다. 프로미스의 비동기 처리 상태가 변화하면 후속 처리 메서드에 인수로 전달한 콜백 함수가 선택적으로 호출된다. 이때 후속 처리 메서드의 콜백 함수에 프로미스의 처리 결과가 인수로 전달된다.

### Promise.prototype.then

then 메서드는 두 개의 콜백 함수를 인수로 전달받는다.

- 첫 번째 콜백 함수

  프로미스가 fulfilled 상태가 되면 호출된다.

- 두 번째 콜백 함수

  프로미스가 rejected 상태가 되면 호출된다.

```javascript
new Promise((resolve) => {
  resolve('fulfilled');
}).then(
  (v) => console.log(v),
  (e) => console.error(e),
); // fulfilled

new Promise((_, reject) => {
  reject('rejected');
}).then(
  (v) => console.log(v),
  (e) => console.error(e),
); // Error: rejected
```

then 메서드는 언제나 프로미스를 반환한다. 만약 then 메서드의 콜백 함수가 프로미스를 반환하면 그 프로미스를 그대로 반환하고, 콜백 함수가 프로미스가 아닌 값을 반환하면 그 값을 암묵적으로 resolve 또는 reject하여 프로미스를 생성해 반환한다.

---

### Promise.prototype.catch

catch 메서드는 한 개의 콜백 함수를 인수로 전달받는다. catch 메서드의 콜백 함수는 프로미스가 rejected 상태인 경우만 호출된다. then 메서드와 마찬가지로 언제나 프로미스를 반환한다.

---

### Promise.prototype.finally

finally 메서드는 한 개의 콜백 함수를 인수로 전달받는다. finally 메서드의 콜백 함수는 프로미스의 성공(fulfilled) 또는 실패(rejected)와 상관없이 무조건 한 번 호출된다. finally 메서드는 프로미스의 상태와 상관없이 공통적으로 수행해야 할 처리 내용이 있을 때 유용하다. finally 메서드도 then/catch 메서드와 마찬가지로 언제나 프로미스를 반환한다.

```javascript
const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '/users');
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) resolve(JSON.parse(xhr.response));
      else reject(new Error(xhr.status));
    };
  });
};

promiseGet('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log('I fucking got it'));
```

---

## 프로미스의 에러 처리

프로미스는 에러를 문제없이 처리할 수 있다. catch 메서드를 호출하면 내부적으로 `then(undefined, onRejected)`을 호출한다. 단, then 메서드의 두 번째 콜백 함수는 첫 번째 콜백 함수에서 발생한 에러를 캐치하지 못하고 코드가 복잡해져서 가독성이 좋지 않다. catch 메서드를 모든 then 메서드를 호출한 이후에 호출하면 비동기 처리에서 발생한 에러(rejected 상태)뿐만 아니라 then 메서드 내부에서 발생한 에러까지 모두 캐치할 수 있다. 또한 then 메서드에 두 번째 콜백 함수를 전달하는 것보다 catch 메서드를 사용하는 것이 가독성이 좋고 명확하다.

---

## 프로미스 체이닝

비동기 처리를 위한 콜백 패턴은 콜백 헬이 발생하는 문제가 있다. 프로미스는 then, catch, finally 후속 처리 메서드를 통해 콜백 헬을 해결한다.

then ➝ then ➝ catch 순서로 후속 처리 메서드를 호출할 수 있다. then, catch, finally 후속 처리 메서드는 언제나 프로미스를 반환하므로 연속적으로 호출할 수 있다. 이를 프로미스 체이닝(promise chaining)이라 한다.

프로미스는 프로미스 체이닝을 통해 비동기 처리 결과를 전달받아 후속 처리를 하므로 비동기 처리를 위한 콜백 패턴에서 발생하던 콜백 헬이 발생하지 않는다. 다만 프로미스도 콜백 패턴을 사용하므로 콜백 함수를 사용하지 않는 것은 아니다.

콜백 패턴은 가독성이 좋지 않다. 이 문제는 ES8에서 도입된 async/await를 통해 해결할 수 있다. async/await를 사용하면 프로미스의 후속 처리 메서드 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.

---

## 프로미스의 정적 메서드

1. Promise.resolve / Promise.reject

Promise.resolve와 Promise.reject 메서드는 이미 존재하는 값을 래핑하여 프로미스를 생성하기 위해 사용한다.

```javascript
const resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log); // [1,2,3]

const resolvedPromise2 = new Promise((resolve) => resolve([1, 2, 3]));
resolvedPromise2.then(console.log); // 위와 같은 동작

const rejectedPromise = Promise.reject(new Error('Error!'));
rejectedPromise.catch(console.err);

const rejectedPromise2 = new Promise((_, reject) =>
  reject(new Error('Error!')),
);
rejectedPromise2.catch(console.err);
```

2. Promise.all

Promise.all 메서드는 여러 개의 비동기 처리를 모두 병렬(parallel) 처리할 때 사용한다.

다수의 then, catch 메서드를 사용하여 프로미스를 캐치할 때, 프로미스 체이닝이라 한다. 프로미스 체이닝시, 다음 메서드는 전의 메서드가 완료되어 프로미스를 반환할 때, 콜백 함수가 실행된다.

순서가 상관 없는 프로미스일 때에는 프로미스 체이닝은 성능에 악영향을 주기 때문에, all 메서드를 사용하여 여러 개의 비동기 처리를 병렬 처리한다.

Promise.all 메서드는 인수로 전달받은 배열의 모든 프로미스가 모두 fulfilled 상태가 되면 종료한다. 모든 프로미스가 fulfilled 상태가 되면 resolve된 처리 결과(위 예제의 경우 1, 2, 3)를 모두 배열에 저장해 새로운 프로미스를 반환한다. 이때 첫 번째 프로미스가 가장 나중에 fulfilled 상태가 되어도 Promise.all 메서드는 **첫 번째 프로미스가 resolve한 처리 결과부터 차례대로 배열에 저장해 그 배열을 resolve하는 새로운 프로미스를 반환한다. 즉, 처리 순서가 보장된다.**

```javascript
const requestData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const requestData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const requestData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 1000));

const res = [];
requestData1()
  .then((data) => {
    res.push(data);
    return requestData2();
  })
  .then((data) => {
    res.push(data);
    return requestData3();
  })
  .then((data) => {
    res.push(data);
    console.log(res);
  })
  .catch(console.err); // 약 6초 소요

const res2 = [];
Promise.all([requestData1, requestData2, requestData3])
  .then(console.log)
  .catch(console.err); // 약 3초 소요
```

3. Promise.race

Promise.race 메서드는 Promise.all 메서드와 동일하게 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다. Promise.race 메서드는 Promise.all 메서드처럼 모든 프로미스가 fulfilled 상태가 되는 것을 기다리는 것이 아니라 가장 먼저 fulfilled 상태가 된 프로미스의 처리 결과를 resolve하는 새로운 프로미스를 반환한다.

```javascript
const requestData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const requestData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const requestData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Promise.race([requestData1, requestData2, requestData3])
  .then(console.log)
  .catch(console.error(new Error(`${v} is not data`)));

// reject 없어서 catch문 동작 안함 + 에러는 reject 문에서 만들어야 함
```

4. Promise.allSettled

Promise.allSettled 메서드는 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다. 그리고 전달받은 프로미스가 모두 settled 상태(비동기 처리가 수행된 상태, 즉 fulfilled 또는 rejected 상태)가 되면 처리 결과를 배열로 반환한다. ES11(ECMAScript 2020)에 도입된 Promise.allSettled 메서드는 IE를 제외한 대부분의 모던 브라우저에서 지원한다.

```javascript
Promise.allSettled([
  new Promise((resolve) =>
    setTimeout(() => resolve('gerrard is the great'), 1000),
  ),
  new Promise((_, reject) =>
    setTimeout(
      () => reject(new Error('grandma plays better than shcoles and lampard')),
      2000,
    ),
  ),
])
  .then((v) => console.log([...v].forEach((n) => console.log(n.value))))
  .catch(console.log)
  .finally((v) => console.log(v));

// gerrard is the great
// undefined
// undefined
// undefined
// ?? ㅅㅂ

// .catch(console.error)
```

Promise.allSettled 메서드가 반환한 배열에는 fulfilled 또는 rejected 상태와는 상관없이 Promise.allSettled 메서드가 인수로 전달받은 모든 프로미스들의 처리 결과가 모두 담겨 있다.

Promise.allSettled 메서드가 반환한 배열에는 fulfilled 또는 rejected 상태와는 상관없이 Promise.allSettled 메서드가 인수로 전달받은 모든 프로미스들의 처리 결과가 모두 담겨 있다. 프로미스의 처리 결과를 나타내는 객체는 다음과 같다.

- 프로미스가 fulfilled일 경우, 비동기 처리 상태를 나타내는 status 프로퍼티와 처리 결과를 나타내는 value 프로퍼티를 갖는다.

- 프로미스가 rejected일 경우, 비동기 처리 상태를 나타내는 status 프로퍼티와 처리 결과를 가지고 있는 reason 프로퍼티를 갖는다.

---

## 마이크로태스크 큐

프로미스의 후속 처리 메서드의 콜백 함수는 태스크 큐가 아니라 마이크로태스크 큐(microtask queue/job queue)에 저장된다. 따라서, 태스크 큐에 저장되는 비동기 함수와 프로미스의 후속 처리 메서드는 처리 순서에 있어서 별개이다.

콜백 함수나 이벤트 핸들러를 일시 저장한다는 점에서 태스크 큐와 동일하지만 마이크로태스크 큐는 태스크 큐보다 우선순위가 높다. 즉, 이벤트 루프는 콜 스택이 비면 먼저 마이크로태스크 큐에서 대기하고 있는 함수를 가져와 실행한다. 이후 마이크로태스크 큐가 비면 태스크 큐에서 대기하고 있는 함수를 가져와 실행한다.

---
