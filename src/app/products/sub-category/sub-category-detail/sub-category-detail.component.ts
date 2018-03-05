import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { SubCategoryService } from './../../../services/sub-category.service';
import { SubCategory } from './../../../models/sub-category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-category-detail',
  templateUrl: './sub-category-detail.component.html',
  styleUrls: ['./sub-category-detail.component.css']
})
export class SubCategoryDetailComponent implements OnInit {

  subCategory: SubCategory;
  id;

  constructor(private subCategoryService: SubCategoryService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.subCategoryService.get(this.id)
          .take(1)
          .subscribe((p) => {
            this.subCategory = p;
          });
    }
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate([this.commonService.getSubCategoriesURL()]);
  }

}
