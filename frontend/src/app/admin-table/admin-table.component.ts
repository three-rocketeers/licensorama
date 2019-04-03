import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { License } from '../license';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {

  licenses: License[];
  displayedColumns: string[] = ['licenseId', 'password', 'productId'];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getLicenses();
  }

  getLicenses(): void {
    this.adminService.getLicenses().subscribe(licenses => this.licenses = licenses);
  }

}
