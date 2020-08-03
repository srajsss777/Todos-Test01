import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from './http-interceptors';

export const httpInterceptProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthHttpInterceptor,
        multi: true
    }
];
