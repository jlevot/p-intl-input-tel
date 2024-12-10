import { ApplicationConfig, enableProdMode } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import 'zone.js';
import { environment } from './environments/environment';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';

if (environment.production) {
    enableProdMode();
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        providePrimeNG({
            theme: {
                preset: Lara
            }
        })
    ]
}
