import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  gamesInfo: [];
  oneTeamInfo: [];

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
      console.log(response)
      })
   }

}
