import Page from "./page";

const selectors = {
    firstName: '#usernamereg-firstName',
    lastName: '#usernamereg-lastName',
    emailAddress: '#usernamereg-yid',
    password: '#usernamereg-password',
    choiceCode: '[name="shortCountryCode"]',
    phoneNumber: '//*[@id="usernamereg-phone"]',
    choiceMonth: '#usernamereg-month',
    birthDay: '#usernamereg-day',
    birthYear: '#usernamereg-year',
    gender: '#usernamereg-freeformGender'
}

class NewYahooAccount extends Page {

    getSelectors() {
        return selectors
    }

    get firstName() {
        return $(selectors.firstName);
    }

    get lastName() {
        return $(selectors.lastName);
    }

    get emailAddress() {
        return $(selectors.emailAddress);
    }

    get password() {
        return $(selectors.password);
    }

    get choiceCode() {
        return $(selectors.choiceCode);
    }

    get phoneNumber() {
        return $(selectors.phoneNumber);
    }

    get choiceMonth() {
        return $(selectors.choiceMonth);
    }

    get birthDay() {
        return $(selectors.birthDay);
    }

    get birthYear() {
        return $(selectors.birthYear);
    }

    get gender() {
        return $(selectors.gender);
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