import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Docuser } from '../../core/classes/docuser';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {


  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(file: File,docUser: Docuser): Observable<any> {


      return this.http.post(`${this.baseUrl}/documents`, [file,docUser]);



    }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
