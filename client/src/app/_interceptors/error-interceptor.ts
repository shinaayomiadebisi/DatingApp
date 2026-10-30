import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error) => {
      if (error) {
        switch (error.status) {
          case 400:
            if (error.error.errors) {
              const modelStateErrors = [];
              for (const key in error.error.errors) {
                if (error.error.errors[key]) {
                  modelStateErrors.push(error.error.errors[key]);
                }
              }
            }
            break;

          default:
            break;
        }
      }
      console.error(error);
      return throwError(() => error);
      // return throwError(() => new Error('Something went wrong'));
    }),
  );
};

// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

// @Injectable()
// export class MyInterceptor implements HttpInterceptor {

//   constructor(
//     private router: Router,
//     private toastr: ToastrService
//   ) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Example usage:
//     // this.toastr.error('An error occurred');
//     // this.router.navigate(['/login']);

//     return next(req);
//   }
// }
