# Connect to PostgreSQL Database

> This tutorial shows you different ways to connect to PostgreSQL database by using interactive terminal program called psql and pgAdmin GUI application.

**Summary**: in this tutorial, you will learn how to **connect to the PostgreSQL Database Server** via an interactive terminal program called **psql** and via the **pgAdmin** application.

When you [installed the PostgreSQL database server](https://www.postgresqltutorial.com/install-postgresql/ "Install PostgreSQL"), the PostgreSQL installer also installed some useful tools for working with the PostgreSQL database server. In this tutorial, you will learn how to connect to the PostgreSQL database server via the following tools:

*   psql – a terminal-based front-end to PostgreSQL database server.
*   pgAdmin – a web-based front-end to PostgreSQL database server.

1) Connect to PostgreSQL database server using psql
---------------------------------------------------

psql is an interactive terminal program provided by PostgreSQL. It allows you to interact with the PostgreSQL database server such as executing SQL statements and managing database objects.

The following steps show you how to connect to the PostgreSQL database server via the _psql_ program:

First, launch the **psql** program and connect to the PostgreSQL Database Server using the **postgres** user:

![](https://sp.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-psql.png)

Second, enter all the information such as Server, Database, Port, Username, and Password. If you press Enter, the program will use the default value specified in the square bracket `[]` and move the cursor to the new line. For example, `localhost` is the default database server. In the step for entering the password for user postgres, you need to enter the password the user postgres that you chose during the [PostgreSQL installation](https://www.postgresqltutorial.com/install-postgresql/).

![](https://sp.postgresqltutorial.com/wp-content/uploads/2020/07/Connect-to-PostgreSQL-via-psql.png)

Third, interact with the PostgreSQL Database Server by issuing an SQL statement. The following statement returns the current version of PostgreSQL:

![](https://sp.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-psql-verification.png)

Please do not forget to end the statement with a semicolon (;). After pressing **Enter**, psql will return the current PostgreSQL version on your system.

2) Connect to PostgreSQL database server using pgAdmin
------------------------------------------------------

The second way to connect to a database is by using a pgAdmin application. The pgAdmin application allows you to interact with the PostgreSQL database server via an intuitive user interface.

The following illustrates how to connect to a database using pgAdmin GUI application:

First, launch the pgAdmin application.

![](https://sp.postgresqltutorial.com/wp-content/uploads/2020/07/Connect-to-PostgreSQL-via-pgAdmin.png)

The pgAdmin application will launch on the web browser as shown in the following picture:

![](https://sp.postgresqltutorial.com/wp-content/uploads/2019/05/pgAdmin-4.png)

Second, right-click the Servers node and select **Create > Server…** menu to create a server

![pgAdmin - create a server](https://sp.postgresqltutorial.com/wp-content/uploads/2019/05/pgAdmin-create-a-server.png)

Third, enter the server name e.g., **PostgreSQL** and click the **Connection** tab:

![pgAdmin - enter the server name](https://sp.postgresqltutorial.com/wp-content/uploads/2019/05/pgAdmin-enter-the-server-name.png)

Fourth, enter the host and password for the **postgres** user and click the **Save** button:

![](https://sp.postgresqltutorial.com/wp-content/uploads/2019/05/pgAdmin-enter-host-and-user-info.png)

Fifth, click on the Servers node to expand the server. By default, PostgreSQL has a database named postgres as shown below:

![pgAdmin - connected to PostgreSQL Database Server](https://sp.postgresqltutorial.com/wp-content/uploads/2019/05/pgAdmin-connected-to-PostgreSQL-Database-Server.png)

Sixth, open the query tool by choosing the menu item **Tool > Query Tool** or click the lightning icon.

![](https://sp.postgresqltutorial.com/wp-content/uploads/2019/05/pgAdmin-query-tool.png)

Seventh, enter the query in the **Query Editor**, click the **Execute** button, you will see the result of the query displaying in the **Data Output** tab:

![](https://sp.postgresqltutorial.com/wp-content/uploads/2020/07/Connect-to-PostgreSQL-via-pgAdmin-Execute-a-query-1.png)

Connect to PostgreSQL database from other applications
------------------------------------------------------

Any application that supports ODBC or [JDBC](https://www.postgresqltutorial.com/postgresql-jdbc/) can connect to the PostgreSQL database server. In addition, if you develop an application that uses a specific driver, the application can connect to the PostgreSQL database server as well:

*   [Connect to PostgreSQL from PHP](https://www.postgresqltutorial.com/postgresql-php/connect/)
*   [Connect to PostgreSQL from Python](https://www.postgresqltutorial.com/postgresql-python/connect/)
*   [Connect to PostgreSQL from Java](https://www.postgresqltutorial.com/postgresql-jdbc/connecting-to-postgresql-database/)

In this tutorial, you’ve learned how to connect to the PostgreSQL database server by using different client tools including psql and pgAdmin GUI application.

*   Was this tutorial helpful ?
*   [Yes](#)[No](#)


[Source](https://www.postgresqltutorial.com/connect-to-postgresql-database/)