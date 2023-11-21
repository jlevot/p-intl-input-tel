import * as lpn from 'google-libphonenumber';
import { PhoneNumber, PhoneNumberUtil } from 'google-libphonenumber';
import { ChangeData } from '../model/change-data';
import { AbstractControl } from '@angular/forms';
import { LocalPhoneUtils } from "../utils/local-phone-utils";

/**
 * Check if the phone number provide is in a valid format compare to the country selected
 * If not, an error is pushed to the FormControl: { invalidFormat: true }
 * It can be catched in the parent form to display a user error
 * @param control
 */
export const phoneNumberValidator = (control: AbstractControl) => {
    if( !control.value ) return;
    // @ts-ignore
    // Native element property is added with NativeElementInjectorDirective
    const el: HTMLElement = control['nativeElement'] as HTMLElement;
    const inputBox: HTMLInputElement | any = el?.querySelector('input[type="tel"]') || undefined;
    if( inputBox ){
        const isCheckValidation = !!inputBox.getAttribute('validation');
        if( !isCheckValidation ) control.clearValidators();

        const phoneUtil: PhoneNumberUtil = lpn.PhoneNumberUtil.getInstance();
        const phoneNumber: PhoneNumber = phoneUtil.parse(control.value);
        const phoneFormatted = new ChangeData(!control.value ? new PhoneNumber() : phoneNumber);
        const number = phoneUtil.parse(phoneFormatted.number, LocalPhoneUtils.getCountryIsoCode(phoneNumber, phoneNumber?.getCountryCode()));
        if( !phoneUtil.isValidNumberForRegion(number, phoneFormatted.countryCode) ) return { invalidFormat: true };
    }
    return;
};
