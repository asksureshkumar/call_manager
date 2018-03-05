import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../services/common.service';
import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../models/customer';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {
  customer: Customer = new Customer();
  id;

  constructor(private customerService: CustomerService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.customerService.get(this.id)
        .take(1)
        .subscribe((p) => {
          this.customer = p;
        });
    }
  }

  save(customer) {
    if (this.id) {
      this.customerService.udpate(this.id, customer);
    }
    this.router.navigate([this.commonService.getCustomersURL()]);
  }

  cancel() {
    this.router.navigate([this.commonService.getCustomersURL()]);
  }
}
