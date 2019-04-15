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

//GET ALL DATA FROM ONE TEAM ORDERED BY SEASON
          //GET/getAll/:team/
              app.get("/getAll/:team", function(req, res){
                var team = req.params.team;
                connection.query(
                  "SELECT * FROM liga_esp.resultados_deportivos WHERE MATCH(LOCAL) AGAINST ('"
                  +team+"'IN BOOLEAN MODE)OR MATCH(VISITANTE) AGAINST ('"+team+"' IN BOOLEAN MODE)"
                  ,function (err, data) {
                    if(err) throw err;
                    return res.send(data);
                  });//connection.query- select *
                });  // app.get /teamInfo/:team

//PLAYED
        app.get("/gamesPlayedBySeason/:team", function(req, res){
              var team = req.params.team;
                  connection.query(
                    "SELECT  COUNT(*) AS gamesPlayed, TEMPORADA as season FROM liga_esp.resultados_deportivos WHERE MATCH(LOCAL) AGAINST ('"+team+"' IN BOOLEAN MODE) OR MATCH(VISITANTE) AGAINST ('"+team+"' IN BOOLEAN MODE)GROUP BY TEMPORADA ORDER BY TEMPORADA;"
                    ,function (err, data) {
                      if(err) throw err;
                      return res.send(data);
                    });//connection.query- COUNT GAMES PLAYES BY SEASON
            });

//WON
        app.get("/gamesWonBySeason/:team", function(req, res){
              var team = req.params.team;
                  connection.query(
                    "SELECT  COUNT(*) AS gamesWon, TEMPORADA as season FROM liga_esp.resultados_deportivos WHERE MATCH(LOCAL) AGAINST ('"+team+"' IN BOOLEAN MODE) OR MATCH(VISITANTE) AGAINST ('"+team+"' IN BOOLEAN MODE)GROUP BY TEMPORADA ORDER BY TEMPORADA;"
                    ,function (err, data) {
                      if(err) throw err;
                      return res.send(data);
                    });//connection.query- COUNT GAMES PLAYES BY SEASON
            });

//LOST
        app.get("/gamesLostBySeason/:team", function(req, res){
              var team = req.params.team;
                  connection.query(
                    "SELECT COUNT(*) as gamesLost, TEMPORADA AS season FROM liga_esp.resultados_deportivos WHERE MATCH(VISITANTE) AGAINST ('"
                    +team+"' IN BOOLEAN MODE) AND GOL_LOCAL > GOL_VISITANTE OR MATCH (LOCAL) AGAINST ('"
                    +team+"' IN BOOLEAN MODE) AND GOL_LOCAL < GOL_VISITANTE GROUP BY TEMPORADA ORDER BY TEMPORADA;"
                        ,function (err, data) {
                      if(err) throw err;
                      return res.send(data);
                    });//connection.query- COUNT GAMES PLAYES BY SEASON
            });

//TIED
        app.get("/gamesTiedBySeason/:team", function(req, res){
              var team = req.params.team;
                  connection.query(
"SELECT COUNT(*) as gamesTied, TEMPORADA AS season FROM liga_esp.resultados_deportivos WHERE MATCH(LOCAL) AGAINST ('"
+team+"' IN BOOLEAN MODE) AND GOL_LOCAL = GOL_VISITANTE  OR MATCH (VISITANTE) AGAINST ('"
+team+"' IN BOOLEAN MODE) AND GOL_LOCAL = GOL_VISITANTE  GROUP BY TEMPORADA ORDER BY TEMPORADA;"
                    ,function (err, data) {
                      if(err) throw err;
                      return res.send(data);
                    });//connection.query- COUNT GAMES PLAYES BY SEASON
            });

//Goals FOR
        app.get("/goalsForBySeason/:team", function(req, res){
              var team = req.params.team;
                  connection.query(
"WITH total AS(SELECT GOL_LOCAL as goalsFor, TEMPORADA as season FROM liga_esp.resultados_deportivos  WHERE MATCH(LOCAL) AGAINST ('"
+team+"' IN BOOLEAN MODE) UNION ALL SELECT GOL_VISITANTE as goalsFor, TEMPORADA as season FROM liga_esp.resultados_deportivos WHERE MATCH (VISITANTE) AGAINST ('"
+team+"' IN BOOLEAN MODE)) SELECT sum(goalsFor) as goalsFor, season FROM total GROUP BY season"
                    ,function (err, data) {
                      if(err) throw err;
                      return res.send(data);
                    });//connection.query- COUNT GAMES PLAYES BY SEASON
            });

//Goals AGAINST
        app.get("/goalsAgainstBySeason/:team", function(req, res){
              var team = req.params.team;
                  connection.query(
 "WITH total AS( SELECT GOL_LOCAL as goalsAgainst, TEMPORADA FROM liga_esp.resultados_deportivos  WHERE MATCH(VISITANTE) AGAINST ('"+team+"' IN BOOLEAN MODE)   UNION ALL SELECT GOL_VISITANTE as goalsAgainst,  TEMPORADA FROM liga_esp.resultados_deportivos  WHERE MATCH (LOCAL) AGAINST ('"+team+"' IN BOOLEAN MODE))SELECT sum(goalsAgainst) as goalsAgainst,  TEMPORADA as season FROM total GROUP BY season;"                  ,function (err, data) {
                      if(err) throw err;
                      return res.send(data);
                    });//connection.query- COUNT GAMES PLAYES BY SEASON
            });



    app.listen(8000, function(){
      console.log("Server is listening in port 8000")
    })


}); // readFile
