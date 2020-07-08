import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Documentt } from '../../core/classes/documentt';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  private static URL_GET_DOCUMENTSBYID = 'http://localhost:8080/documents';

  constructor(private http : HttpClient) { }

  getDocumentsById (id : number) : Observable<Documentt[]> {
    return this.http.get<Documentt[]>(ProjectDetailsService.URL_GET_DOCUMENTSBYID+"/"+id);
  }
}
