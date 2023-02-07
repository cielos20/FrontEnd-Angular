import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  id_number: number;
  grade: number;
  date_of_birth: Date;
}

const Student_Data: PeriodicElement[] = [
  {id_number: 20123, date_of_birth: , name: 'John', grade: 10.2},
  {id_number: 20234, date_of_birth: , name: 'Jane', grade: 4.3},
  {id_number: 32135, date_of_birth: , name: 'Lily', grade: 6.9},
  {id_number: 23524, date_of_birth: , name: 'Bart', grade: 19},
  {id_number: 25675, date_of_birth: , name: 'Bort', grade: 10.8},
  {id_number: 98746, date_of_birth: , name: 'Charles', grade: 12},
  {id_number: 75947, date_of_birth: , name: 'Timothy', grade: 14},
  {id_number: 12748, date_of_birth: , name: 'Tom', grade: 15.9},
  {id_number: 38949, date_of_birth: , name: 'Tim', grade: 18.9},
  {id_number: 10912, date_of_birth: , name: 'Popo', grade: 20},
  {id_number: 45022, date_of_birth: , name: 'Reg', grade: 12.9},
  {id_number: 97864, date_of_birth: , name: 'Amy', grade: 16.1},
];

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  displayedColumns: string[] = ['id_number', 'date_of_birth','name', 'grade'];
  dataSource = Student_Data;
}
