import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from './student-card/student-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StudentCardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  students = [
    {
      id: 1,
      name: 'John Doe',
      age: 20,
      course: 'Computer Science',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      extra: 'Enjoys coding and football'
    },
    {
      id: 2,
      name: 'Sarah Mensah',
      age: 24,
      course: 'Mathematics',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
      extra: 'Loves teaching others'
    },
    {
      id: 3,
      name: 'Kwame Boateng',
      age: 23,
      course: 'Business Administration',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      extra: 'Interested in entrepreneurship'
    }
  ];
}