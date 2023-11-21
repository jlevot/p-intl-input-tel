import { PhoneNumber, PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';

export class ChangeData {
    number: string;
    internationalNumber: string;
    nationalNumber: string;
    e164Number: string;
    countryCode: string | undefined;
    dialCode: string;

    constructor(phoneNumber?: PhoneNumber) {
        const utils = PhoneNumberUtil.getInstance();
        this.countryCode = phoneNumber && utils.getRegionCodeForNumber(phoneNumber) ? utils.getRegionCodeForNumber(phoneNumber) : '';
        this.dialCode = phoneNumber?.getCountryCode() ? `+${phoneNumber.getCountryCode()}` : '';
        this.e164Number = phoneNumber && utils.format(phoneNumber, PhoneNumberFormat.E164) !== '+0' ? utils.format(phoneNumber, PhoneNumberFormat.E164) : '';
        this.internationalNumber = phoneNumber ? utils.format(phoneNumber, PhoneNumberFormat.INTERNATIONAL) : '';
        this.nationalNumber = phoneNumber ? utils.format(phoneNumber, PhoneNumberFormat.NATIONAL) : '';
        this.number = phoneNumber ? utils.format(phoneNumber, PhoneNumberFormat.NATIONAL) : '';
    }
}
