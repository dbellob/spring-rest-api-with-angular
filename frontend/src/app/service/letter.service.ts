import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LetterService {
  constructor(private http: HttpClient, ) {
  }

  getByLanguageId(languageId: number): Observable<any[]> {
    let apiURL = `${'http://localhost:8080'}${'/api/letter/'}${languageId}`;
    return this.http.get<any[]>(apiURL);
  }
}
