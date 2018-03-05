import { Category } from './../../../models/category';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { CategoryService } from './../../../services/category.service';
import { SubCategory } from './../../../models/sub-category';
import { Subscription } from 'rxjs/Subscription';
import { SubCategoryService } from './../../../services/sub-category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sub-category-edit',
  templateUrl: './sub-category-edit.component.html',
  styleUrls: ['./sub-category-edit.component.css']
})
export class SubCategoryEditComponent implements OnDestroy {

  subscription: Subscription;
  subCategory: SubCategory = new SubCategory();
  categories: Category[];
  id;

  constructor(private subCategoryService: SubCategoryService,
    private categoryService: CategoryService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute) {
    this.subscription = this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.subCategoryService.get(this.id)
          .take(1)
          .subscribe((p) => {
            this.subCategory = p;
          });
    }
  }

  save(subCategory) {
    if (this.id) {
      this.subCategoryService.udpate(this.id, subCategory);
    }
    this.router.navigate([this.commonService.getSubCategoriesURL()]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  cancel() {
    this.router.navigate([this.commonService.getSubCategoriesURL()]);
  }

}
