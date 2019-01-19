import { Injectable } from '@angular/core';
import { LICENSE_DATA } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getLicenses(): Number[] {
    return LICENSE_DATA;
  };
}
