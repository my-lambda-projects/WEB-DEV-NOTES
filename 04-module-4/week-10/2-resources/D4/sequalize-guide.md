# Sequelize relationships — Ultimate guide






![Image for post](https://miro.medium.com/max/1622/1*fygqfizATFjt6ALek2W1jg.png)





We will take as an example 3 models.  
- **\- Company**  
- **\- Employee**  
- **\- Working day**   


* Employe has one company (belongsTo) 1:1  
* Company has many employees (hasMany) 1:n  
* Employe has many WorkingDay and WorkingDay has any employees (manyToMany) n:n

**To create many to many relationship, we will need a joining table that we will call WorkingDaysEmploye**.



`npm install express-generator -g   `
`npm install -g sequelize-cli`

Then we will generate a new app thanks to express and install the necessary libraries

express relationship-app-demo --no-view  

cd relationship-app-demo  

npm install --save sequelize mysql2  

sequelize initThe last command will create 3 folders (Models, Migrations and Seeder) and a \`config.json\` file in the \`/config\` directory

We need to modify this file with your credentials to the local mysql server like this

after configuration you can run  
\`sequelize db:create\` to create a new database named \`nodejs\_relationship\_demo\`

now, we’re going to create all the models we’re going to need

sequelize model:generate --name Company --attributes name:STRINGsequelize model:generate --name User --attributes email:STRING,firstName:STRING,lastName:STRING,companyId:INTEGERsequelize model:generate --name WorkingDay --attributes weekDay:STRING,workingDate:DATE,isWorking:BOOLEANsequelize model:generate --name UsersWorkingDay --attributes userId:INTEGER,workingDayId:INTEGER

UsersWorkingDay will be used to join User and WorkingDay (many to many relationship).  
Now that we have generated the necessary templates, we will have to indicate the relationships in the migration files by adding a reference key on all foreign keys.  
I also added for each foreign key an AllowNull false to prevent creation if the model is not linked

You can then check with any database explorer that the tables are linked to each other.

![Image for post](https://miro.medium.com/max/60/1*ssd1pTPfoS7hbZT6HeL9mw.png?q=20)

![Image for post](https://miro.medium.com/max/3084/1*ssd1pTPfoS7hbZT6HeL9mw.png)

![Image for post](https://miro.medium.com/max/60/1*YkTCy483-pw-qNSnI6-63A.png?q=20)

![Image for post](https://miro.medium.com/max/3084/1*YkTCy483-pw-qNSnI6-63A.png)

The relationships being well defined on the mysql side, we will now have to explain to sequelize what the relationships are between our models

1:1

The first relationship is a User belongs to a Company, open the \`models/user.js\` and add the association line 10 like this :

Association line 10

1:N

Knowing that a company has several Users we can add the 1:n relationship in the Company model. I rename the user model using an alias (employes) for more clarity, I put this alias in the plural because the relationship is hasMany

Association line 7

N:N

Finally, there is only one relationship left to manage and probably the most difficult. For this, we will need to describe the association in the 3 files concerned. (user.js, workingday.js, usersworkingday.js)

N:N relationship need a joining table (here UsersWorkingDays)

And that’s it, we configured the database and the sequelize models with the 3 types of relationships. It may seem simple after all, but before that, long hours of research were needed.

The last thing to do once the configuration is finished, is to test the relationships between them to make sure that everything works as you want it to.  
For that, I create a new test file that I will delete later

touch relationshipTester.js

First, import all the models we need

The first registration we will need is Company, so let’s start by creating a new company.

Company creation

Now, we will create 3 Users (employees) linked to this company

Users (employees) creation

Let’s see now if we can recover a company from an User and Users from a Company

Test belongsTo and hasMany relationship

Everything here is perfect! All that remains is to test the many to many relationship in this way.  
Let’s start by creating 3 working days

WorkingDays creation and Users (employees) associations

Finally, we want to be able to retrieve the list of employees for a given work day, but also to know the work days of a given employee.

First I would like to apologize for the horror mistake that is in the code, I realized when writing this article that in English employee to take two ‘e’. (sorry, I’m French)

I would then say that what we need to remember is that when associating in models, it is a good practice to use aliases (as:) because sequelize pluralizes the name of models and it can sometimes bring surprises, by using aliases, you rename the associations which then allows you to use this alias in include. Sequelize also create functions for each association, we also use aliases in singular or plural to call these functions. The list is available [here in the documentation](http://docs.sequelizejs.com/manual/tutorial/associations.html).

Finally, during an belongsToMany association it is not mandatory but specifying the foreign key ensures a good connection. It also happened to me that Sequelize does not associate the model with the right table if it happens to you, you can specify a classname in the second parameter of the model definition.

David MARIE  
Full stack web developer  
Ruby, Node and React specialist.  
https://dmkreation.com


[Source](https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554)
