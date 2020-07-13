import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentType } from '../../core/classes/document-type';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {
  private DOCUMENT_TYPE_URL = 'http://localhost:8080/document-types';
  constructor(private http: HttpClient) { }

  getAllDocumentTypes(): Observable<DocumentType[]>{
    return this.http.get<DocumentType[]>(this.DOCUMENT_TYPE_URL);
  }

  getDocumentTypeById(id: number): Observable<DocumentType>{
    return this.http.get<DocumentType>(`${this.DOCUMENT_TYPE_URL}/${id}`);
  }

  postDocumentType(documentType: DocumentType): Observable<DocumentType>{
    return this.http.post<DocumentType>(this.DOCUMENT_TYPE_URL, documentType);
  }
  putDocumentTypeById(documentType: DocumentType): Observable<DocumentType>{
    return this.http.put<DocumentType>(`${this.DOCUMENT_TYPE_URL}/${documentType.id}`, documentType);
  }
  deleteDocumentTypeById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.DOCUMENT_TYPE_URL}/${id}`);
  }
}