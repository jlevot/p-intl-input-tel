import * as lpn from 'google-libphonenumber';
import { AbstractControl } from '@angular/forms';

/**
 * Check if the phone number provide is in a valid format compare to the country selected
 * If not, an error is pushed to the FormControl: { invalidFormat: true }
 * It can be catched in the parent form to display a user error
 * @param control
 */
export const phoneNumberValidator = (control: AbstractControl) => {
    const value = control.value;
    if (!value) return null;

    try {
        const phoneUtil: lpn.PhoneNumberUtil = lpn.PhoneNumberUtil.getInstance();
        const phoneNumber: lpn.PhoneNumber = phoneUtil.parse(value);
        const regionCode = phoneUtil.getRegionCodeForNumber(phoneNumber);

        if (!phoneUtil.isValidNumberForRegion(phoneNumber, regionCode)) {
            return { invalidFormat: true };
        }
    } catch (error) {
        return { invalidFormat: true };
    }

    return null;
};
