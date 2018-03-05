import { RoleService } from './../../services/role.service';
import { Role } from '../../models/role';
import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as $ from 'jquery';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnDestroy {
  subscription: Subscription;
  roles: Role[];
  role: Role;
  filteredRoles: any[];

  constructor(private roleService: RoleService,
    public commonService: CommonService) {
    this.subscription = this.roleService.getAll().subscribe(roles => {
      this.filteredRoles = this.roles = roles;
    });
  }

  filter(query: string) {
    this.filteredRoles = (query) ?
      this.roles.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : this.roles;
  }

  showDeletePopup(role) {
    this.role =  role;
  }

  delete(roleId) {
    this.roleService.delete(roleId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
