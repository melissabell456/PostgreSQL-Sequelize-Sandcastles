# PostgreSQL-Sequelize-Sandcastles

To get all lifeguards: ``` http://localhost:3000/lifeguards ```
To get all beaches: ``` http://localhost:3000/lifeguards ```

To add a new lifeguard:
  Send the below to PUT ``` http://localhost:3000/lifeguards ```:  
    ```{
    "firstName": "FIRSTNAME",
    "lastName": "LASTNAME",
    "location": "CITY, STATE ABBR"
    }```

To add a new beach:
  Send the below to PUT ``` http://localhost:3000/beaches ```:  
    ```{    
    "name": "BEACHNAME",
    "location": "CITY, STATE, COUNTRY",
    "sand_rating": INT
    } ```