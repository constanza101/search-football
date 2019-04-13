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
    var team1 = $("#inputTeam1").val();
    var team2 = $("#inputTeam2").val();
    var stringteam1 = team1.toString()
    var teamA = stringteam1.replace(" ", "+");
    //var teamB = team2.replace("%20", " ");
    console.log(team1)
    console.log(teamA)





    var urlTeams = "http://localhost:8000/"+team1+"/"+team2;
    console.log(urlTeams)
    $.get(urlTeams, (response) => {
      alert(urlTeams)
      console.log(response)
      })
  }


}
