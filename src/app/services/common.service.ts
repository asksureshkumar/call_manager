import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  getHomeURL(): string {
    return '/';
  }

  getCustomersURL(): string {
    return '/customers';
  }

  getNewCustomersURL(): string {
    return '/customers/new';
  }

  getBrandsURL(): string {
    return '/admin/brands';
  }

  getNewBrandURL(): string {
    return '/admin/brands/new';
  }

}
