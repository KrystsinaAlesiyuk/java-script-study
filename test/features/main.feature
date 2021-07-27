Feature: Sites Testing

  Scenario: As a user, I can fill a new yahoo account
    Given I am go to "https://login.yahoo.com/account/create" url
    When I fill First name with "Kristina" first name
    And I fill Last name with "Olesiyuk" last name
    And I fill Email address with "krisolesiyuk_763" email
    And I fill Password with "dfd5y65ngn" password
    And I chose Country code with "BY" code
    Then I expect Country code with "BY" code
    When I fill Mobile phone Number with "291234567" number
    And I chose Birth Month with "May" month
    And I fill Birth Day with "12" day
    And I fill Birth Year with "2000" year
    And I fill Gender with "Female" gender