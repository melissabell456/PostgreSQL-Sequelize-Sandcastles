# PostgreSQL-Sequelize-Sandcastles

To get all lifeguards:
``` http://localhost:3000/lifeguards ```

To get all beaches and assigned lifeguards:
``` http://localhost:3000/beaches ```

To add a new lifeguard:
  - Send the below to PUT ``` http://localhost:3000/lifeguards ```:  
    ```{
    "firstName": "FIRSTNAME",
    "lastName": "LASTNAME",
    "location": "CITY, STATE ABBR"
    }```

To add a new beach:
  - Send the below to PUT ``` http://localhost:3000/beaches ```:  
    ```{    
    "name": "BEACHNAME",
    "location": "CITY, STATE, COUNTRY",
    "sand_rating": INT
    } ```
    
To add a new relationship between lifeguards and beaches
  - Send the below to PUT ``` http://localhost:3000/assign-lifeguard ```:  
    ```{    
    "BeachId": INT,
    "LifeguardId": INT
    } ```
