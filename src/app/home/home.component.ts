import { BrandService } from './../services/brand.service';
import { CommonService } from './../services/common.service';
import { Brand } from './../models/brand';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  subscription: Subscription;
  brands: Brand[];

  constructor(private brandService: BrandService,
    public commonService: CommonService) {
    this.subscription = this.brandService.getAll().subscribe(brands => {
      this.brands = brands;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
