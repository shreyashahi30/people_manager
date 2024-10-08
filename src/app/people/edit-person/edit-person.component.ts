import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  personId: number | null = null;
  name: string = '';
  age: number | null = null;

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
        this.name = person.name;
        this.age = person.age;
      });
    }
  }

  updatePerson(): void {
    if (this.name && this.age !== null) {
      const updatedPerson = {
        name: this.name,
        age: this.age
      };

      this.peopleService.updatePerson(this.personId!, updatedPerson).subscribe(() => {
        // Navigate back to the people list after updating
        this.router.navigate(['/people']);
      });
    } else {
      alert('Please enter valid name and age.');
    }
  }
}

