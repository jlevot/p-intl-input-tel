import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ButtonModule } from "primeng/button";
import { IntlInputTelModule } from "../../projects/p-intl-input-tel/src/component/p-intl-input-tel.module";

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        IntlInputTelModule,
        BrowserAnimationsModule,
        ButtonModule
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
