import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [StudentService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public student: Student;
  constructor(
    private _studentService: StudentService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.student = new Student('', '', '', '', '', 0, '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getStudent(id);
    });
  }

  getStudent(id: any) {
    this._studentService.getStudent(id).subscribe(
      response => {
        this.student = response.student;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  deleteStudent(id: any) {
    this._studentService.deleteStudent(id).subscribe(response => {
      if (response.sudent) {
        this._router.navigate(['/students']);
      }
    },
      error => {
        console.log(<any>error);
      }
    );
  }
}
