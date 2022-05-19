$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user, I want to check search functionality of Carsguide website",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11806159700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \u0027Used\u0027 used car link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"Used Cars For Sale\" used car page",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 546783100,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 3112027100,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickUsedUsedCarLink()"
});
formatter.result({
  "duration": 7432992200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iNavigateToUsedCarPage(String)"
});
formatter.result({
  "duration": 499621500,
  "status": "passed"
});
formatter.after({
  "duration": 3156710900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I navigate to \"New and Used Car Search\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 25,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "comments": [
        {
          "line": 26,
          "value": "#      | BMW        | X3        | Any Location | $50,000 |"
        },
        {
          "line": 27,
          "value": "#      | Kia        | Niro      | QLD - All    | $90,000 |"
        },
        {
          "line": 28,
          "value": "#      | Jeep       | Wrangler  | WA - All     | $50,000 |"
        },
        {
          "line": 29,
          "value": "#      | Volkswagen | Polo      | NSW - All    | $60,000 |"
        },
        {
          "line": 30,
          "value": "#      | Tesla      | Model S   | Any Location | $80,000 |"
        }
      ],
      "cells": [
        "Mitsubishi",
        "Outlander",
        "NT - All",
        "$90,000"
      ],
      "line": 31,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24463761500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#      | BMW        | X3        | Any Location | $50,000 |"
    },
    {
      "line": 27,
      "value": "#      | Kia        | Niro      | QLD - All    | $90,000 |"
    },
    {
      "line": 28,
      "value": "#      | Jeep       | Wrangler  | WA - All     | $50,000 |"
    },
    {
      "line": 29,
      "value": "#      | Volkswagen | Polo      | NSW - All    | $60,000 |"
    },
    {
      "line": 30,
      "value": "#      | Tesla      | Model S   | Any Location | $80,000 |"
    }
  ],
  "line": 31,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I navigate to \"New and Used Car Search\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I select make \"Mitsubishi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select model \"Outlander\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select location \"NT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the make \"Mitsubishi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 103300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1745310000,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 17400245900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New and Used Car Search",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iNavigateToPage(String)"
});
formatter.result({
  "duration": 366131800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 1938929800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Outlander",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 521781700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - All",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 447948500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 332130400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 13709621900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 591992800,
  "status": "passed"
});
formatter.after({
  "duration": 5046420000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click \u0027Used\u0027 used car link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I navigate to \"Used Cars For Sale\" used car page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 47,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "comments": [
        {
          "line": 48,
          "value": "#      | BMW        | X3        | Any Location | $50,000 |"
        },
        {
          "line": 49,
          "value": "#      | Kia        | Niro      | QLD - All    | $90,000 |"
        },
        {
          "line": 50,
          "value": "#      | Jeep       | Wrangler  | WA - All     | $50,000 |"
        },
        {
          "line": 51,
          "value": "#      | Volkswagen | Polo      | NSW - All    | $60,000 |"
        },
        {
          "line": 52,
          "value": "#      | Tesla      | Model S   | Any Location | $80,000 |"
        }
      ],
      "cells": [
        "Mitsubishi",
        "Outlander",
        "NT - All",
        "$90,000"
      ],
      "line": 53,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20471771200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 48,
      "value": "#      | BMW        | X3        | Any Location | $50,000 |"
    },
    {
      "line": 49,
      "value": "#      | Kia        | Niro      | QLD - All    | $90,000 |"
    },
    {
      "line": 50,
      "value": "#      | Jeep       | Wrangler  | WA - All     | $50,000 |"
    },
    {
      "line": 51,
      "value": "#      | Volkswagen | Polo      | NSW - All    | $60,000 |"
    },
    {
      "line": 52,
      "value": "#      | Tesla      | Model S   | Any Location | $80,000 |"
    }
  ],
  "line": 53,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click \u0027Used\u0027 used car link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I navigate to \"Used Cars For Sale\" used car page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I select make \"Mitsubishi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select model \"Outlander\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select location \"NT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I should see the make \"Mitsubishi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 123700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 637554100,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickUsedUsedCarLink()"
});
formatter.result({
  "duration": 6512376100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iNavigateToUsedCarPage(String)"
});
formatter.result({
  "duration": 221228200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 443534100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Outlander",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 505778300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - All",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 488550200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 291248400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 9632823700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 741133900,
  "status": "passed"
});
formatter.after({
  "duration": 3226540800,
  "status": "passed"
});
});