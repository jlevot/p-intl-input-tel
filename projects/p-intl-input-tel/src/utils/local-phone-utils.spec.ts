import * as lpn from "google-libphonenumber";
import { PhoneNumber, PhoneNumberFormat, PhoneNumberUtil, RegionCode } from "google-libphonenumber";
import { LocalPhoneUtils } from "./local-phone-utils";
import { ChangeData } from "../model/change-data";

describe('PIntlTelInputComponent', () => {
    const phoneNumberUtils: PhoneNumberUtil = lpn.PhoneNumberUtil.getInstance();
    const defaultPhoneNumber: string = '40404040';
    const defaultRegionCode: RegionCode = 'PF';

    it('should parse a number with a PhoneNumber format', () => {
        expect(LocalPhoneUtils.getParsedNumber()).toEqual(new PhoneNumber());
        expect(LocalPhoneUtils.getParsedNumber('null', defaultRegionCode)).toEqual(new PhoneNumber());
        const numberToCompare = phoneNumberUtils.parse(defaultPhoneNumber, defaultRegionCode)
        expect(numberToCompare).toEqual(LocalPhoneUtils.getParsedNumber(defaultPhoneNumber, defaultRegionCode));
    });

    it('should return a ChangeData object', () => {
        expect(LocalPhoneUtils.getChangeData()).toEqual(new ChangeData())
        const changeDataToCompare: ChangeData = {
            countryCode: 'PF',
            dialCode: '+689',
            e164Number: '+68940404040',
            internationalNumber: '+689 40 40 40 40',
            nationalNumber: '40 40 40 40',
            number: '40 40 40 40'
        }
        expect(LocalPhoneUtils.getChangeData('+68940404040')).toEqual(changeDataToCompare)
    });

    it('should return a placeholder sample by numberFormat give in params', () => {
        expect(LocalPhoneUtils.getPhoneNumberPlaceHolder(PhoneNumberFormat.INTERNATIONAL, defaultRegionCode)).toEqual('+689 40 41 23 45');
        expect(LocalPhoneUtils.getPhoneNumberPlaceHolder(PhoneNumberFormat.NATIONAL, defaultRegionCode)).toEqual('40 41 23 45');
        expect(LocalPhoneUtils.getPhoneNumberPlaceHolder(PhoneNumberFormat.E164, defaultRegionCode)).toEqual('+68940412345');
    });

    it('should return the matched country compare too the regionCode and regionArea when is more than one', () => {
        const phoneNumberUtils: PhoneNumberUtil = lpn.PhoneNumberUtil.getInstance();
        let phoneNumber: PhoneNumber = phoneNumberUtils.parse('+68940404040');
        expect(LocalPhoneUtils.getCountryIsoCode(phoneNumber, phoneNumber?.getCountryCode())).toEqual('pf');
        phoneNumber = phoneNumberUtils.parse('+12044040404');
        expect(LocalPhoneUtils.getCountryIsoCode(phoneNumber, phoneNumber?.getCountryCode())).toEqual('ca');
        phoneNumber = phoneNumberUtils.parse('+15624040404');
        expect(LocalPhoneUtils.getCountryIsoCode(phoneNumber, phoneNumber?.getCountryCode())).toEqual('us');
    });
});
