import {Given, When, Then} from 'cucumber';
const expect = require('chai').expect;

import NewYahooAccount from '../page-objects/yahoo.page.js'

Given(/^I am go to "(.*)" url$/, (url) => {
    browser.url(url);
});

When(/^I fill "(.*)" First name$/, (text) => {
    NewYahooAccount.setFirstName(text);
})

When(/^I fill "(.*)" Last name$/, (text) => {
    NewYahooAccount.setLastName(text);
})

When(/^I fill "(.*)" Email address$/, (text) => {
    NewYahooAccount.setEmailAddress(text);
})

When(/^I fill "(.*)" Password$/, (text) => {
    NewYahooAccount.setPassword(text);
})

When(/^I chose "(.*)" Country code$/, (text) => {
    NewYahooAccount.setCountryCode(text)
})

Then(/^I expect "(.*)" is Country code$/, (text) => {
    const actualCode = NewYahooAccount.choiceCode.getValue();
    expect(text).to.be.equal(actualCode, `Exp: ${text}, Act: ${actualCode}`);
})

When(/^I fill "(.*)" Mobile phone Number/, (text) => {
    NewYahooAccount.setPhoneNumber(text)
})

When(/^I chose "(.*)" Birth month$/, (text) => {
    NewYahooAccount.setBirthMonth(text)
})

When(/^I fill "(.*)" Birth day$/, (text) => {
    NewYahooAccount.setBirthDay(text)
})

When(/^I fill "(.*)" Birth year$/, (text) => {
    NewYahooAccount.setBirthYear(text)
})

When(/^I fill "(.*)" Gender$/, (text) => {
    NewYahooAccount.setGender(text)
})
