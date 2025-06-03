# welcome to flight service

## project setup
- Clone the project on your local
- Execute `npm install` on the same path of your root directory of the downloaded project
- Create a `.env` file in your root directory and add the environment variable
- `PORT=3000`
- Inside the `src/config` folder create an `config.json` file and add the follwing piece of json

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
- Once you have added db config as listed above,go to the src folder from your terminal and execute  `npx sequelize db:create`
## db design
- Airplane Table
- Flights
- Airport
- City

- A Flight belongs to an Airplane but one Airplane can be used to multiple flights
- A city has multiple Airports but one Airport belongs to a City
- One Airport can have many flights, but a Flight belongs to one Airport
 


