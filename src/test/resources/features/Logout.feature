Feature: Verify that user logs out Symund Successfully
  @logout

  Scenario:
    Given User is on the login page and page title is <Symund - QA>
    When User login to symund website successfully
    Then User Able to click on Logout avatar
    Then User Able to click on Logout button
    Then Verify that page title is <Symund - QA>


