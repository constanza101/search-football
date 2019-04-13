import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  getResults(){
    var teamA = $("#inputTeam1").val();
    var teamB = $("#inputTeam2").val();
    console.log("teamA "+teamA)
    console.log("teamB "+teamB)
    var stringteamA = teamA.toString()
    var stringteamB = teamB.toString()
    var team1 = stringteamA.replace(" ", "+");
    var team2 = stringteamB.replace(" ", "+");
    console.log("teamA "+team1)
    console.log("teamB "+team2)

    if (team1 != "" && team2 != "") {
      var urlTeams = "http://localhost:8000/matches/"+team1+"/"+team2;
      //console.log(urlTeams)
      $.get(urlTeams, (response) => {
        alert(urlTeams)
        console.log(response)
        })
    }
    else if (team1 == ""){console.log("no hay team1")}
    else if (team2 == ""){console.log("no hay team2")}
    else{console.log("no sabemos que está fallando")}

  }


}
