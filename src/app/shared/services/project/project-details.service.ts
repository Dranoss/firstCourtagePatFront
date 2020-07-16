import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Documentt } from '../../core/classes/documentt';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  private static URL_GET_DOCUMENTSBYID = environment.base_url + 'documents';

  constructor(private http: HttpClient) { }

  getDocumentsById(id: number): Observable<Documentt[]> {
    return this.http.get<Documentt[]>(ProjectDetailsService.URL_GET_DOCUMENTSBYID +'/'+ id);
  }
}
