import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { IntlInputTelComponent } from './p-intl-input-tel.component';
import { FilterPipe } from './pipe/filter.pipe';
import { DialCodePipe } from './pipe/dialCode.pipe';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
    declarations: [ IntlInputTelComponent, NativeElementInjectorDirective, FilterPipe, DialCodePipe ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        InputTextModule,
        ButtonModule
    ],
    exports: [ IntlInputTelComponent, NativeElementInjectorDirective ],
})
export class IntlInputTelModule {
}
