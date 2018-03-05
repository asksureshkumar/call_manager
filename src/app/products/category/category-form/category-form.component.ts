import { Router } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category: Category = new Category();
  id;

  constructor(
    private categoryService: CategoryService,
    private commonService: CommonService,
    private router: Router) { }

  ngOnInit() {
  }

  save(role) {
    if (this.id) {
      this.categoryService.udpate(this.id, role);
    } else {
      this.categoryService.create(role);
    }
    this.router.navigate([this.commonService.getCategoriesURL()]);
  }

  cancel() {
    this.router.navigate([this.commonService.getCategoriesURL()]);
  }

}
