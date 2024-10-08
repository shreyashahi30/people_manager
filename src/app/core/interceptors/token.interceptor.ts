import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service'; // Adjust the path according to your project structure

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken(); // Get the token from AuthService

    if (token) {
      // Clone the request to add the new header
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Attach token in Authorization header
        }
      });
    }

    return next.handle(request); // Pass the modified request to the next handler
  }
}

