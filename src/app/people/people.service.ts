import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private apiUrl = 'https://api.example.com/people'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Get the list of people
  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a single person by id
  getPerson(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Add a new person
  addPerson(person: any): Observable<any> {
    return this.http.post(this.apiUrl, person);
  }

  // Edit an existing person
  editPerson(id: number, person: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, person);
  }

  // Delete a person by id
  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

