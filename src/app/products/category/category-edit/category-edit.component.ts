import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category: Category = new Category();
  id;

  constructor(private categoryService: CategoryService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.categoryService.get(this.id)
          .take(1)
          .subscribe((p) => {
            this.category = p;
          });
    }
  }

  save(category) {
    if (this.id) {
      this.categoryService.udpate(this.id, category);
    }
    this.router.navigate([this.commonService.getCategoriesURL()]);
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate([this.commonService.getCategoriesURL()]);
  }

}
