# 🦄React와 Node를 이용한 쇼핑몰
"리액트를 다루는 기술" 이라는 책을 공부한 후에 쇼핑몰 프로젝트를 혼자 스스로 만들어 보았습니다.
 
프로젝트 주소 : 
http://whanshop.herokuapp.com/  
### 대표적인 기능
* 로그인, 회원가입 기능
* 쇼핑몰 게시판 기능
* 상품 업로드 기능
* 상품 검색 기능
* 상세페이지 상품 선택 후 장바구니에 추가, 삭제 기능
* 아임포트 api를 사용한 결제 기능 
* 결제 후 결제내역 페이지 기능

## 🔨기술 스택
<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white">
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-Saga-999999?style=for-the-badge&logo=Redux-Saga&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
  <img src="https://img.shields.io/badge/Koa-33333D?style=for-the-badge&logo=Koa&logoColor=white">
</div>


## 🗃️Project Folder

```
📁blog-backend
📁node_modules
📁src
├── 📁api
├── 📁lib
├── 📁models
├── index.js
├── .env
├── .gitignore
└── .eslintrc.json
📁blog-frontend
📁node_modules
📁public
📁src
├── 📁components
├── 📁constants
├── 📁containers
├── 📁history
├── 📁lib
├── 📁modules
├── 📁pages
├── 📁payment
├── App.js
├── index.js
├── setupProxy.js
└── .gitignore

```

## 📌주요 기능 화면
#### **1. 메인화면**   

- 메인페이지 상단에는 Navbar가 있고 고정으로 되어있습니다.
- 메인 페이지는 상단에 동영상과 중간에 이미지 슬라이드로 구성 하였습니다.
- 메인페이지 중간에는 상품목록을 볼 수 있습니다. 
- 상품 이미지를 클릭하여 상품 상세 정보를 볼 수 있습니다. 

#### ![메인페이지](https://user-images.githubusercontent.com/98297436/192531793-3abac667-5d94-43dc-8671-3d33f92b84e2.gif)

#### **2. 로그인/회원가입**   

- JWT를 통한 회원인증 시스템 구현
- 회원인증 에러 처리
- 로그인 상태 유지
- 로그아웃 기능 구현

#### ![로그인](https://user-images.githubusercontent.com/98297436/192680108-74166645-799d-45a8-ac32-88e7e7025a11.gif)

#### **3. 게시판**   

- 로그인 했을 때만 글을 쓸 수 있게 구현
- 글 작성 시 사용자 정보 넣기
- 글 수정 및 삭제시 권한 확인하기
- 사용자 이름이나 태그로 필터링 하기
- 페이지네이션 구현
- quill 에디터 사용

#### ![게시판](https://user-images.githubusercontent.com/98297436/192680926-22a2bddd-d3b5-4b0b-a63a-6f7b77d4724c.gif)

#### **4. 검색기능**   




