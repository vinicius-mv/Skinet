import { APP_INITIALIZER, ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { InitService } from './core/services/init.service';
import { lastValueFrom } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([errorInterceptor, loadingInterceptor])),
    provideAppInitializer(initializeApp), // Provide the initialization function directly
  ],
};

function initializeApp() {
  const initService = inject(InitService);
  return lastValueFrom(initService.init()).finally(() => {
    // create a html element (initial-splash) to indicate initial loading while the cart is being loaded
    const splash = document.getElementById('initial-splash');
    if (splash) {
      splash.remove();
    }
  });
}
