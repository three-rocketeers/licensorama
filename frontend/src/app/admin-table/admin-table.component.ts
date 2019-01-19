import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {

  licenses: Number[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.licenses = this.adminService.getLicenses();
  }

}
