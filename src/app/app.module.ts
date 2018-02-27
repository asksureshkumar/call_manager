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
    BrandEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'customers/new', component: CustomerFormComponent},
      {path: 'customers/:id', component: CustomerDetailComponent},
      {path: 'customers', component: CustomerComponent},
      {path: 'admin/brands/new', component: BrandFormComponent},
      {path: 'admin/brands/:id', component: BrandDetailComponent},
      {path: 'admin/brands/:id/edit', component: BrandEditComponent},
      {path: 'admin/brands', component: BrandComponent}
    ])
  ],
  providers: [
    BrandService,
    CustomerService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
