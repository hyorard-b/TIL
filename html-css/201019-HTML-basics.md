# HTML Basics

### 현재 웹 표준

---

현재 웹 표준은 총 3가지로 다음과 같다.

- HTML4 (HTML4.01)
- XHTML ( XHTML 1.0 )
- HTML5

### HTML4

---

HTML4의 문법은 상당히 느슨하다. 예를 들어,

- `<H1> head1 <h1>` - 소문자, 대문자를 구분하지 않는다.
- `<p> text` - 닫는 태그를 생략할 수 있다.

### XML

---

이를 보완하기 위해 XML이 탄생하였다.

XML형식은 문법이 더 **엄격** 하고 사용자 간에 **커스텀** 한 태그를 사용할 수 있었다.

### XHTML

---

이를 차용하여 **W3C** 에서 XML의 특성을 가미한 XHTML을 탄생시켰다.

동시에, XHTML 2.0 버전 작업을 진행 중에 있었다.

### HTML5

---

그러나, 애플, 모질라, 오페라와 같은 벤더들은 XHTML의 하위 호환에 치명적 문제가 있음을 알고 WHATWG를 공동설립하였다.

WHATWG는 W3C와 별개로 Web Application 1.0과 Web Forms2.0를 만들었고,

이에 W3C는 공개적으로 **XHTML의 실패** 를 인정 후 WHATWG의 표준안을 대부분 수용해 HTML5가 탄생하게 되었다.

HTML4 에는 API(자바스크립트 영역)가 없었지만, HTML5는 API를 가지고 있어,

HTML5는

- Markup
- API

두 가지 특성을 동시에 가진다.

### 아웃라인 알고리즘

---

HTML5에는 새로운 태그들을 추가되었을까?

- 아웃라인 알고리즘은 웹 페이지의 **정보 구조** 를 판별할 수 있도록 하는 개념으로,
  아웃라인 알고리즘을 구현할 수 있는 태그들이 추가되었다.

HTML5 이전에는 웹 페이지의 정보 구조를 명확히 판별하기 어려웠던 걸까?

1. HTML5 이전

- 암묵적인 표기방식으로 구조를 만들었다.

  ex) `h1`이 블록의 역할을 하여, 커피와 역사인지 커피의 역사인지 판단하기 어려웠다.

```HTML
<h1>
	<p>커피</p>
</h1>
<h1>
	<p>역사</p>
</h1>
```

2. HTML5 이후

- 명시적으로 표현하기 위한 `article`, `section` 같은 태그 등

  ex) 커피의 역사로 명시적인 구조 표현이 가능해졌다.

```HTML
<article>
	<h1>커피</h1>
		<p> some coffee </p>
	<article>
		<h1>역사</h1>
			<p> some history </p>
	</article>
</article>
```

### DTD

---

DTD : dcoument type dictation

DTD의 용도는 무엇일까?

- 브라우저에게 문서 타입을 알려줘야 하기 때문이다.

브라우저에게 문서 타입을 왜 알려줘야 할까?

- 최신 웹 표준을 사용해서 만든 문서니까, 최신 웹 표준을 사용해서 구조화하라구

### 논리적 구조

---

아이디 -> 비밀번호 -> 로그인 -> 로그인상태유지 - 논리적으로 맞지 않다.

아이디 -> 로그인 -> 비밀번호 -> 로그인상태유지 - 역시 논리적으로 맞지 않다.

아이디 -> 비밀번호 -> 로그인상태유지 -> 로그인 - 논리적인 구조이다.

### 시맨틱마크업

---

```html
<h1>
    <a><image src="" alt=""></a>
</h1>

```

- h1 : 시맨틱 요소
- a : 기능적 요소
- image : 시각적 요소

### 네이밍

---

CSS 방법론

1. SMCSS
2. OOCSS
3. BEM -> 최근 많이 사용. TIL/html-css/BEM 참고!

변수 네이밍 방식

1. pascal case
2. kebab case
3. camel case

### WAI-ARIA 기술

---

RIA기술 : 웹 표준이 마련되기 전 third-party가 만든 확장 기술으로
**웹 표준이 아님!**

WAI-ARIA : WAI가 RIA 기술을 Accessible하게 만든 기술

```HTML
<div role='banner'></div>
<div role='main'></div>
<div role='contentinfo'></div>

<a role="button"></a>
```

- 아무 의미 없는 div태그에 banner,main 등의 시맨틱 의미 부여
- 링크 태그인 a 태그에 button의 시맨틱 역할 부여

그러나 최신 웹 표준 HTML5를 쓰면 된다..!

### DIV 태그를 사용하는 경우

---

```HTML
<header></header>
<div>some ads</div>
<main></main>
<footer></footer>
```

header나 main, footer에 **포함되지 않는 요소** 들을 `div` 태그를 이용해 배치한다.

### id보다 class 속성을 활용하는 이유

---

id는 재사용이 불가능하기 때문에 컴포넌트화에 비효율적이다.

1. 최근에는 스타일링을 컴포넌트화하는 것이 트렌드
2. 선택자들을 조합하여 완성
3. 재사용 가능한 class가 가장 적합

### class 속성 vs nth-child()

---

1. class 속성

```CSS
.group{
    display: flex;
}
.group1{
    background: tomato;
}
.group2{
    background: yellowgreen;
}

```

- 성능 면에서 nth-child보다 선택자를 이용하는 것이 뛰어나다
- nth-child()는 DOM트리를 이용해서 찾아가기 때문

2. nth-child()

```CSS
div:nth-child(2n){
    font-weight: bolder;
}
```

- 요소들을 묶어서 스타일링할 때 더 효율적일 경우가 있다.

### SEO (검색 최적화)

---

`<title></title>`

- title 태그 내부 내용은 **검색 최적화** 와 **웹 접근성** 을 위해 페이지마다 본문 내용의 중요 내용을 넣어, **독립적** 으로 작성해야 한다.

### WCAG

---

- WAI에서 만든 웹 접근성을 위한 가이드라인이다.
- 최근 버전은 2.1
- 본문 내용을 입력하기 전에, skip navigation을 두어 웹 접근성을 높이기를 권장하고 있음.

### Web Font

---

- 클라이언트가 문서를 요청하면, 클라이언트에 해당 폰트가 설치되어 있지 않다면, 다운받아서 사용하고, 설치되어 있다면 그것을 바로 사용함

- 한글은 용량이 커서, 큰 용량의 폰트를 사용하면 성능 이슈가 발생할 수 있음 (폰트 다운받아지기 전에 깜빡거림)

추천 폰트 - Noto Sans, **Spoqa Han Sans**

> ### Spoqa Han Sans 페이지
>
> 용량 다이어트를 감행해 웹 페이지에서도 부담 없이 사용할 수 있습니다.
> 노토 산스를 포함한 한글꼴은 전체 용량이 크기 때문에 웹에서 사용하기에 좋지 않습니다. 이에 11,172자에서 한글꼴 완성형의 최소 단위인 2,350자로 줄였습니다. 첫 버전의 용량은 16MB에서 441KB 수준으로 줄었습니다.
