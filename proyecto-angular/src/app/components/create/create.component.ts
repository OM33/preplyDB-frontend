import { Global } from '../../services/global';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service'; 


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [StudentService]
})
export class CreateComponent implements OnInit {
   public title: String;
   public student: Student;
  
   constructor(private _studentService: StudentService) { 
    this.title = "Crear Estudiante";
    this.student = new Student('','','','','',0,'','','','','','','',''); 
  }

  ngOnInit(): void {
  }

   onSubmit(form:any){
     console.log(this.student);
   }
}
