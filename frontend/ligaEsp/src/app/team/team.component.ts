import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  constructor(public _actRoute:ActivatedRoute, public _search:SearchService, public _router:Router) { }

  ngOnInit() {
    var team = this._actRoute.snapshot.params['teamName'];
    console.log(team)
    this._search.get1Team(team);
  }

}
