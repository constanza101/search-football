import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getResults(){
    var team1 = $("#input").val
    var urlPlaces = "http://localhost/places";
    $.get(urlPlaces, (response) => {
        this.markers = response;
      })
  }


}
