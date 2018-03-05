import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { RoleService } from './../../../services/role.service';
import { Role } from './../../../models/role';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
  role: Role = new Role();
  id;

  constructor(private roleService: RoleService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.roleService.get(this.id)
          .take(1)
          .subscribe((p) => {
            this.role = p;
          });
    }
  }

  save(role) {
    if (this.id) {
      this.roleService.udpate(this.id, role);
    }
    this.router.navigate([this.commonService.getRolesURL()]);
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate([this.commonService.getRolesURL()]);
  }

}
