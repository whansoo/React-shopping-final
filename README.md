# ๐ฆReact์ Node๋ฅผ ์ด์ฉํ ์ผํ๋ชฐ
"๋ฆฌ์กํธ๋ฅผ ๋ค๋ฃจ๋ ๊ธฐ์ " ์ด๋ผ๋ ์ฑ์ ๊ณต๋ถํ ํ์ ์ผํ๋ชฐ ํ๋ก์ ํธ๋ฅผ ํผ์ ์ค์ค๋ก ๋ง๋ค์ด ๋ณด์์ต๋๋ค.
 
ํ๋ก์ ํธ ์ฃผ์ : 
http://whanshop.herokuapp.com/  
### ๋ํ์ ์ธ ๊ธฐ๋ฅ
* ๋ก๊ทธ์ธ, ํ์๊ฐ์ ๊ธฐ๋ฅ
* ์ผํ๋ชฐ ๊ฒ์ํ ๊ธฐ๋ฅ
* ์ํ ์๋ก๋ ๊ธฐ๋ฅ
* ์ํ ๊ฒ์ ๊ธฐ๋ฅ
* ์์ธํ์ด์ง ์ํ ์ ํ ํ ์ฅ๋ฐ๊ตฌ๋์ ์ถ๊ฐ, ์ญ์  ๊ธฐ๋ฅ
* ์์ํฌํธ api๋ฅผ ์ฌ์ฉํ ๊ฒฐ์  ๊ธฐ๋ฅ 
* ๊ฒฐ์  ํ ๊ฒฐ์ ๋ด์ญ ํ์ด์ง ๊ธฐ๋ฅ
* ๋ฐ์ํ ์น ๊ธฐ๋ฅ ๊ตฌํ

## ๐จ๊ธฐ์  ์คํ
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


## ๐๏ธProject Folder

```
๐shop-backend
๐node_modules
๐src
โโโ ๐api
โโโ ๐lib
โโโ ๐models
โโโ index.js
โโโ .env
โโโ .gitignore
โโโ .eslintrc.json
๐shop-frontend
๐node_modules
๐public
๐src
โโโ ๐components
โโโ ๐constants
โโโ ๐containers
โโโ ๐history
โโโ ๐lib
โโโ ๐modules
โโโ ๐pages
โโโ ๐payment
โโโ App.js
โโโ index.js
โโโ setupProxy.js
โโโ .gitignore

```

## ๐์ฃผ์ ๊ธฐ๋ฅ ํ๋ฉด
#### **1. ๋ฉ์ธํ๋ฉด**   

- ๋ฉ์ธํ์ด์ง ์๋จ์๋ Navbar๊ฐ ์๊ณ  ๊ณ ์ ์ผ๋ก ๋์ด์์ต๋๋ค.
- ๋ฉ์ธ ํ์ด์ง๋ ์๋จ์ ๋์์๊ณผ ์ค๊ฐ์ ์ด๋ฏธ์ง ์ฌ๋ผ์ด๋๋ก ๊ตฌ์ฑ ํ์์ต๋๋ค.
- ๋ฉ์ธํ์ด์ง ์ค๊ฐ์๋ ์ํ๋ชฉ๋ก์ ๋ณผ ์ ์์ต๋๋ค. 
- ์ํ ์ด๋ฏธ์ง๋ฅผ ํด๋ฆญํ์ฌ ์ํ ์์ธ ์ ๋ณด๋ฅผ ๋ณผ ์ ์์ต๋๋ค. 

#### ![๋ฉ์ธํ์ด์ง](https://user-images.githubusercontent.com/98297436/192531793-3abac667-5d94-43dc-8671-3d33f92b84e2.gif)

#### **2. ๋ก๊ทธ์ธ/ํ์๊ฐ์**   

- JWT๋ฅผ ํตํ ํ์์ธ์ฆ ์์คํ ๊ตฌํ
- ํ์์ธ์ฆ ์๋ฌ ์ฒ๋ฆฌ
- ๋ก๊ทธ์ธ ์ํ ์ ์ง
- ๋ก๊ทธ์์ ๊ธฐ๋ฅ ๊ตฌํ

#### ![๋ก๊ทธ์ธ](https://user-images.githubusercontent.com/98297436/192680108-74166645-799d-45a8-ac32-88e7e7025a11.gif)

#### **3. ๊ฒ์ํ**   

- ๋ก๊ทธ์ธ ํ์ ๋๋ง ๊ธ์ ์ธ ์ ์๊ฒ ๊ตฌํ
- ๊ธ ์์ฑ ์ ์ฌ์ฉ์ ์ ๋ณด ๋ฃ๊ธฐ
- ๊ธ ์์  ๋ฐ ์ญ์ ์ ๊ถํ ํ์ธํ๊ธฐ
- ์ฌ์ฉ์ ์ด๋ฆ์ด๋ ํ๊ทธ๋ก ํํฐ๋ง ํ๊ธฐ
- ํ์ด์ง๋ค์ด์ ๊ตฌํ
- quill ์๋ํฐ ์ฌ์ฉ

#### ![๊ฒ์ํ](https://user-images.githubusercontent.com/98297436/192680926-22a2bddd-d3b5-4b0b-a63a-6f7b77d4724c.gif)

#### **4. ์ํ์๋ก๋**   

- ๊ด๋ฆฌ์๋ง ์ํ ์๋ก๋๋ฅผ ํ  ์ ์๊ฒ ๊ตฌํ
- base64๋ฅผ ์ฌ์ฉํ์ฌ ์ด๋ฏธ์ง๋ฅผ ์๋ก๋ํ๋ค.
- ์๋ก๋๋ฅผ ํ ์ํ์ ๋ฉ์ธํ์ด์ง ์ํ๋ชฉ๋ก์์ ๋ณด์ฌ์ง๋ค. 

#### ![์ํ์๋ก๋](https://user-images.githubusercontent.com/98297436/192681828-c80ff7c9-1601-4a97-8815-2de8febc9dd3.gif)

#### **5. ๊ฒ์๊ธฐ๋ฅ**  

- ๋ด๊ฐ ๊ฒ์์ฐฝ์ ์๋ ฅํ ๊ฐ์ ์ ์ฅ ํ๋ค์ ์ด๊ฒ์ includesํ ์ํ์ filter๋ก ๊ฑธ๋ฌ๋ธ๋ค ์ด๋ ์ด๊ฒ์ map์์จ์ ๋ฐ๋ณต๋ฌธ์ ๋๋ฆฐ๋ค. 

#### ![๊ฒ์๊ธฐ๋ฅ](https://user-images.githubusercontent.com/98297436/192681747-6be87183-681b-42f0-b385-f3f869932bd0.gif)

#### **6. ์์ธํ์ด์ง ์ฅ๋ฐ๊ตฌ๋ ์ถ๊ฐ/์ญ์ **  

- modal์ฐฝ์ ๋ง๋ค์ด ์ฌ์ด์ฆ๋ฅผ ๋ณผ ์ ์๊ฒ ๊ตฌํ
- ์ฌ์ด์ฆ์ ์๋์ ์ ํ๋ค์์ ์ฅ๋ฐ๊ตฌ๋ ๋ด์ผ๋ฉด ์นดํธ์ ๋ด๊ฒจ์ง๋ค.
- ๋ก๊ทธ์ธ์ด ๋์ด์์ง ์์ผ๋ฉด ๋ก๊ทธ์ธ ๋ถํฐ ํ๋ผ๊ณ  ๋ฉ์์ง๊ฐ ๋์จ๋ค
- ์ฅ๋ฐ๊ตฌ๋์์๋ ์ญ์ ๋ฅผ ํ  ์ ์๋ค.

#### ![์์ธ์นดํธ](https://user-images.githubusercontent.com/98297436/192681894-1cbed180-e381-4d53-9afc-d10f3c3f897a.gif)

#### **7. ๊ฒฐ์  ๋ฐ ๊ฒฐ์ ๋ด์ญ**  

- ์์ํฌํธ api์ด์ฉํ์ฌ ๊ฒฐ์  ๊ธฐ๋ฅ ๊ตฌํ
- ๊ฒฐ์  ํ ํ์ ๊ฒฐ์ ํ ID์ ๊ฒฐ์  ๋ ์ง ๊ฐ๊ฒฉ๋ฑ ๊ฒฐ์ ๋ด์ญ์ ๋ณด์ฌ์ค๋ค

#### ![๊ฒฐ์ ](https://user-images.githubusercontent.com/98297436/192681937-87ab351b-8cf8-421b-a39a-90a0db7976e3.gif)

#### **8. ๋ฐ์ํ ์น**  
#### ![๋ฐ์ํ2](https://user-images.githubusercontent.com/98297436/192704264-fcebfe0a-ec2e-43b1-a897-b7e1667ac5fa.gif)


## ๐ERROR ํด๊ฒฐ 
#### - CORS์๋ฌ
#### **- useEffect() ๋ฌดํ ๋ก๋ฉ ์๋ฌ**
#### **- map() is undefined**
#### **- propertiy is null**
#### **- propertiy not reading**
#### **- ์๋ก๊ณ ์นจ์ ๋ก๊ทธ์ธ ์ ์ง๊ฐ ๋์ง ์์**
#### **- react-router ๋ฑ ์ต์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ฒ์ ์์ผ๋ก ์ธํด ๋ฌธ๋ฒ์ ๋ง์ง ์์ ์๋ฌ ๋ฐ์**
#### **- material ui, ant๋ฑ ์ค์น์ ์๋ฌ ๋ฐ์**
#### **- ์๋ฒ์ชฝ์์ require์ import๋ก ๋ฐ๊ฟ๋ ์ค์  ์๋ชป์ผ๋ก ์๋ฌ ๋ฐ์**
