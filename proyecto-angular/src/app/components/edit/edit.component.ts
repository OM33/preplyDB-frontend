import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from 'src/app/services/student.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.css'],
  providers: [StudentService,
    UploadService]
})
export class EditComponent implements OnInit {
  public title: String;
  public student: Student;
  public status: String;
  public filesToUpload: Array<File>;
  public saved_student: Student;
  public url: string; 

  constructor(private _studentService: StudentService,
    private _uploadservice: UploadService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.title = "Editar Estudiante";
    this.student = new Student('','','','','',0,'',0,'','','','','','','','');
    this.status = "";
    this.filesToUpload = [];
    this.saved_student = new Student('','','','','',0,'',0,'','','','','','','','');
    this.url = Global.url;
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

  onSubmit(form: any) {
     console.log(this.student);
    this._studentService.updateStudent(this.student).subscribe(
      response => {
        if (response.student) {
          //subiendo la imagen
          this._uploadservice.makeFileRequest(Global.url + "upload-image/" + response.student._id,
            [],
            this.filesToUpload,
            'image').then((result:any) =>{
              console.log(result);
              this.saved_student = result.student;
              this.status = "success";
              form.reset();
            });
        } else {
          this.status = "failed";
        }
      },
      error => {
        console.log(<any>error);
      });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
