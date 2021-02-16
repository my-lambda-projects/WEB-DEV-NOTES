# Chat Board Application

## Goal:

Develop a website which can efficiently store and retrieve user submitted messages from a `PostgreSQL` **database**.

Develop a website that allows people to post messages to a page. A message should consist of a title and a body. The site should have two pages:

+ The first page shows people a form where they can add a new message.

+ The second page shows each of the messages people have posted.
Make sure there's a way to navigate the site so users can access each page.

+ Messages must be stored in a `postgres database`. Create a table called messages, with the following column names and data types:
```
Column Name	Column Data Type
id	serial primary key
title	text
body	text
Tips
```
+ My connection string in the code should appear as follows:
```
var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';
```

+ The postgres username must be read from an environment variable named POSTGRES_USER.

+ The postgres password (if present) must be read from an environment variable named 
POSTGRES_PASSWORD

+ The table is called messages.

+ The messages table consists of an id, title and body column.

+ The first page consists of a form where users can add a message.

+ The second page displays the submitted messages.

### What I did in terms of UI/LAYOUT of my app:

* My index/first page contains a chat board which lists the existing messages. I personally would not be as interested in contributing to a chat board which I don't initially see. But then that is just my preference, and I think most of my users wpuld feel the same way.

+ My second page contains the form for adding a new message to the board. After the user clicks the add button to submit a message, she/he is redirected to the home page/root route of the application where the chat board resides.

+ I also included functionality for editing and deleting messages. I achieved this by including edit and delete buttons to the right of a message on the chat board.

+ I added a navigation menu in which there is a link to the chat board and another link the form for adding a new message.

### Bulletin Board App vs Students Table

+ I created a very similar project in class called Students table before diving into Bulletin Board App. It was the first time I had worked with postgresql, and I didn't know/find the proper command for inserting a new record in a postgresql table. I chose to create an empty students array in which I pushed the data from req.body into the students array. Then I mapped over the array and returned a redirect to the home page/root path of the app. depending on what one is trying to achieve UI/UX wise, it might not have been the ideal approach.

+ Why? Since the user never actually leaves the home page, there is no opportunity for a page refresh so that new records automatically render to the page when created. I had to create an update button to fulfill that purpose. The advantage of that approach is the user never has leave the page. The disadvantage is the user has to press the updat button in order to view the result her/his input. Depending on what one's design preferences are, this approach could negatively affect one's design goals. To learn more, please check out my [Students Table](https://github.com/interglobalmedia/students-table) repo here on `Github`.

+ On the other hand, because I had approached inserting a new record in my postgresql table initially in an unconventional manner, I learned a couple of useful tricks. I learned another way of inserting a new record, AND a new way to refresh the page via the click of a button.

+ In ***Students Table***, I use an `input element` where the user can either type in a new message or edit an existing message. The advantage to using an input element is that existing messages keep their text-content when the user navigates to the `edit-message` page. The ***disadvantage*** is that the viewable input area is small.

+ In the Bulletin Board App, I use the `textarea element`. The ***advantage*** to that approach is the viewable area is potentially much larger. Given my somewhat limited knowledge of the textarea element, the ***disadvantage*** seems to be that the user has to copy the existing message into the edit-message textarea in order to edit that particular text. Existing text does not appear in the textarea element by default when the user navigates to the edit-message page.

### What the Bulletin Board App actually looks like

+ How the **Bulletin Board App**'s **home page** looks like:

![Chat Board Home Page](/images/chat-board-home.jpg)

+ How the **Bulletin Board App**'s **add-message page** looks like:

![Chat Board add message page](/images/chat-board-add-message.jpg)

+ How the **Bulletin Board App**'s **edit-message page** looks like:

![Chat Board edit message page](/images/chat-board-edit-message.jpg)

