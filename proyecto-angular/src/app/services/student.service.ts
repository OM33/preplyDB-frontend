import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Student } from '../models/student';
import { Global } from './global';

@Injectable()
export class StudentService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio';
    }
    
    saveStudent(student:Student): Observable<any>{
        let params = JSON.stringify(student);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'save-student', params, {headers: headers});
    }

    getStudents(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'get-students', {headers:headers});
    }

    getStudent(id : any): Observable<any>{
        let headers = new HttpHeaders().set('content-Type', 'application/json');
        return this._http.get(this.url + 'get-student/' + id, {headers: headers});
    } 

    deleteStudent(id: any): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'student/'+ id , {headers:headers});
    }

    updateStudent(student:Student): Observable<any>{
        let params = JSON.stringify(student);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'student/'+student._id, params, {headers: headers});
    }
}