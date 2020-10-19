# How To Write Commit Message Properly

## Why do we write commit message with a structure

- 코드 가독성, 클린 코드, 효율적인 협업 .. 등

## 1. structure

```
type: subject

body

footer

```



## 2. type

- feat : 새로운 기능 추가
- docs : 문서 수정
- fix : 버그 수정
- style : 코드 포매팅 변경, CSS 스타일링 변경 등
- refactor : 코드 리팩토링
- test : 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정

## 3. subject

- 제목은 과거 시제X, 명령어로!

`Added some methods` -> X

`Add some methods` -> O

## 4. body

- 부연 설명이 필요할 때 작성
- 선택사항이므로 필수가 아니다.
- 제목과 한 칸 띄워 작성한다.

## 5. footer

- 선택사항이므로 필수가 아니다.
- issue tracker id? 작성할 때 사용한다.
