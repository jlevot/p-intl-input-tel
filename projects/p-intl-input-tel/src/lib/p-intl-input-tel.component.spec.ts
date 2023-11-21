import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIntlInputTelComponent } from './p-intl-input-tel.component';
import { FilterPipe } from "./pipe/filter.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe('NgxIntlTelInputComponent', () => {
    let component: PIntlInputTelComponent;
    let fixture: ComponentFixture<PIntlInputTelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PIntlInputTelComponent, FilterPipe ],
            imports: [ FormsModule, ReactiveFormsModule ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PIntlInputTelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
