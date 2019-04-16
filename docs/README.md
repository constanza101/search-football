* **Index**:
--

  *  [How to run the server (Node) (Find below).]()
  *  [Import the data base(MySQL)(Find below).]()
  *  [How to use the API.](https://bitbucket.org/constanza101/liga_espanyola/src/master/docs/API-docs.md)
  *  [Front-end (Angular 7).](https://bitbucket.org/constanza101/liga_espanyola/src/master/docs/front-end-angular.md)


* **How to run the server:**
--

* **For the back-end we are using:**

 Node.js, Express, MySQL:

  * start npm :
        npm init
  * install Express.js:
        npm install express
  * install MySQL:
        npm install mysql

* For running the Node server "server.js" first save a file named localhost.JSON with the connection details of your database. It should look like this:

```javascript
{
  "host"     : "localhost",
  "user"     : "root",
  "password" : "my_password",
  "database" : "db_name"
}
```     

* run the server by using the following in the command line:

        node server.js localhost

* This way, if you work on a remote database as well, you can just store the connection data to that other database on another JSON file, for example MyRemoteDB.JSON and run it as:

        node server.js MyRemoteDB

* if it was connected properly, congratulations! you are connected to your database through Node. We can install Nodemon:

      npm install nodemon --save-dev

* open package.json and under "scrips" add "dev": "nodemon server.js":

      {
        //...
        "scripts": {
          "dev": "nodemon server.js"
        }
        //...
      }

* now you can run the following command and you will not need to restart every time you make a change in server.js:

        npm run dev localhost


* **Install MyQSL database:**
--
* Find the file "resultados_deportivos.sql" in the file named    Test .  
