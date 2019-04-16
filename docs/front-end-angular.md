* **Angular 7 : Components and dependencies:**

* landing-page with:
    * Two inputs to collect the values of 2 teams (one in each input) or one single team in any of them.
    * Search button.
    * Results text-box that is shown after the search is successful.
    * Route to team-page when selecting one team from the results or when typing only one team into one of the inputs.


* team-page where we display all the statistics of one team:
    * grouped by season.
    * in descendent order.


* search.service.ts:
    * manages the API calls.
    * manages content.
    * exports the data to easily import from the html in the components.
