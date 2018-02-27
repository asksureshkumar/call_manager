import { BrandService } from './../../services/brand.service';
import { Brand } from '../../models/brand';
import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as $ from 'jquery';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnDestroy {
  subscription: Subscription;
  brands: Brand[];
  brand: Brand;
  filteredBrands: any[];

  constructor(private brandService: BrandService,
    public commonService: CommonService) {
    this.subscription = this.brandService.getAll().subscribe(brands => {
      this.filteredBrands = this.brands = brands;
    });
  }

  filter(query: string) {
    this.filteredBrands = (query) ?
      this.brands.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.brands;
  }

  showDeletePopup(brand) {
    this.brand =  brand;
  }

  delete(brandId) {
    this.brandService.delete(brandId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
