import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { RoleService } from './../../../services/role.service';
import { Component, OnInit } from '@angular/core';
import { Role } from '../../../models/role';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {
  role: Role = new Role();
  id;

  constructor(
    private roleService: RoleService,
    private commonService: CommonService,
    private router: Router) { }

  ngOnInit() {
  }

  save(role) {
    if (this.id) {
      this.roleService.udpate(this.id, role);
    } else {
      this.roleService.create(role);
    }
    this.router.navigate([this.commonService.getRolesURL()]);
  }

  cancel() {
    this.router.navigate([this.commonService.getRolesURL()]);
  }

}
