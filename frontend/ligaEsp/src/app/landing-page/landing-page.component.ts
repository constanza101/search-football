import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  constructor(public _search:SearchService, public _router:Router) { }

  ngOnInit() {
  }

  handleValues(){
    var teamA = $("#inputTeam1").val();
    var teamB = $("#inputTeam2").val();
    var stringteamA = teamA.toString()
    var stringteamB = teamB.toString()
    var team1 = stringteamA.replace(" ", "+");
    var team2 = stringteamB.replace(" ", "+");
    if (team1 != "" && team2 != "") {
      this._search.get2Teams(team1, team2)
    }
    else if (team1 == "" && team2 != ""){
      console.log("no hay team1")
      this.toTeamProfile(team2)
    }
    else if (team2 == "" && team1 != ""){
      console.log("no hay team2")
      this.toTeamProfile(team1)
    }
    else{alert("introduce al menos un equipo")}
  }

  toTeamProfile(team: string){
    var teamparam = team.replace(" ", "+");
    this._router.navigate(["/team",teamparam]);
  }

}
