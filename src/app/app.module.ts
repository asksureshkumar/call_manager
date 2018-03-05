import { CallService } from './services/call.service';
import { SubCategoryService } from './services/sub-category.service';
import { CategoryService } from './services/category.service';
import { RoleService } from './services/role.service';
import { CommonService } from './services/common.service';
import { CustomerService } from './services/customer.service';
import { BrandService } from './services/brand.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { BrandComponent } from './admin/brand/brand.component';
import { BrandFormComponent } from './admin/brand/brand-form/brand-form.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { BrandDetailComponent } from './admin/brand/brand-detail/brand-detail.component';
import { BrandEditComponent } from './admin/brand/brand-edit/brand-edit.component';
import { CallComponent } from './call/call.component';
import { UserComponent } from './admin/user/user.component';
import { RoleComponent } from './admin/role/role.component';
import { CategoryComponent } from './products/category/category.component';
import { SubCategoryComponent } from './products/sub-category/sub-category.component';
import { ModelComponent } from './products/model/model.component';
import { RoleFormComponent } from './admin/role/role-form/role-form.component';
import { RoleEditComponent } from './admin/role/role-edit/role-edit.component';
import { RoleDetailComponent } from './admin/role/role-detail/role-detail.component';
import { UserDetailComponent } from './admin/user/user-detail/user-detail.component';
import { UserEditComponent } from './admin/user/user-edit/user-edit.component';
import { UserFormComponent } from './admin/user/user-form/user-form.component';
import { UserService } from './services/user.service';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CategoryFormComponent } from './products/category/category-form/category-form.component';
import { CategoryEditComponent } from './products/category/category-edit/category-edit.component';
import { CategoryDetailComponent } from './products/category/category-detail/category-detail.component';
import { SubCategoryFormComponent } from './products/sub-category/sub-category-form/sub-category-form.component';
import { SubCategoryEditComponent } from './products/sub-category/sub-category-edit/sub-category-edit.component';
import { SubCategoryDetailComponent } from './products/sub-category/sub-category-detail/sub-category-detail.component';
import { CallFormComponent } from './call/call-form/call-form.component';
import { CallEditComponent } from './call/call-edit/call-edit.component';
import { CallDetailComponent } from './call/call-detail/call-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    CustomerComponent,
    HomeComponent,
    BrandComponent,
    BrandFormComponent,
    CustomerFormComponent,
    CustomerDetailComponent,
    BrandDetailComponent,
    BrandEditComponent,
    CallComponent,
    UserComponent,
    RoleComponent,
    CategoryComponent,
    SubCategoryComponent,
    ModelComponent,
    RoleFormComponent,
    RoleEditComponent,
    RoleDetailComponent,
    UserDetailComponent,
    UserEditComponent,
    UserFormComponent,
    CustomerEditComponent,
    CategoryFormComponent,
    CategoryEditComponent,
    CategoryDetailComponent,
    SubCategoryFormComponent,
    SubCategoryEditComponent,
    SubCategoryDetailComponent,
    CallFormComponent,
    CallEditComponent,
    CallDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'categories/new', component: CategoryFormComponent},
      {path: 'categories/:id', component: CategoryDetailComponent},
      {path: 'categories/:id/edit', component: CategoryEditComponent},
      {path: 'categories', component: CategoryComponent},
      {path: 'sub-categories/new', component: SubCategoryFormComponent},
      {path: 'sub-categories/:id', component: SubCategoryDetailComponent},
      {path: 'sub-categories/:id/edit', component: SubCategoryEditComponent},
      {path: 'sub-categories', component: SubCategoryComponent},
      {path: 'customers/new', component: CustomerFormComponent},
      {path: 'customers/:id', component: CustomerDetailComponent},
      {path: 'customers/:id/edit', component: CustomerEditComponent},
      {path: 'customers', component: CustomerComponent},
      {path: 'calls/new', component: CallFormComponent},
      {path: 'calls/:id', component: CallDetailComponent},
      {path: 'calls/:id/edit', component: CallEditComponent},
      {path: 'calls', component: CallComponent},
      {path: 'admin/brands/new', component: BrandFormComponent},
      {path: 'admin/brands/:id', component: BrandDetailComponent},
      {path: 'admin/brands/:id/edit', component: BrandEditComponent},
      {path: 'admin/brands', component: BrandComponent},
      {path: 'admin/users/new', component: UserFormComponent},
      {path: 'admin/users/:id', component: UserDetailComponent},
      {path: 'admin/users/:id/edit', component: UserEditComponent},
      {path: 'admin/users', component: UserComponent},
      {path: 'admin/roles/new', component: RoleFormComponent},
      {path: 'admin/roles/:id', component: RoleDetailComponent},
      {path: 'admin/roles/:id/edit', component: RoleEditComponent},
      {path: 'admin/roles', component: RoleComponent}
    ])
  ],
  providers: [
    BrandService,
    RoleService,
    UserService,
    CategoryService,
    SubCategoryService,
    CustomerService,
    CallService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
