import { UserService } from './../../services/user.service';
import { SubCategoryService } from './../../services/sub-category.service';
import { CategoryService } from './../../services/category.service';
import { User } from './../../models/user';
import { SubCategory } from './../../models/sub-category';
import { Category } from './../../models/category';
import { Subscription } from 'rxjs/Subscription';
import { Brand } from './../../models/brand';
import { BrandService } from './../../services/brand.service';
import { Router } from '@angular/router';
import { CommonService } from './../../services/common.service';
import { CallService } from './../../services/call.service';
import { Call } from './../../models/call';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-call-form',
  templateUrl: './call-form.component.html',
  styleUrls: ['./call-form.component.css']
})
export class CallFormComponent implements OnDestroy {

  brandSubscription: Subscription;
  categorySubscription: Subscription;
  subCategorySubscription: Subscription;
  customerSubscription: Subscription;
  userSubscription: Subscription;
  call: Call = new Call();
  brands: Brand[];
  categories: Category[];
  subCategories: SubCategory[];
  customers: Customer[];
  users: User[];
  id;

  constructor(
    private callService: CallService,
    private commonService: CommonService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private customerService: CustomerService,
    private userService: UserService,
    private router: Router
  ) {
    this.brandSubscription = this.brandService.getAll().subscribe(brands => {
      this.brands = brands;
    });
    this.categorySubscription = this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
    this.subCategorySubscription = this.subCategoryService.getAll().subscribe(subCategories => {
      this.subCategories = subCategories;
    });
    this.customerSubscription = this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
    this.userSubscription = this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  ngOnDestroy() {
    this.brandSubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
    this.subCategorySubscription.unsubscribe();
    this.customerSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  save(call) {
    this.preProcessData(call);
    if (this.id) {
      this.callService.udpate(this.id, call);
    } else {
      this.callService.create(call);
    }
    this.router.navigate([this.commonService.getCallsURL()]);
  }

  cancel() {
    this.router.navigate([this.commonService.getCallsURL()]);
  }

  preProcessData(call) {

  }

}
