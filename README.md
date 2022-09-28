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
* 반응형 웹 기능 구현

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

#### **4. 상품업로드**   

- 관리자만 상품 업로드를 할 수 있게 구현
- base64를 사용하여 이미지를 업로드한다.
- 업로드를 한 상품은 메인페이지 상품목록에서 보여진다. 

#### ![상품업로드](https://user-images.githubusercontent.com/98297436/192681828-c80ff7c9-1601-4a97-8815-2de8febc9dd3.gif)

#### **5. 검색기능**  

- 내가 검색창에 입력한 값을 저장 한다음 이것을 includes한 상품을 filter로 걸러낸다 이때 이것을 map을써서 반복문을 돌린다. 

#### ![검색기능](https://user-images.githubusercontent.com/98297436/192681747-6be87183-681b-42f0-b385-f3f869932bd0.gif)

#### **6. 상세페이지 장바구나 추가/삭제**  

- modal창을 만들어 사이즈를 볼 수 있게 구현
- 사이즈와 수량을 정한다음에 장바구니 담으면 카트에 담겨진다.
- 로그인이 되어있지 않으면 로그인 부터 하라고 메시지가 나온다
- 장바구니에서는 삭제를 할 수 있다.

#### ![상세카트](https://user-images.githubusercontent.com/98297436/192681894-1cbed180-e381-4d53-9afc-d10f3c3f897a.gif)

#### **7. 결제 및 결제내역**  

- 아임포트 api이용하여 결제 기능 구현
- 결제 한 후에 결제한 ID와 결제 날짜 가격등 결제내역에 보여준다

#### ![결제](https://user-images.githubusercontent.com/98297436/192681937-87ab351b-8cf8-421b-a39a-90a0db7976e3.gif)

#### **8. 반응형 웹**  
#### ![반응형2](https://user-images.githubusercontent.com/98297436/192704264-fcebfe0a-ec2e-43b1-a897-b7e1667ac5fa.gif)


## 📚ERROR 해결 
#### - CORS에러
#### **- useEffect() 무한 로딩 에러**
#### **- map() is undefined**
#### **- propertiy is null**
#### **- propertiy not reading**
#### **- 새로고침시 로그인 유지가 되지 않음**
#### **- react-router 등 최신라이브러리 버전업으로 인해 문법에 맞지 않아 에러 발생**
#### **- material ui, ant등 설치시 에러 발생**
#### **- 서버쪽에서 require을 import로 바꿀때 설정 잘못으로 에러 발생**
