import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeElementInjectorDirective } from '../directives/native-element-injector.directive';
import { IntlInputTelComponent } from './p-intl-input-tel.component';
import { FilterPipe } from '../pipe/filter.pipe';
import { DialCodePipe } from '../pipe/dialCode.pipe';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { FavoriteElementInjectorDirective } from '../directives/favorite-element-injector.directive';


@NgModule({
    declarations: [
        IntlInputTelComponent,
        NativeElementInjectorDirective,
        FavoriteElementInjectorDirective,
        FilterPipe,
        DialCodePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        InputTextModule
    ],
    exports: [ IntlInputTelComponent, NativeElementInjectorDirective, FavoriteElementInjectorDirective ],
})
export class IntlInputTelModule {
}
