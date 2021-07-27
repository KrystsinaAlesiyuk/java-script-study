import {Given, When, Then} from 'cucumber';
const expect = require('chai').expect;

import NewYahooAccount from '../page-objects/yahoo.page.js'

Given(/^I am go to "(.*)" url$/, (url) => {
    browser.url(url);
});

When(/^I fill First name with "(.*)" first name$/, (text) => {
    NewYahooAccount.setFirstName(text);
})

When(/^I fill Last name with "(.*)" last name$/, (text) => {
    NewYahooAccount.setLastName(text);
})

When(/^I fill Email address with "(.*)" email$/, (text) => {
    NewYahooAccount.setEmailAddress(text);
})

When(/^I fill Password with "(.*)" password$/, (text) => {
    NewYahooAccount.setPassword(text);
})

When(/^I chose Country code with "(.*)" code$/, (text) => {
    NewYahooAccount.setCountryCode(text)
})

Then(/^I expect Country code with "(.*)" code$/, (text) => {
    const actualCode = NewYahooAccount.choiceCode.getValue();
    expect(text).to.be.equal(actualCode, `Exp: ${text}, Act: ${actualCode}`);
})

When(/^I fill Mobile phone Number with "(.*)" number$/, (text) => {
    NewYahooAccount.setPhoneNumber(text)
})

When(/^I chose Birth Month with "(.*)" month$/, (text) => {
    NewYahooAccount.setBirthMonth(text)
})

When(/^I fill Birth Day with "(.*)" day$/, (text) => {
    NewYahooAccount.setBirthDay(text)
})

When(/^I fill Birth Year with "(.*)" year$/, (text) => {
    NewYahooAccount.setBirthYear(text)
})

When(/^I fill Gender with "(.*)" gender$/, (text) => {
    NewYahooAccount.setGender(text)
})
