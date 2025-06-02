# welcome to flight service

## project setup
-Clone the project on your local
-Execute `npm install` on the same path of your root directory of the downloaded project
-Create a `.env` file in your root directory and add the environment variable
-`PORT=3000`
-Inside the `src/config` folder create an `config.json` file and add the follwing piece of json

```
{
 "development": {
    "username":<YOUR_DB_LOGIN_NAME>,
    "password":<YOUR_DATABASE_PASSWORD>,
    "database": "Flight_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}


```
 


