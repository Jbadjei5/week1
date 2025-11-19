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
  students: Student[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      age: 21,
      course: 'Computer Science',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      age: 22,
      course: 'Data Science',
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'James Wilson',
      age: 20,
      course: 'Artificial Intelligence',
      imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];
}
