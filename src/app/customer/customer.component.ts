import { CommonService } from './../services/common.service';
import { Router } from '@angular/router';
import { CustomerService } from './../services/customer.service';
import { Customer } from './../models/customer';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnDestroy {
  subscription: Subscription;
  customers: Customer[];
  customer: Customer;
  filteredCustomers: any[];

  constructor(
    private customerService: CustomerService,
    public commonService: CommonService) {
      this.subscription = this.customerService.getAll().subscribe(customers => {
      this.filteredCustomers = this.customers = customers;
    });
  }

  showDeletePopup(customer) {
    this.customer =  customer;
  }

  delete(customerId) {
    this.customerService.delete(customerId);
  }

  filter(query: string) {
    this.filteredCustomers = (query) ?
      this.customers.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase())
      ) :
      this.customers;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
