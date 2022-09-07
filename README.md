<p align="center"> 
    <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/locked_1f512.png">
</p>

<h1 align="center">DrivenPass</h1>

<div align="center">
  <h3>Built With</h3>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" heigth="30px">
  <!--  Badges  source:  https://dev.to/envoy_/150-badges-for-github-pnk  -->
</div>

# Description


# Features
- Signup and signin

##  API  Reference
### Signup

```http 
  POST /users/signUp
```

Request:
|Body            | Type   | Description               |
|----------------|--------|---------------------------|
|`name`          |`string`|**Reuqired**. name user    |
|`email`         |`string`|**Reuqired**. email user   |
|`password`      |`string`|**Reuqired**. user password|
|`repeatPassword`|`string`|**Reuqired**. user password|

`email format: user@user.com` \
`password min length: 10 caracters`\
`repeatPassword is ref from password`


</br>

### Signin
```http
  POST /users/signIn
```

Request:
|Body            | Type   | Description               |
|----------------|--------|---------------------------|
|`email`         |`string`|**Reuqired**. email user   |
|`password`      |`string`|**Reuqired**. user password|

Response:
```json
  token
```
`token: came with string in format jsonwebtoken`

##  Environment  Variables

To run this project, you will need to add the following environment variables to your .env file


`DATABASE_URL  =  postgres://UserName:Password@Hostname:5432/DatabaseName`
​
`PORT  =  number  #recommended:5000`

`SECRET_KEY = string`


##  Authors

​

-  Luís Henrique da Silva

​

https://github.com/luishsilva09