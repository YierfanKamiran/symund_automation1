
Feature: Create, modified, deleted contacts

  A new contact could be created or an existing one could be modified/deleted

  Background:
    Given the user is on the login page
    And the user is logged in as "Employee1"

@necla
  Scenario: As a user, I should be able to Add a new contact -AC1

    Given the user is on Contact Tab
    When the user clicks on New contact button
    And the user provides the required information
      |Name        |Nejla Turk           |
      |Company     |HNS London Ltd       |
      |Title       |Vice Presedent       |
      |Phone       |07428579933          |
      |Email       |nej@hotmail.com      |
      |Address     |111 St. Giles Street |
      |Postal Code |NN1 1JW              |
      |City        |Northampton          |
 Then verify that a new contact is created
   |Name        |Nejla Turk           |
   |Company     |HNS London Ltd       |
   |Title       |Vice Presedent       |
   |Phone       |07428579933          |
   |Email       |nej@hotmail.com      |
   |Address     |111 St. Giles Street |
   |Postal Code |NN1 1JW              |
   |City        |Northampton          |

  @necla
  Scenario: As a user, I should be able to modify the text fields -AC1
    Given the user is on Contact Tab
    When the user clicks on Name
    And the user writes a new Name
    Then verify that Name is modified
      |Name        |Mesut Turk           |

    @necla1
  Scenario: As a user, I should be able to delete the contact -AC1
    Given the user is on Contact Tab
    When the user clicks on existing Contact
    And user clicks the three dots icon from top-right
    And user clicks delete
    Then the contact will no longer be visible in the Contacts Tab


  Scenario: As a user, I should be able to a new contact  be later on added to a group
  from the contact details -AC2
    Given the user is on Contact Tab
    When user click on new or existing contact
    And user click on the Groups combobox
    And user select groups from the lists
    Then verify that added the group from the contact details
