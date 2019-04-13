var fs = require ("fs");
var express = require("express");
var mysql = require("mysql");
var connectionData  = process.argv[2]; /*eslint no-undef: "off"*/

fs.readFile( connectionData+".json", function (err, data) {
  if (err) throw err;
  var objServerData = JSON.parse(data);

  var connection = mysql.createConnection(objServerData);

  //abro la conexión
  connection.connect();
  console.log("connected!");

  //creo mi servidor:
  var app = express();

  //configuro el server para que parsee el body de las peticiones post
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
  });


    //GET/matches/:team1/:team2
        app.get("/matches/:team1/:team2", function(req, res){
          var team1 = req.params.team1;
          var team2 = req.params.team2;

          connection.query(
"SELECT * FROM liga_esp.resultados_deportivos WHERE  MATCH (LOCAL) AGAINST ('"
+team1+"' IN BOOLEAN MODE) AND MATCH (VISITANTE) AGAINST('"
+team2+"' IN BOOLEAN MODE) OR MATCH (LOCAL) AGAINST ('"
+team2+"' IN BOOLEAN MODE) AND MATCH(VISITANTE) AGAINST ('"
+team1+"' IN BOOLEAN MODE);"
            ,function (err, data) {
              if(err) throw err;
              return res.send(data);
              });
          });


          //GET/teamInfo/:team/
              app.get("/teamInfo/:team", function(req, res){
                var team = req.params.team;
                connection.query("SELECT * FROM liga_esp.resultados_deportivos WHERE LOCAL='"
                  +team+"' OR VISITANTE='"+team+"';"
                  ,function (err, data) {
                    if(err) throw err;
                    return res.send(data);
                    });
                });


                //GET/allinfo/
                    app.get("/teamInfo", function(req, res){
                  var team = req.params.team;
                      connection.query("SELECT * FROM liga_esp.resultados_deportivos"
                        ,function (err, data) {
                          if(err) throw err;
                          return res.send(data);
                          });
                      });




    app.listen(8000, function(){
      console.log("Server is listening in port 8000")
    })
});
