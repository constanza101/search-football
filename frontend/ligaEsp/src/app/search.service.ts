import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  gamesInfo: [];
  oneTeamInfo: [];
  season2829: string[] = [];
  season2930: string[] = [];
  season3031: string[] = [];
  season2829GamesPlayed: number;
  season2930GamesPlayed: number;
  season3031GamesPlayed: number;

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
  var urlTeams = "http://localhost:8000/matches/+"+team1+"/+"+team2;
  //console.log(urlTeams)
  $.get(urlTeams, (response) => {
    console.log(response)
    this.gamesInfo = response.reverse();
    })
  }


  get1Team(team){
    var url = "http://localhost:8000/teamInfo/+"+team;
    $.get(url, (response) => {
      var response = response;
      for (let i = 0; i < response.length; i++) {
          if (response[i]["TEMPORADA"] == "1928-29"){
            this.season2829.push(response[i])
          }else if (response[i]["TEMPORADA"] == "1929-30"){
            this.season2930.push(response[i])
          } else if (response[i]["TEMPORADA"] == "1930-31"){
            this.season2930.push(response[i])
          }
      }
      //PLAYED GAMES PER SEASON
      this.season2829GamesPlayed = this.season2829.length;
      this.season2930GamesPlayed = this.season2829.length;
      this.season2930GamesPlayed = this.season2829.length;



      // console.log(response)
      })
   }

}
