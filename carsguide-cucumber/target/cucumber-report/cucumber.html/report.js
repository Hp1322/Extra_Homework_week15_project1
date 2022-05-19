$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user, I want to check search functionality of Carsguide website",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 25719935000,
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
  "duration": 647300300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1255449700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickUsedUsedCarLink()"
});
formatter.result({
  "duration": 5464924800,
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
  "duration": 585504100,
  "status": "passed"
});
formatter.after({
  "duration": 3460435400,
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
      "cells": [
        "BMW",
        "X3",
        "Any Location",
        "$50,000"
      ],
      "line": 26,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Kia",
        "Niro",
        "QLD - All",
        "$90,000"
      ],
      "line": 27,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Jeep",
        "Wrangler",
        "WA - All",
        "$50,000"
      ],
      "line": 28,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Volkswagen",
        "Polo",
        "NSW - All",
        "$60,000"
      ],
      "line": 29,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Tesla",
        "Model S",
        "Any Location",
        "$80,000"
      ],
      "line": 30,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Mitsubishi",
        "Outlander",
        "NT - All",
        "$90,000"
      ],
      "line": 31,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19943728500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
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
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select model \"X3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select price \"$50,000\"",
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
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 221300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 649109800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 5497555600,
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
  "duration": 335059000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 941986300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "X3",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 469702000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 182940800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 397717100,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 11638128100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 210519100,
  "status": "passed"
});
formatter.after({
  "duration": 3194072900,
  "status": "passed"
});
formatter.before({
  "duration": 16507200100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
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
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select model \"Niro\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select location \"QLD - All\"",
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
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 72600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 604915800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 4829239200,
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
  "duration": 392352200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 1707764800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Niro",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 516708000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 434766300,
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
  "duration": 526073700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6474636800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 817402400,
  "status": "passed"
});
formatter.after({
  "duration": 4491639000,
  "status": "passed"
});
formatter.before({
  "duration": 19225662500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
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
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select model \"Wrangler\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select location \"WA - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select price \"$50,000\"",
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
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 73700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 637437200,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 5720933300,
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
  "duration": 306126000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 2104723900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrangler",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 462005200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - All",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 349080900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 305377200,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 7207947600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 350224900,
  "status": "passed"
});
formatter.after({
  "duration": 6119615700,
  "status": "passed"
});
formatter.before({
  "duration": 25251817000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
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
  "name": "I select make \"Volkswagen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select model \"Polo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select price \"$60,000\"",
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
  "name": "I should see the make \"Volkswagen\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 196500,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 858760900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 7814705000,
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
  "duration": 236838000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 1037059000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Polo",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 1039324900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 343988800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 574667900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 9320289700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 853046100,
  "status": "passed"
});
formatter.after({
  "duration": 3448685000,
  "status": "passed"
});
formatter.before({
  "duration": 19137551100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
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
  "name": "I select make \"Tesla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select model \"Model S\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select price \"$80,000\"",
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
  "name": "I should see the make \"Tesla\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 206700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 942401200,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 5143053000,
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
  "duration": 318026200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tesla",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 852779700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Model S",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 472348200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 42125500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 305263400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6851152400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tesla",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 81832500,
  "status": "passed"
});
formatter.after({
  "duration": 2912008700,
  "status": "passed"
});
formatter.before({
  "duration": 25024817800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
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
  "duration": 57000,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1728731400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 10267660300,
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
  "duration": 293467900,
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
  "duration": 1469350300,
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
  "duration": 667474200,
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
  "duration": 403282900,
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
  "duration": 402160800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 10948348100,
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
  "duration": 152041600,
  "status": "passed"
});
formatter.after({
  "duration": 2961886000,
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
      "cells": [
        "BMW",
        "X3",
        "Any Location",
        "$50,000"
      ],
      "line": 48,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Kia",
        "Niro",
        "QLD - All",
        "$90,000"
      ],
      "line": 49,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Jeep",
        "Wrangler",
        "WA - All",
        "$50,000"
      ],
      "line": 50,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Volkswagen",
        "Polo",
        "NSW - All",
        "$60,000"
      ],
      "line": 51,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Tesla",
        "Model S",
        "Any Location",
        "$80,000"
      ],
      "line": 52,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Mitsubishi",
        "Outlander",
        "NT - All",
        "$90,000"
      ],
      "line": 53,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24248125800,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
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
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select model \"X3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select price \"$50,000\"",
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
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 194900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 350879900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickUsedUsedCarLink()"
});
formatter.result({
  "duration": 5584689800,
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
  "duration": 313192100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 1800718000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "X3",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 534461900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 242237000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 289431900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6442656500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 463967900,
  "status": "passed"
});
formatter.after({
  "duration": 3048240400,
  "status": "passed"
});
formatter.before({
  "duration": 17167002100,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
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
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select model \"Niro\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select location \"QLD - All\"",
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
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 80200,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1139556400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickUsedUsedCarLink()"
});
formatter.result({
  "duration": 4601768600,
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
  "duration": 787393600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 1406066800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Niro",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 429945400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 374576100,
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
  "duration": 375782000,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5072782000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 501072400,
  "status": "passed"
});
formatter.after({
  "duration": 3475053200,
  "status": "passed"
});
formatter.before({
  "duration": 12154429400,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
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
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select model \"Wrangler\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select location \"WA - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select price \"$50,000\"",
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
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 126800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 991665700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickUsedUsedCarLink()"
});
formatter.result({
  "duration": 5839432300,
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
  "duration": 765509100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 1686391500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrangler",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 598238700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - All",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 359218800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 394034700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 9682476300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 938137000,
  "status": "passed"
});
formatter.after({
  "duration": 4068810900,
  "status": "passed"
});
formatter.before({
  "duration": 16468324400,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
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
  "name": "I select make \"Volkswagen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select model \"Polo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select price \"$60,000\"",
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
  "name": "I should see the make \"Volkswagen\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 113200,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 671400900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickUsedUsedCarLink()"
});
formatter.result({
  "duration": 2894018900,
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
  "duration": 1457158900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 1568401100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Polo",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 972492600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 747971000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 440774600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5086847900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 913722000,
  "status": "passed"
});
formatter.after({
  "duration": 3866785000,
  "status": "passed"
});
formatter.before({
  "duration": 16466134000,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
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
  "name": "I select make \"Tesla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select model \"Model S\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select price \"$80,000\"",
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
  "name": "I should see the make \"Tesla\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 64800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1685971700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickUsedUsedCarLink()"
});
formatter.result({
  "duration": 4659418400,
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
  "duration": 758399600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tesla",
      "offset": 15
    }
  ],
  "location": "SearchCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 1771826200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Model S",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 377886000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "SearchCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 86541500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "SearchCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 459650400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4490072500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tesla",
      "offset": 23
    }
  ],
  "location": "SearchCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 386490000,
  "status": "passed"
});
formatter.after({
  "duration": 4080264800,
  "status": "passed"
});
formatter.before({
  "duration": 17054305000,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
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
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 776156500,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickUsedUsedCarLink()"
});
formatter.result({
  "duration": 2528957100,
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
  "duration": 1462042900,
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
  "duration": 1507848100,
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
  "duration": 541303700,
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
  "duration": 814072500,
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
  "duration": 641900300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5111618000,
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
  "duration": 552263700,
  "status": "passed"
});
formatter.after({
  "duration": 3769305800,
  "status": "passed"
});
});