import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  getHomeURL(): string {
    return '/';
  }

  getCategoriesURL(): string {
    return '/categories';
  }

  getNewCategoryURL(): string {
    return '/categories/new';
  }

  getSubCategoriesURL(): string {
    return '/sub-categories';
  }

  getNewSubCategoryURL(): string {
    return '/sub-categories/new';
  }

  getCustomersURL(): string {
    return '/customers';
  }

  getNewCustomersURL(): string {
    return '/customers/new';
  }

  getCallsURL(): string {
    return '/calls';
  }

  getNewCallURL(): string {
    return '/calls/new';
  }

  getBrandsURL(): string {
    return '/admin/brands';
  }

  getNewBrandURL(): string {
    return '/admin/brands/new';
  }

  getRolesURL(): string {
    return '/admin/roles';
  }

  getNewRoleURL(): string {
    return '/admin/roles/new';
  }

  getUsersURL(): string {
    return '/admin/users';
  }

  getNewUserURL(): string {
    return '/admin/users/new';
  }

}
