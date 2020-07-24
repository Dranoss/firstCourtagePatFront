import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Document } from '../../core/classes/document';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  upload(file: File, document: Document): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('document', file);
    const req = new HttpRequest('POST', `${this.baseUrl}documents/upload/${document.id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}documents`);
  }

  download(document: Document): Observable<any>{
    return this.http.get(`${this.baseUrl}documents/file/${document.name}`, {responseType: 'blob', observe: 'response'});
  }
}
