import { SubCategoryService } from './../../services/sub-category.service';
import { SubCategory } from '../../models/sub-category';
import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as $ from 'jquery';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnDestroy {

  subscription: Subscription;
  subCategories: SubCategory[];
  subCategory: SubCategory;
  filteredSubCategories: any[];

  constructor(private subCategoryService: SubCategoryService,
    public commonService: CommonService) {
    this.subscription = this.subCategoryService.getAll().subscribe(subCategories => {
      this.filteredSubCategories = this.subCategories = subCategories;
    });
  }

  filter(query: string) {
    this.filteredSubCategories = (query) ?
      this.subCategories.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : this.subCategories;
  }

  showDeletePopup(subCategory) {
    this.subCategory =  subCategory;
  }

  delete(subCategoryId) {
    this.subCategoryService.delete(subCategoryId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
