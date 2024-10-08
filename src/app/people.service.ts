import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private apiUrl = 'https://api.example.com/people';  

  constructor(private http: HttpClient) {}

  // Get the list of people
  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a single person by id
  getPerson(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Delete a person by id
  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

