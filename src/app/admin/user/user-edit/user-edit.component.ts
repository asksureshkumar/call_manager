import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { UserService } from './../../../services/user.service';
import { User } from './../../../models/user';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnDestroy {
  subscription: Subscription;
  user: User = new User();
  roles: Role[];
  id;

  constructor(private userService: UserService,
    private roleService: RoleService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute) {
    this.subscription = this.roleService.getAll().subscribe(roles => {
      this.roles = roles;
    });
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.userService.get(this.id)
          .take(1)
          .subscribe((p) => {
            this.user = p;
          });
    }
  }

  save(role) {
    if (this.id) {
      this.userService.udpate(this.id, role);
    }
    this.router.navigate([this.commonService.getUsersURL()]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  cancel() {
    this.router.navigate([this.commonService.getUsersURL()]);
  }

}
