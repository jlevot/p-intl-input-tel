import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PhoneNumberFormat } from 'google-libphonenumber';
import { CountryISO } from "../../projects/p-intl-input-tel/src/model/country-iso.enum";
import { SearchCountryField } from "../../projects/p-intl-input-tel/src/model/search-country-field";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
})
export class AppComponent {
    public readonly CountryISO = CountryISO;
    public readonly PhoneNumberFormat = PhoneNumberFormat;
    public readonly SearchCountryField = SearchCountryField;

    public separateDialCode: boolean = true;
    public favoriteCountries: CountryISO[] = [ CountryISO.FrenchPolynesia ];
    public phone = new FormControl({ value: '', disabled: false }, [ Validators.required ]);

    public changePreferredCountries(): void {
        this.favoriteCountries = [ CountryISO.India, CountryISO.Canada ];
    }
}
