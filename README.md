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
- Create, find and delete credentials
- Create, find and delete notes

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

</br>

## Credentials

### Create credential:

```http
  POST /credentials/create
```

Resquest:

|Headers         | Type   | Description                |
|----------------|--------|----------------------------|
|`Authorization` |`Bearer`|**Reuqired**. Bearer token  |

</br>

|Body            | Type   | Description                    |
|----------------|--------|--------------------------------|
|`title`         |`string`|**Reuqired**. credential title  |
|`url`           |`string`|**Reuqired**. site url          |
|`userName`      |`string`|**Reuqired**. username on site  |
|`password`      |`string`|**Reuqired**. site password     |

</br>

`title need to be unique for a user`

### Find credential:

```http
  GET /credential/getCredential?{id=credentialId}
  ```

|Headers         | Type   | Description                |
|----------------|--------|----------------------------|
|`Authorization` |`Bearer`|**Reuqired**. Bearer token  |

|Query | Type   | Description        |
|------|--------|--------------------|
|`id`  |`string`| use credential id  |

- To get all users credential you shuld not use query with creedential id.

- With you need especfic credential you neet to use query with credential id.

Response:

```json
{
    "id": 1,
    "userId": 1,
    "title": "unique ",
    "url": "https://www.prisma.io/docs/concepts/components/prisma-schema/relations",
    "userName": "luis",
    "password": "1234"
}
```
<p style="color:red"> **With you search for all user credential is going return for you array of object** </p>

### Delete Credential:

```http
  GET /credential/deleteCredential/{credentialId}
```

|Headers         | Type   | Description                |
|----------------|--------|----------------------------|
|`Authorization` |`Bearer`|**Reuqired**. Bearer token  |

</br>

|Params          | Type   | Description                |
|----------------|--------|----------------------------|
|`credentialId`  |`number`|**Reuqired**. credential id |


</br>

## Notes

### Create Note:

```http
  POST /notes/create
```

|Headers         | Type   | Description                |
|----------------|--------|----------------------------|
|`Authorization` |`Bearer`|**Reuqired**. Bearer token  |

</br>

|Body    | Type   | Description               |
|--------|--------|---------------------------|
|`title` |`string`|**Reuqired**. note title   |
|`note`  |`string`| **Required**. note content|

`title max length: 50`\
`note max length: 100`

### Find notes:

```http
  GET /notes/getNotes?{notesId=notesId}
  ```

|Headers         | Type   | Description                |
|----------------|--------|----------------------------|
|`Authorization` |`Bearer`|**Reuqired**. Bearer token  |

|Query | Type   | Description        |
|------|--------|--------------------|
|`notesId`  |`string`| use note id |

- To get all users notes you shuld not use query with creedential id.

- With you need especfic note you neet to use query with credential id.

Response:

```json
{
    "id": 5,
    "title": "123sd",
    "note": "nao sei oq dizer",
    "userId": 2
  }
```
<p style="color:red"> **With you search for all user credential is going return for you array of object** </p>
</br>

### Delete note:

```http
  GET /notes/deleteNote/{noteId}
```

|Headers         | Type   | Description                |
|----------------|--------|----------------------------|
|`Authorization` |`Bearer`|**Reuqired**. Bearer token  |

</br>

|Params          | Type   | Description                |
|----------------|--------|----------------------------|
|`noteId`  |`number`|**Reuqired**. note id|

</br>

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