import { ApplicationConfig, enableProdMode } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import 'zone.js';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

export const appConfig: ApplicationConfig = {
    providers: [ provideAnimations() ]
}
