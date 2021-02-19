Feature: Symund logout Tests
  @wip

  Scenario:
    Given User is on the login page and page title is <Symund - QA>
    When User login to symund website successfully
    Then User Able to click on Logout avatar
    Then User Able to click on Logout button
    Then User Able to redirect page to login page after logout successful
    Then Verify that page title is <Symund - QA>


