import { Customer } from './../../models/customer';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  returnUrl: string;
  id;

  constructor(private customerService: CustomerService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.queryParamMap.map(params => params.get('returnUrl') || '')
      .take(1)
      .subscribe(p => this.returnUrl = p);
    if (this.id) {
      this.customerService.get(this.id)
          .take(1)
          .subscribe((p) => {
            this.customer = p;
          });
    }
  }

  ngOnInit() {
  }

  cancel() {
    if (this.returnUrl) {
      this.router.navigate([this.returnUrl]);
    } else {
      this.router.navigate([this.commonService.getCustomersURL()]);
    }
  }

}
