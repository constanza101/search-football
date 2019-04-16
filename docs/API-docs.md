
**Searching games played by two teams**
----
Returns all the information about the games played by both teams together.

* **URL**

  /matches/:team1/:team2

* **Method:**

  `GET`

*  **URL Params**

  `team1=[string]`

  `team1=[string]`

  * NOTE: if they have more than 1 word, they should be separated by "+" symbols. Eg. Real+Madrid

* **Data Params (Not required)**

* **Success Response:**

  * **Code:** 200
  * **Content type:**

```javascript
[
{   "TEMPORADA": "1928-29",
    "JORNADA": 5,
    "FECHA": "10/03/1929",
    "LOCAL": "Real Racing Club",
    "VISITANTE": "Real Madrid C.F.",
    "GOL_LOCAL": 1,
    "GOL_VISITANTE": 3,
    "ESTADIO": "Campos de Sport del Sardinero",
    "ARBITRO": "SARACHO"
}
```

* **Error Response:** N/A


* **Sample Call:**

```javascript
get2Teams(team1, team2){
var urlhost = "http://localhost:8000"
var urlpath = "/matches/+"+team1+"/+"+team2;
$.get(urlhost+urlpath, (response) => {
  console.log(response);
  })
}
```

**Get all data from one team**
--
Returns all the information in the API of one team. (this method is not required by the app but it is ready to have all the data available in case you need it at the front end in the future).

* **URL**

  /matches/getAll/:team

* **Method:**

  `GET`

*  **URL Params**

  `team=[string]`

  * NOTE: if team has more than 1 word, they should be separated by "+" symbols. Eg. Real+Madrid or Madrid+Real

* **Data Params (Not required)**

* **Success Response:**

  * **Code:** 200
  * **Content type:**

```javascript
[
{   "TEMPORADA": "1928-29",
    "JORNADA": 5,
    "FECHA": "10/03/1929",
    "LOCAL": "Real Racing Club",
    "VISITANTE": "Real Madrid C.F.",
    "GOL_LOCAL": 1,
    "GOL_VISITANTE": 3,
    "ESTADIO": "Campos de Sport del Sardinero",
    "ARBITRO": "SARACHO"
}
```

* **Error Response:** N/A


* **Sample Call:**

```javascript
getAllInfo(team1){
var urlhost = "http://localhost:8000"
var urlpath = "/getAll/+"+team1
$.get(urlhost+urlpath, (response) => {
  console.log(response);
  })
}
```

**Get statistics from one team:**
--
The following methods are of the same type and use so we will group the description (the urls are descriptive):

* **URL**

  `/gamesPlayedBySeason/:team` -> Returns the sum of games played by this team each season.

  `/gamesWonBySeason/:team` -> Returns the sum of games won by this team each season.

  `/gamesLostBySeason/:team`-> Returns the sum of games lost by this team each season.

  `/gamesTiedBySeason/:team` -> Returns the sum of games tied for this team each season.

  `/goalsForBySeason/:team` -> Returns the sum of goals this team scored each season.

  `/goalsAgainstBySeason/:team` -> Returns the sum of goals this team  conceded each season.

* **Method:**

  `GET`

*  **URL Params**

  `team=[string]`

  * NOTE: if team has more than 1 word, they should be separated by "+" symbols. Eg. Real+Madrid or Madrid+Real

* **Data Params (Not required)**

* **Success Response:**

  * **Code:** 200
  * **Content type:**


```javascript
[
    {
        "gamesPlayed": 18,
        "season": "1928-29"
    },
    {
        "gamesPlayed": 18,
        "season": "1929-30"
    },
    {
        "gamesPlayed": 18,
        "season": "1930-31"
    }
]
```

* **Error Response:** N/A


* **Sample Call:**

```javascript
get1Team(team1){
var urlhost = "http://localhost:8000"
var urlpath = "/gamesPlayedBySeason/+"+team1
$.get(urlhost+urlpath, (response) => {
  console.log(response);
  })
}
```
