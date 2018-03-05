import { RoleService } from './../../../services/role.service';
import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user';
import { Subscription } from 'rxjs/Subscription';
import { Role } from '../../../models/role';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnDestroy {
  user: User = new User();
  subscription: Subscription;
  roles: Role[];
  id;

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private commonService: CommonService,
    private router: Router) {
      this.subscription = this.roleService.getAll().subscribe(roles => {
        this.roles = roles;
      });
    }

  save(user) {
    if (this.id) {
      this.userService.udpate(this.id, user);
    } else {
      this.userService.create(user);
    }
    this.router.navigate([this.commonService.getUsersURL()]);
  }

  cancel() {
    this.router.navigate([this.commonService.getUsersURL()]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
