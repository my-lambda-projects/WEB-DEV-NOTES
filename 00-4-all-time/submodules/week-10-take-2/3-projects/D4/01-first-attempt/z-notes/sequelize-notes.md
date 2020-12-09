Actual Database: postgres


SQL: Structured Query Language

Why do we use databases?
So that products have a place to permanently store data. We

Who acesses a database and why you might acess it through a client like psql or postbird.


Node.js (aka servers) take signals from webusers 




Sequelize is an object relational mapper. 



Another ORM is SQL-Alchemy for python


ORM: 
gives you tools to make models and represent the data from a database. 



Sequelize works for many different RDMS's    
--> way to connect to and manage your database data.





npx is a package you have installed and run it's binary commands (like a command line tool) 


### config.json ====> can't use single quotes in json.  


```json
{
  "development": {//while building your app**
    "username": "sequelize_recipe_box_app",
    "password": "HfKfK79k",
    "database": "recipe_box_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  "test": {
    "username": "sequelize_recipe_box_app",
    "password": "HfKfK79k",
    "database": "recipe_box_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  "production": {  //Gets deployed with real sensitive information**
    "username": "sequelize_recipe_box_app",
    "password": "HfKfK79k",
    "database": "recipe_box_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  }
}
```


lll
