
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

  * **Code:** 200 <br />
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
