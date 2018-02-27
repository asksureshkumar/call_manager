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

  ngOnInit() {
  }

  cancel() {
    this.router.navigate([this.commonService.getCustomersURL()]);
  }

}
