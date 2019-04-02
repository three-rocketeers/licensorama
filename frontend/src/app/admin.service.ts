import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { License } from './license';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = environment.production ? 'https://licensorama-backend.herokuapp.com' : 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getLicenses(): Observable<License[]> {
    return this.http.get<License[]>(this.baseUrl + '/api/licenses');
  }
}
