import { Router } from '@angular/router';
import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../models/category';
import { SubCategoryService } from './../../../services/sub-category.service';
import { SubCategory } from '../../../models/sub-category';
import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as $ from 'jquery';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-sub-category-form',
  templateUrl: './sub-category-form.component.html',
  styleUrls: ['./sub-category-form.component.css']
})
export class SubCategoryFormComponent implements OnDestroy {

  subCategory: SubCategory = new SubCategory();
  subscription: Subscription;
  categories: Category[];
  id;

  constructor(
    private subCategoryService: SubCategoryService,
    private categoryService: CategoryService,
    private commonService: CommonService,
    private router: Router) {
      this.subscription = this.categoryService.getAll().subscribe(categories => {
        this.categories = categories;
      });
    }

  save(subCategory) {
    if (this.id) {
      this.subCategoryService.udpate(this.id, subCategory);
    } else {
      this.subCategoryService.create(subCategory);
    }
    this.router.navigate([this.commonService.getSubCategoriesURL()]);
  }

  cancel() {
    this.router.navigate([this.commonService.getSubCategoriesURL()]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
