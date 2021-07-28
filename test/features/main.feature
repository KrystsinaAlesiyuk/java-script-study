Feature: Sites Testing

  Scenario: As a user, I can fill a new yahoo account
    Given I am go to "https://login.yahoo.com/account/create" url
    When I fill "Kristina" First name
    And I fill "Olesiyuk" Last name
    And I fill "krisolesiyuk_763" Email address
    And I fill "dfd5y65ngn" Password
    And I chose "BY" Country code
    Then I expect "BY" is Country code
    When I fill "291234567" Mobile phone Number
    And I chose "May" Birth month
    And I fill "12" Birth day
    And I fill "2000" Birth year
    And I fill "Female" Gender