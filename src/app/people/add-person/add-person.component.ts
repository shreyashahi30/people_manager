import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  name: string = '';
  age: number | null = null;

  constructor(private peopleService: PeopleService, private router: Router) {}

  addPerson() {
    if (this.name && this.age !== null) {
      const newPerson = {
        name: this.name,
        age: this.age
      };

      this.peopleService.addPerson(newPerson).subscribe(() => {
        // Navigate back to the people list after adding
        this.router.navigate(['/people']);
      });
    } else {
      alert('Please enter valid name and age.');
    }
  }
}

