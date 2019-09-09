import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private http: HttpClient, ) {
  }

  getAll(): Observable<any[]> {
    let apiURL = `${'http://localhost:8080'}${'/api/languaje'}`;
    return this.http.get<any[]>(apiURL);
  }
}
