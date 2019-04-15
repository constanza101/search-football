//GAMES Tied BY SEASON
    var urlhost = "http://localhost:8000"
    var urlpath = "/goalsForBySeason/+"+team;
    $.get(urlhost+urlpath, (response) => {
      for (let i = 0; i < response.length; i++) {
          if(response[i]["season"] == "1928-29"){
            var goalsFor = response[i]["goalsFor"];
            this.season2829["goalsFor"] = goalsFor
            console.log(this.season2829)
          }
          else if(response[i]["season"] == "1929-30"){
              var goalsFor = response[i]["goalsFor"];
              this.season2930["goalsFor"] = goalsFor
              console.log(this.season2930)
            }
          else if(response[i]["season"] == "1930-31"){
              var goalsFor = response[i]["goalsFor"];
              this.season3031["goalsFor"] = goalsFor
              console.log(this.season3031)
            }
      }
    }) // END GET GAMES Tied BY SEASON
