import Page from "./page";

class NewYahooAccount extends Page {

    get inputFirstName() {
        return $('#usernamereg-firstName');
    }

    get inputLastName() {
        return $('#usernamereg-lastName');
    }

    get inputEmailAddress() {
        return $('#usernamereg-yid');
    }

    get inputPassword() {
        return $('#usernamereg-password');
    }

    get choiceCode() {
        return $('[name="shortCountryCode"]');
    }

    get inputPhoneNumber() {
        const selector = '//*[@id="usernamereg-phone"]';
        return $(selector);
    }

    get choiceMonth() {
        return $('#usernamereg-month');
    }

    get inputBirthDay() {
        return $('#usernamereg-day');
    }

    get inputBirthYear() {
        return $('#usernamereg-year');
    }

    get inputGender() {
        return $('#usernamereg-freeformGender');
    }

    setFirstName(text) {
        this.inputFirstName.setValue(text);
    }

    setLastName(text) {
        this.inputLastName.setValue(text);
    }

    setEmailAddress(text) {
        this.inputEmailAddress.setValue(text);
    }

    setPassword(text) {
        this.inputPassword.setValue(text);
    }

    setCountryCode(text) {
        this.choiceCode.waitForExist();
        this.choiceCode.selectByAttribute('value', text);
    }

    setPhoneNumber(text) {
        this.inputPhoneNumber.setValue(text);
    }

    setBirthMonth(text) {
        this.choiceMonth.waitForExist();
        this.choiceMonth.selectByVisibleText(text)
    }

    setBirthDay(text) {
        this.inputBirthDay.setValue(text)
    }

    setBirthYear(text) {
        this.inputBirthYear.setValue(text)
    }

    setGender(text) {
        this.inputGender.setValue(text)
    }
}

export default new NewYahooAccount();