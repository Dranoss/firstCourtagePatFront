import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentType } from '../../core/classes/document-type';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {
  private static DOCUMENT_TYPE_URL = environment.baseUrl + 'document-types';
  constructor(private http: HttpClient) { }

  getAllDocumentTypes(): Observable<DocumentType[]>{
    return this.http.get<DocumentType[]>(DocumentTypeService.DOCUMENT_TYPE_URL);
  }

  getDocumentTypeById(id: number): Observable<DocumentType>{
    return this.http.get<DocumentType>(`${DocumentTypeService.DOCUMENT_TYPE_URL}/${id}`);
  }

  postDocumentType(documentType: DocumentType): Observable<DocumentType>{
    return this.http.post<DocumentType>(DocumentTypeService.DOCUMENT_TYPE_URL, documentType);
  }
  putDocumentTypeById(documentType: DocumentType): Observable<DocumentType>{
    return this.http.put<DocumentType>(`${DocumentTypeService.DOCUMENT_TYPE_URL}/${documentType.id}`, documentType);
  }
  deleteDocumentTypeById(id: number): Observable<void> {
    return this.http.delete<void>(`${DocumentTypeService.DOCUMENT_TYPE_URL}/${id}`);
  }
}
