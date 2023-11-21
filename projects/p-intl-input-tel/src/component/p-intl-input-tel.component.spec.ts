import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlInputTelComponent } from './p-intl-input-tel.component';
import { FilterPipe } from "../pipe/filter.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from 'primeng/dropdown';

describe('PIntlTelInputComponent', () => {
    let component: IntlInputTelComponent;
    let fixture: ComponentFixture<IntlInputTelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ IntlInputTelComponent, FilterPipe ],
            imports: [ FormsModule, ReactiveFormsModule, DropdownModule ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IntlInputTelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
