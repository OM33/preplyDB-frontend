import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {
    public url: String;

    constructor() {
        this.url = Global.url;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
        return new Promise(function (resolve, reject) {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            for(var i = 0; i < files.length; i++){
                formData.append(name, files[i], files[i].name);
            }

            // files.forEach((name, files) =>
            //     formData.append(name, files)
            // );

            //peticion Ajax
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            //peticion por post
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }

}