import Page from "./page";

class NewYahooAccount extends Page {

    get firstName() {
        return $('#usernamereg-firstName');
    }

    get lastName() {
        return $('#usernamereg-lastName');
    }

    get emailAddress() {
        return $('#usernamereg-yid');
    }

    get password() {
        return $('#usernamereg-password');
    }

    get choiceCode() {
        return $('[name="shortCountryCode"]');
    }

    get phoneNumber() {
        const selector = '//*[@id="usernamereg-phone"]';
        return $(selector);
    }

    get choiceMonth() {
        return $('#usernamereg-month');
    }

    get birthDay() {
        return $('#usernamereg-day');
    }

    get birthYear() {
        return $('#usernamereg-year');
    }

    get gender() {
        return $('#usernamereg-freeformGender');
    }

    setText = (el, text) => el.setValue(text);

    setFirstName(text) {
        this.setText(this.firstName, text)

    }

    setLastName(text) {
        this.setText(this.lastName, text)
    }

    setEmailAddress(text) {
        this.setText(this.emailAddress, text)
    }

    setPassword(text) {
        this.setText(this.password, text)
    }

    setCountryCode(text) {
        this.choiceCode.waitForExist();
        this.choiceCode.selectByAttribute('value', text);
    }

    setPhoneNumber(text) {
        this.setText(this.phoneNumber, text)
    }

    setBirthMonth(text) {
        this.choiceMonth.waitForExist();
        this.choiceMonth.selectByVisibleText(text)
    }

    setBirthDay(text) {
        this.setText(this.birthDay, text)
    }

    setBirthYear(text) {
        this.setText(this.birthYear, text)
    }

    setGender(text) {
        this.setText(this.gender, text)
    }
}

export default new NewYahooAccount();