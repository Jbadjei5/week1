import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { InitialsPipe } from '../initials.pipe';

export interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  imageUrl: string;
  extra?: string;
}

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule, NgClass, InitialsPipe],
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Input() student!: Student;
  showDetails = false;

  ngOnInit(): void {
    console.log(`Student card loaded: ${this.student.name}`);
  }


  }
 

