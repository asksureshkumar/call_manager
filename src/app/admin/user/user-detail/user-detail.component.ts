import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  id;

  constructor(private userService: UserService
    ,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.userService.get(this.id)
          .take(1)
          .subscribe((p) => {
            this.user = p;
          });
    }
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate([this.commonService.getUsersURL()]);
  }

}
