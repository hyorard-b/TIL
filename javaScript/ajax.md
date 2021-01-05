# Ajax

## Ajax란?

Ajax(Asynchronous Javascript And XML)란 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식을 말한다.

Ajax는 브라우저에서 제공하는 Web API인 XMLHttpRequest 객체를 기반으로 동작한다. XMLHttpRequest는 HTTP 비동기 통신을 위한 메서드와 프로퍼티를 제공한다.

Ajax 이전의 웹페이지는 html 태그로 시작해서 html 태그로 끝나는 완전한 HTML을 서버로부터 전송받아 웹페이지 전체를 처음부터 다시 렌더링하는 방식으로 동작했다. 따라서 화면이 전환되면 서버로부터 새로운 HTML을 전송받아 웹페이지 전체를 처음부터 다시 렌더링했다. 이 방식은 다음과 같은 단점이 존재한다.

1. 변경할 필요가 없는 부분까지 포함된 HTML을 매번 서버로부터 받아온다.
2. 변경할 필요가 없는 부분까지 처음부터 다시 렌더링한다. 이 때 순간적으로 화면이 깜빡거리는 현상이 발생한다.
3. 클라이언트와 서버와의 통신이 동기 방식으로 동작하기 때문에 서버로부터 응답이 있을 때 까지 다음 처리는 블로킹된다.

이에 반해 Ajax는 다음과 같은 장점이 존재한다.

1. 변경할 필요가 있는 데이터만 전송받는다.
2. 변경할 필요가 없는 부분은 다시 렌더링하지 않아 화면이 깜빡거리는 현상이 발생하지 않는다.
3. 클라이언트와 서버와의 통신이 비동기 방식으로 동작하기 때문에 응답받을 때까지 블로킹이 발생하지 않는다.

---

## JSON

JSON(JavaScript Object Notation)은 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷이다. 자바스크립트에 종속되지 않는 언어 독립형 데이터 포맷으로, 대부분의 프로그래밍 언어에서 사용할 수 있다.

### JSON 표기 방식

JSON은 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트다.

JSON의 키는 반드시 큰따옴표(작은따옴표 사용 불가)로 묶어야 한다. 값은 객체 리터럴과 같은 표기법을 그대로 사용할 수 있다. 하지만 문자열은 반드시 큰따옴표(작은따옴표 사용 불가)로 묶어야 한다.

---

### JSON.stringify

JSON.stringify 메서드는 객체를 JSON 포맷의 문자열로 변환한다. 클라이언트가 서버로 객체를 전송하려면 객체를 문자열화해야 하는데 이를 직렬화(serializing)라 한다.

```javascript
const thiago = {
  name: 'thiago alcantara',
  age: 31,
  preferredFoot: 'right',
  backNumber: 6,
  position: {
    MF: ['DLP', 'AP', 'MEZ'],
    W: ['IF', 'W'],
  },
  reputation: 'world class',
};

const filter = (key, value) => (typeof value === 'number' ? undefined : value);

const json = JSON.stringify(thiago, filter, 2);
```

---

### JSON.parse

JSON.parse 메서드는 JSON 포맷의 문자열을 객체로 변환한다. 서버로부터 클라이언트에게 전송된 JSON 데이터는 문자열이다. 이 문자열을 객체로서 사용하려면 JSON 포맷의 문자열을 객체화해야 하는데 이를 역직렬화(deserializing)라 한다.

---

## XMLHttpRequest

브라우저는 주소창이나 HTML의 form 태그 또는 a 태그를 통해 HTTP 요청 전송 기능을 기본 제공한다. 자바스크립트를 사용하여 HTTP 요청을 전송하려면 XMLHttpRequest 객체를 사용한다. Web API인 XMLHttpRequest 객체는 HTTP 요청 전송과 HTTP 응답 수신을 위한 다양한 메서드와 프로퍼티를 제공한다.

### XMLHttpRequest 객체 생성

XMLHttpRequest 객체는 XMLHttpRequest 생성자 함수를 호출하여 생성한다. XMLHttpRequest 객체는 브라우저에서 제공하는 Web API이므로 브라우저 환경에서만 정상적으로 실행된다.

---

### XMLHttpRequest 객체의 프로퍼티와 메서드

1. 프로토타입 프로퍼티

   | 프로토타입 프로퍼티 | 설명                                                                                                                                          |
   | :-----------------: | :-------------------------------------------------------------------------------------------------------------------------------------------- |
   |     readyState      | HTTP 요청의 현재 상태를 나타내는 정수로 다음과 같은 정적 프로퍼티 값을 갖는다. UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 |
   |       status        | HTTP 요청에 대한 응답 상태를 나타내는 정수로, HTTP 상태 코드와 같다.                                                                          |
   |     statusText      | HTTP 요청에 대한 응답 메시지를 나타내는 문자열로 `200 OK`에서 `OK`와 같다.                                                                    |
   |    responseType     | HTTP 응답 타입으로, document, json, text, blob 등이 있다.                                                                                     |
   |      response       | HTTP 요청에 대한 응답 몸체로, responseType에 따라 타입이 다르다.                                                                              |
   |    responseText     | 서버가 전송한 HTTP 요청에 대한 응답 문자열이다.                                                                                               |

2. 이벤트 핸들러 프로퍼티

   | 이벤트 핸들러 프로퍼티 | 설명                                              |
   | :--------------------: | :------------------------------------------------ |
   | **onreadystatechange** | readyState 프로퍼티 값이 변경된 경우              |
   |      onloadstart       | HTTP 요청에 대한 응답을 받기 시작한 경우          |
   |       onprogress       | HTTP 요청에 대한 응답을 받는 도중 주기적으로 발생 |
   |        onabort         | abort 메서드에 의해 HTTP 요청이 중단된 경우       |
   |      **onerror**       | HTTP 요청에 에러가 발생한 경우                    |
   |       **onload**       | HTTP 요청이 성공적으로 완료된 경우                |
   |       ontimeout        | HTTP 요청 시간이 초과한 경우                      |
   |       onloadend        | HTTP 요청이 완료되어 성공하거나 실패하면 발생     |

3. 객체 메서드

   |        메서드        | 설명                                     |
   | :------------------: | :--------------------------------------- |
   |       **open**       | HTTP 요청 초기화                         |
   |       **send**       | HTTP 요청 전송                           |
   |      **abort**       | 이미 전송된 HTTP 요청 중단               |
   | **setRequestHeader** | 특정 HTTP 요청 헤더의 값을 설정          |
   |  getResponseHeader   | 특정 HTTP 요청 헤더의 값을 문자열로 반환 |

4. 객체의 정적 프로퍼티

   |  정적 프로퍼티   | 값  | 설명                                  |
   | :--------------: | :-- | :------------------------------------ |
   |      UNSENT      | 0   | open 메서드 호출 이전                 |
   |      OPENED      | 1   | open 메서드 호출 이후                 |
   | HEADERS_RECEIVED | 2   | send 메서드 호출 이후                 |
   |     LOADING      | 3   | 서버 응답 중(응답 데이터 미완성 상태) |
   |     **DONE**     | 4   | 서버 응답 완료                        |

---

### HTTP 요청 전송

HTTP 요청을 전송하는 경우 다음 순서를 따른다.

1. XMLHttpRequest.prototype.open 메서드로 HTTP 요청을 초기화한다.
2. 필요에 따라 XMLHttpRequest.prototype.setRequestHeader 메서드로 특정 HTTP 요청의 헤더 값을 설정한다.
3. XMLHttpRequest.prototype.send 메서드로 HTTP 요청을 전송한다.

- XMLHttpRequest.prototype.open

  | 매개변수 | 설명                                                            |
  | :------: | :-------------------------------------------------------------- |
  |  method  | HTTP 요청 메서드로, GET,POST,PUT,DELETE 등이 있다.              |
  |   url    | HTTP 요청을 전송할 URL이다.                                     |
  |  async   | 비동기 요청 여부로, 기본값은 true이며 비동기 방식으로 동작한다. |

  ```javascript
  const thiago = {
    name: 'thiago alcantara',
    age: 31,
    preferredFoot: 'right',
    backNumber: 6,
    position: {
      MF: ['DLP', 'AP', 'MEZ'],
      W: ['IF', 'W'],
    },
    reputation: 'world class',
  };

  const xhr = new XMLHttpRequest();

  xhr.open('GET', '/users');
  ```

- XMLHttpRequest.prototype.send

  send 메서드는 open 메서드로 초기화된 HTTP 요청을 서버에 전송한다. 기본적으로 서버로 전송하는 데이터는 GET, POST 요청 메서드에 따라 전송 방식에 차이가 있다.

  - GET 메서드의 경우 데이터를 URL의 일부분인 쿼리 문자열로 서버에 전송한다.
  - POST 메서드의 경우 데이터(페이로드)를 요청 몸체에 담아 전송한다.

  send 메서드에는 요청 몸체에 담아 전송할 데이터(페이로드)를 인수로 전달할 수 있다. 페이로드가 객체인 경우 반드시 JSON.stringify 메서드를 사용하여 직렬화한 다음 전달해야 한다.

  ```javascript
  xhr.send(JSON.stringify(thiago, null, 2));

  const xhrPost = new XMLHttpRequest();

  xhrPost.open('POST', '/users');
  xhrPost.send(JSON.stringify(thiago, null, 2));
  ```

  **HTTP 요청 메서드가 GET인 경우 send 메서드에 페이로드로 전달한 인수는 무시되고 요청 몸체는 null로 설정된다.**

- XMLHttpRequest.prototype.setRequestHeader

  setRequestHeader 메서드는 특정 HTTP 요청의 헤더 값을 설정한다. setRequestHeader 메서드는 반드시 open 메서드를 호출한 이후에 호출해야 한다. 자주 사용하는 HTTP 요청 헤더에는 Content-type과 Accept가 있다.

  Content-type은 요청 몸체에 담아 전송할 데이터의 MIME 타입의 정보를 표현한다. 자주 사용되는 MIME 타입은 다음과 같다.

  |  MIME 타입  | 서브타입                                           |
  | :---------: | :------------------------------------------------- |
  |    text     | text/plain, text/html, text/css, text/javascript   |
  | application | application/json, application/x-www-form-urlencode |
  |  multipart  | multipart/formed-data                              |

  ```javascript
  const xhrPost = new XMLHttpRequest();

  xhrPost.open('POST', '/users');
  xhrPost.setRequestHeader('content-type', 'application/json');

  // 응답받을 데이터의 MIME 타입을 Accept로 지정
  // xhrPost.setRequestHeader('accept', 'application/json');
  xhrPost.send(JSON.stringify(thiago, null, 2));
  ```

  HTTP 클라이언트가 서버에 요청할 때 서버가 응답할 데이터의 MIME 타입을 Accept로 지정할 수 있다. 만약 Accept 헤더를 설정하지 않으면 send 메서드가 호출될 때 Accept 헤더가 `*/*`으로 전송된다.

---

### HTTP 응답 처리

서버가 전송한 응답을 처리하려면 XMLHttpRequest 객체가 발생시키는 이벤트를 캐치해야 한다. XMLHttpRequest 객체는 onreadystatechange, onload, onerror 같은 이벤트 핸들러 프로퍼티를 갖는다. 이 이벤트 핸들러 프로퍼티 중에서 HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티 값이 변경된 경우 발생하는 readystatechange 이벤트를 캐치하여 다음과 같이 HTTP 응답을 처리할 수 있다.

```javascript
const xhr = new XMLHttpRequest();

// https://jsonplaceholder.typicode.com은 Fake REST API를 제공하는 서비스임
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  if (xhr.status === 200) console.log(JSON.parse(xhr.response));
  else console.error('Error', xhr.status, xhr.statusText);
};

xhr.onload = () => {
  // do something
};
```

readystatechange 이벤트 대신 load 이벤트를 캐치해도 좋다. load 이벤트는 HTTP 요청이 성공적으로 완료된 경우 발생한다. 따라서 load 이벤트를 캐치하는 경우 xhr.readyState가 XMLHttpRequest.DONE인지 확인할 필요가 없다.
