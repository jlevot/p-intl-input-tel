import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PhoneNumberFormat } from 'google-libphonenumber';
import { CountryISO } from "../../projects/p-intl-input-tel/src/model/country-iso.enum";
import { SearchCountryField } from "../../projects/p-intl-input-tel/src/model/search-country-field";
import { IntlInputTelComponent } from '../../projects/p-intl-input-tel/src/component/p-intl-input-tel.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [ CommonModule, IntlInputTelComponent, FormsModule, ReactiveFormsModule, ButtonModule ]
})
export class AppComponent {
    public readonly CountryISO = CountryISO;
    public readonly PhoneNumberFormat = PhoneNumberFormat;
    public readonly SearchCountryField = SearchCountryField;

    public separateDialCode: boolean = true;
    public favoriteCountries: CountryISO[] = [ CountryISO.FrenchPolynesia ];
    public phone = new FormControl({ value: '+468 969-4148', disabled: false }, [ Validators.required ]);

    public changePreferredCountries(): void {
        this.favoriteCountries = [ CountryISO.India, CountryISO.Canada ];
    }
}
