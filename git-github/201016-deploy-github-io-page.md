# How to deploy static github.io page with hexo

## Start To Deploy
1. npm 통해 hexo install하기
- node.js 최신버전으로 업데이트 필요
- git 필요

2. hexo folder 만들기
```
$ hexo init <폴더이름>
```
3. 깃헙에 .io 레포지토리 생성
- 레포지토리 이름 : `<사용자이름>.github.io` 

4. `_config.yml` 파일 통해 설정 변경하기
- 블로그 정보 - title, subtitle, keywords, author
- 깃헙 정보 - deploy - repo ( 깃헙 배포 페이지 주소)
- 접속할 주소 - url

5. hexo-deployer-git 플러그인 설치
```$ npm install --save-dev hexo-deployer-git```
- 배포를 위해서 hexo-deployer-git 플러그인이 필요하다.


6. public 디렉토리를 비우고, 정적 파일 생성하기
```$ hexo clean```
- 변경점을 잘 잡아내기 위해 public 디렉토리를 비운다.
```$ hexo generate```
- 정적 파일 생성한다.
```$ hexo clean && hexo generate```
- 두 명령어를 위와 같이 붙여쓸 수 있다.

7. 배포하기
```hexo deploy```
- `_config.yml` 파일에 입력했던 깃헙 url을 주소창에 입력하면 hexo로 배포 완료!
- 단, 배포까지 시간이 쪼~끔 걸릴 수 있다.

## How To Write A Post

__포스트 만들기__
```$ hexo new <포스트명>```
- 위 명령을 실행하면 hexo폴더/source/_posts 디렉토리에 포스트명.md 파일이 생성된다.


