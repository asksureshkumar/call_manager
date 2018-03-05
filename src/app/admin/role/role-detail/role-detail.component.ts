import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { RoleService } from './../../../services/role.service';
import { Component, OnInit } from '@angular/core';
import { Role } from '../../../models/role';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  role: Role;
  id;

  constructor(private roleService: RoleService
    ,
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

  ngOnInit() {
  }

  cancel() {
    this.router.navigate([this.commonService.getRolesURL()]);
  }

}
