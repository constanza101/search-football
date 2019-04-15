import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  gamesInfo: [];
  oneTeamInfo: [];
  season2829: {} = {
    "gamesPlayed": 0,
    "gamesWon":0,
    "gamesLost": 0,
    "gamesTied":0,
    "goalsFor": 0,
    "goalsAgainst":0
  };
  season2930: {} =  {
    "gamesPlayed": 0,
    "gamesWon":0,
    "gamesLost": 0,
    "gamesTied":0,
    "goalsFor": 0,
    "goalsAgainst":0
  };
  season3031: {} =  {
    "gamesPlayed": 0,
    "gamesWon":0,
    "gamesLost": 0,
    "gamesTied":0,
    "goalsFor": 0,
    "goalsAgainst":0
  };

  /*  [{
        "TEMPORADA": "1928-29",
        "JORNADA": 1,
        "FECHA": "12/02/1929",
        "LOCAL": "Real Racing Club",
        "VISITANTE": "F.C. Barcelona",
        "GOL_LOCAL": 0,
        "GOL_VISITANTE": 2,
        "ESTADIO": "Campos de Sport del Sardinero",
        "ARBITRO": "MELCON BARTOLOME"
    }]
  */

  constructor() {

  }

  get2Teams(team1, team2){
  var urlhost = "http://localhost:8000"
  var urlpath = "/matches/+"+team1+"/+"+team2;
  $.get(urlhost+urlpath, (response) => {
    this.gamesInfo = response.reverse();
    })
  }


  get1Team(team){

//GAMES PLAYED BY SEASON
    var urlhost = "http://localhost:8000"
    var urlpath = "/gamesPlayedBySeason/+"+team;
    $.get(urlhost+urlpath, (response) => {

      for (let i = 0; i < response.length; i++) {
        if(response[i]["season"] == "1928-29"){
            var gamesPlayed = response[i]["gamesPlayed"];
            this.season2829["gamesPlayed"] = gamesPlayed
          }
          else if(response[i]["season"] == "1929-30"){
              var gamesPlayed = response[i]["gamesPlayed"];
              this.season2930["gamesPlayed"] = gamesPlayed
            }
          else if(response[i]["season"] == "1930-31"){
              var gamesPlayed = response[i]["gamesPlayed"];
              this.season3031["gamesPlayed"] = gamesPlayed
            } else{     }
      }
    }) // END GET GAMES PLAYED BY SEASON

//GAMES WON BY SEASON
        var urlhost = "http://localhost:8000"
        var urlpath = "/gamesWonBySeason/+"+team;
        $.get(urlhost+urlpath, (response) => {
          for (let i = 0; i < response.length; i++) {
              if(response[i]["season"] == "1928-29"){
                var gamesWon = response[i]["gamesWon"];
                this.season2829["gamesWon"] = gamesWon
              }
              else if(response[i]["season"] == "1929-30"){
                  var gamesWon = response[i]["gamesWon"];
                  this.season2930["gamesWon"] = gamesWon
                }
              else if(response[i]["season"] == "1930-31"){
                  var gamesWon = response[i]["gamesWon"];
                  this.season3031["gamesWon"] = gamesWon
                }
          }
        }) // END GET GAMES Won BY SEASON

//GAMES Lost BY SEASON
            var urlhost = "http://localhost:8000"
            var urlpath = "/gamesLostBySeason/+"+team;
            $.get(urlhost+urlpath, (response) => {
              for (let i = 0; i < response.length; i++) {
                  if(response[i]["season"] == "1928-29"){
                    var gamesLost = response[i]["gamesLost"];
                    this.season2829["gamesLost"] = gamesLost
                  }
                  else if(response[i]["season"] == "1929-30"){
                      var gamesLost = response[i]["gamesLost"];
                      this.season2930["gamesLost"] = gamesLost
                    }
                  else if(response[i]["season"] == "1930-31"){
                      var gamesLost = response[i]["gamesLost"];
                      this.season3031["gamesLost"] = gamesLost
                    }
              }
            }) // END GET GAMES Lost BY SEASON


//GAMES Tied BY SEASON
              var urlhost = "http://localhost:8000"
              var urlpath = "/gamesTiedBySeason/+"+team;
              $.get(urlhost+urlpath, (response) => {
                for (let i = 0; i < response.length; i++) {
                    if(response[i]["season"] == "1928-29"){
                      var gamesTied = response[i]["gamesTied"];
                      this.season2829["gamesTied"] = gamesTied
                    }
                    else if(response[i]["season"] == "1929-30"){
                        var gamesTied = response[i]["gamesTied"];
                        this.season2930["gamesTied"] = gamesTied
                      }
                    else if(response[i]["season"] == "1930-31"){
                        var gamesTied = response[i]["gamesTied"];
                        this.season3031["gamesTied"] = gamesTied
                      }
                }
              }) // END GET GAMES Tied BY SEASON

  //GOALS FOR BY SEASON
                  var urlhost = "http://localhost:8000"
                  var urlpath = "/goalsForBySeason/+"+team;
                  $.get(urlhost+urlpath, (response) => {
                    for (let i = 0; i < response.length; i++) {
                        if(response[i]["season"] == "1928-29"){
                          var goalsFor = response[i]["goalsFor"];
                          this.season2829["goalsFor"] = goalsFor
                        }
                        else if(response[i]["season"] == "1929-30"){
                            var goalsFor = response[i]["goalsFor"];
                            this.season2930["goalsFor"] = goalsFor
                          }
                        else if(response[i]["season"] == "1930-31"){
                            var goalsFor = response[i]["goalsFor"];
                            this.season3031["goalsFor"] = goalsFor
                          }
                    }
                  }) // END GET GOALS FOR BY SEASON

                  //GOALS AGAINST BY SEASON
                      var urlhost = "http://localhost:8000"
                      var urlpath = "/goalsAgainstBySeason/+"+team;
                      $.get(urlhost+urlpath, (response) => {
                        for (let i = 0; i < response.length; i++) {
                            if(response[i]["season"] == "1928-29"){
                              var goalsAgainst = response[i]["goalsAgainst"];
                              this.season2829["goalsAgainst"] = goalsAgainst
                              console.log(this.season2829)
                            }
                            else if(response[i]["season"] == "1929-30"){
                                var goalsAgainst = response[i]["goalsAgainst"];
                                this.season2930["goalsAgainst"] = goalsAgainst
                                console.log(this.season2930)
                              }
                            else if(response[i]["season"] == "1930-31"){
                                var goalsAgainst = response[i]["goalsAgainst"];
                                this.season3031["goalsAgainst"] = goalsAgainst
                                console.log(this.season3031)
                              }
                        }
                      }) // END GET GOALS Against BY SEASON

   }

}
