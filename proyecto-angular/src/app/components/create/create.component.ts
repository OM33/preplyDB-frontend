import { Global } from '../../services/global';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { UploadService } from 'src/app/services/upload.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [StudentService,
    UploadService]
})
export class CreateComponent implements OnInit {
  public title: String;
  public student: Student;
  public status: String;
  public filesToUpload: Array<File>;

  constructor(private _studentService: StudentService,
    private _uploadservice: UploadService) {
    this.title = "Crear Estudiante";
    this.student = new Student('', '', '', '', '', 0, '', '', '', '', '', '', '', '');
    this.status = "";
    this.filesToUpload = [];
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    //  console.log(this.student);
    this._studentService.saveStudent(this.student).subscribe(
      response => {
        if (response.student) {
          //subiendo la imagen
          this._uploadservice.makeFileRequest(Global.url + "upload-image/" + response.student._id,
            [],
            this.filesToUpload,
            'image').then((result:any) =>{
              console.log(result);
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
