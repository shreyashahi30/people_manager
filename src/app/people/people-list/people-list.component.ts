import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.peopleService.getPeople().subscribe((data: any[]) => {
      this.people = data;
    });
  }

  editPerson(id: number): void {
    this.router.navigate(['/edit-person', id]);
  }

  deletePerson(id: number): void {
    if (confirm('Are you sure you want to delete this person?')) {
      this.peopleService.deletePerson(id).subscribe(() => {
        this.loadPeople(); // Reload the list after deletion
      });
    }
  }
}

