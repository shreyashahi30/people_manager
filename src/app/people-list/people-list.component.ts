import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';  // Service to fetch people data

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];
  errorMessage: string = '';

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.fetchPeople();
  }

  // Fetch all people from the service
  fetchPeople(): void {
    this.peopleService.getPeople().subscribe({
      next: (response) => {
        this.people = response;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load people list.';
        console.error(err);
      }
    });
  }

  // Navigate to the edit page for a person
  editPerson(id: number): void {
    this.router.navigate([`/people/edit/${id}`]);
  }

  // Call the service to delete a person by their id
  deletePerson(id: number): void {
    this.peopleService.deletePerson(id).subscribe({
      next: () => {
        this.fetchPeople();  // Refresh the list after deletion
      },
      error: (err) => {
        this.errorMessage = 'Failed to delete the person.';
        console.error(err);
      }
    });
  }
}

