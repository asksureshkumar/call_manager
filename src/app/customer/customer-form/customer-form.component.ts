import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customer: Customer = new Customer();
  id;

  constructor(
    private customerService: CustomerService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(customer) {
    this.preProcessData(customer);
    if (this.id) {
      this.customerService.udpate(this.id, customer);
    } else {
      this.customerService.create(customer);
    }
    this.router.navigate([this.commonService.getCustomersURL()]);
  }

  cancel() {
    this.router.navigate([this.commonService.getCustomersURL()]);
  }

  preProcessData(customer) {
    if (!customer.mailId) {
      customer.mailId = '';
    }
    if (!customer.landmark) {
      customer.landmark = '';
    }
    if (!customer.altPhoneNumber) {
      customer.altPhoneNumber = '';
    }
  }

}
