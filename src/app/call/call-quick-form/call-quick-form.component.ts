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
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-call-quick-form',
  templateUrl: './call-quick-form.component.html',
  styleUrls: ['./call-quick-form.component.css']
})
export class CallQuickFormComponent implements OnDestroy {
  brandSubscription: Subscription;
  categorySubscription: Subscription;
  subCategorySubscription: Subscription;
  customerSubscription: Subscription;
  call: Call = new Call();
  brands: Brand[];
  categories: Category[];
  subCategories: SubCategory[];
  customers: Customer[];
  id;

  constructor(
    private callService: CallService,
    private commonService: CommonService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private customerService: CustomerService,
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
  }

  ngOnDestroy() {
    this.brandSubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
    this.subCategorySubscription.unsubscribe();
    this.customerSubscription.unsubscribe();
  }

  formatter = (result: Customer): string => result.name + ' - ' + result.phoneNumber;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.customers.filter(v => {
          if (v.name.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
            v.phoneNumber.startsWith(term.toLowerCase())) {
            return true;
          }
        }).slice(0, 10))

  save(call) {
    const data: Call = this.preProcessData(call);
    if (this.id) {
      this.callService.udpate(this.id, data);
    } else {
      this.callService.create(data);
    }
    this.router.navigate([this.commonService.getCallsURL()]);
  }

  cancel() {
    this.router.navigate([this.commonService.getCallsURL()]);
  }

  preProcessData(call): Call {
    const data: Call = new Call();
    data.callNo = '######';
    data.callStatus = 'OPEN';
    if (call.brandKey) {
      data.brandKey = call.brandKey.split('#$#', 2)[0];
      data.brandName = call.brandKey.split('#$#', 2)[1];
    }
    if (call.categoryKey) {
      data.categoryKey = call.categoryKey.split('#$#', 2)[0];
      data.categoryName = call.categoryKey.split('#$#', 2)[1];
    }
    if (call.subCategoryKey) {
      data.subCategoryKey = call.subCategoryKey.split('#$#', 2)[0];
      data.subCategoryName = call.subCategoryKey.split('#$#', 2)[1];
    }
    if (call.customerKey) {
      data.customerKey = call.customerKey.$key;
      data.customerName = call.customerKey.name;
    }
    data.complaint = call.complaint;
    return data;
  }

}
