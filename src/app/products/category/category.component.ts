import { CategoryService } from './../../services/category.service';
import { Category } from '../../models/category';
import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as $ from 'jquery';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnDestroy {
  subscription: Subscription;
  categories: Category[];
  category: Category;
  filteredCategories: any[];

  constructor(private categoryService: CategoryService,
    public commonService: CommonService) {
    this.subscription = this.categoryService.getAll().subscribe(categories => {
      this.filteredCategories = this.categories = categories;
    });
  }

  filter(query: string) {
    this.filteredCategories = (query) ?
      this.categories.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : this.categories;
  }

  showDeletePopup(category) {
    this.category =  category;
  }

  delete(categoryId) {
    this.categoryService.delete(categoryId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
