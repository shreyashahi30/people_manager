import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {
  personId: number | null = null;
  personName: string = '';

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personId = +this.route.snapshot.paramMap.get('id')!; // Get the person ID from the route
    this.loadPerson();
  }

  loadPerson(): void {
    if (this.personId) {
      this.peopleService.getPerson(this.personId).subscribe((person) => {
        this.personName = person.name;
      });
    }
  }

  confirmDelete(): void {
    if (this.personId) {
      this.peopleService.deletePerson(this.personId).subscribe(() => {
        // Navigate back to the people list after deleting
        this.router.navigate(['/people']);
      });
    }
  }
}

