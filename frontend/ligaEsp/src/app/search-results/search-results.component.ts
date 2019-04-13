import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getAll(){

    var url = "http://localhost:8000/teamInfo";
    $.get(url, (response) => {
      var response = response;
      console.log(response)
      })
   }


}
