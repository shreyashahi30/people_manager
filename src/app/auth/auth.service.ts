import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://example.com/api'; // Replace with your API URL
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };
    
    return this.http.post(`${this.apiUrl}/login`, body, { headers }).pipe(
      map((response: any) => {
        // Assume response contains a token
        if (response && response.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
        return response;
      }),
      catchError((error) => {
        console.error('Login failed:', error);
        return throwError(error);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}

