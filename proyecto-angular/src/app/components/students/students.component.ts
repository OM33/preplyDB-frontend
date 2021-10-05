import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit {
  public students: Student[];
  public url: string;

  constructor(private _studentService: StudentService) { 
    this.students = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this._studentService.getStudents().subscribe(
      response =>{
        if(response.students){
          this.students = response.students;
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
