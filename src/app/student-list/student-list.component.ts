import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from '../student-card/student-card.component';
import { Student } from '../student-card/student-card.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, StudentCardComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  
    students = [
    {
      id: 1,
      name: 'John Doe',
      age: 20,
      course: 'Computer Science',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
     
    },
    {
      id: 2,
      name: 'Sarah Mensah',
      age: 24,
      course: 'Mathematics',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
      
    },
    {
      id: 3,
      name: 'Kwame Boateng',
      age: 23,
      course: 'Business Administration',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      
    }
  ];
}
  