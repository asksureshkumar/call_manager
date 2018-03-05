import { UserService } from './../../services/user.service';
import { User } from '../../models/user';
import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as $ from 'jquery';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnDestroy {

  subscription: Subscription;
  users: User[];
  user: User;
  filteredUsers: any[];

  constructor(private userService: UserService,
    public commonService: CommonService) {
    this.subscription = this.userService.getAll().subscribe(users => {
      this.filteredUsers = this.users = users;
    });
  }

  filter(query: string) {
    this.filteredUsers = (query) ?
      this.users.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : this.users;
  }

  showDeletePopup(user) {
    this.user =  user;
  }

  delete(userId) {
    this.userService.delete(userId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
