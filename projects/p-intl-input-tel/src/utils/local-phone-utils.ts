import * as lpn from "google-libphonenumber";
import { PhoneNumber, PhoneNumberFormat, PhoneNumberUtil } from "google-libphonenumber";
import { ChangeData } from "../model/change-data";
import { ALL_COUNTRIES } from "../data/country-code";

export class LocalPhoneUtils {
    /**
     * Returns parse PhoneNumber object.
     * @param phoneNumber string
     * @param regionCode string
     */
    public static getParsedNumber(phoneNumber: string = '', regionCode: string = ''): PhoneNumber {
        if( !phoneNumber || !regionCode ) return new PhoneNumber();
        try {
            return lpn.PhoneNumberUtil.getInstance().parse(phoneNumber, regionCode.toUpperCase());
        } catch (e) {
            return new PhoneNumber()
        }
    }

    /**
     * Return a ChangeData object initialized with a phone number
     * @param phoneNumber
     */
    public static getChangeData(phoneNumber?: string): ChangeData {
        return new ChangeData(!phoneNumber ? new PhoneNumber() : lpn.PhoneNumberUtil.getInstance().parse(phoneNumber));
    }


    /**
     * Gets formatted example phone number from phoneUtil.
     * @param numberFormat
     * @param countryCode
     */
    public static getPhoneNumberPlaceHolder(numberFormat: PhoneNumberFormat, countryCode: string): string {
        const phoneUtil: PhoneNumberUtil = lpn.PhoneNumberUtil.getInstance();
        return phoneUtil.format(phoneUtil.getExampleNumber(countryCode), numberFormat);
    }

    /**
     * Sifts through all countries and returns iso code of the primary country
     * based on the number provided.
     * @param number PhoneNumber
     * @param countryCode country code in number format
     */
    public static getCountryIsoCode(number: PhoneNumber, countryCode?: number): string | undefined {
        if( !countryCode ) return;
        // Will use this to match area code from the first numbers
        // @ts-ignore
        const rawNumber = number['values_']['2'].toString();
        // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
        const countriesFiltered = ALL_COUNTRIES.filter((c) => c[2].toString() === countryCode.toString());
        // Main country is the country, which has no areaCodes specified in country-code.ts file.
        const mainCountry = countriesFiltered.find((c) => c[4] === undefined);
        // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
        const secondaryCountries = countriesFiltered.filter((c) => c[4] !== undefined);
        let matchedCountry = mainCountry ? mainCountry[1].toString() : undefined;

        /*
          Iterate over each secondary country and check if nationalNumber starts with any of areaCodes available.
          If no matches found, fallback to the main country.
        */
        secondaryCountries.forEach((country) => {
            // @ts-ignore
            country[4].forEach((areaCode) => {
                if( rawNumber.startsWith(areaCode) ) matchedCountry = country[1].toString();
            });
        });

        return matchedCountry;
    }
}
