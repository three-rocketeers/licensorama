import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { License } from './license';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getLicenses(): Observable<License[]> {
    return this.http.get<License[]>('http://localhost:5000/api/licenses');
  };
}
