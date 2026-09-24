import { ApplicationConfig, enableProdMode } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import 'zone.js';
import { environment } from './environments/environment';
import { provideOptimus } from '@openng/optimus-ui/config';
import Lara from '@openng/optimus-ui-themes/lara';

if (environment.production) {
    enableProdMode();
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideOptimus({
            theme: {
                preset: Lara
            }
        })
    ]
}
