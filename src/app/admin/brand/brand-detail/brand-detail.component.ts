import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { BrandService } from './../../../services/brand.service';
import { Brand } from './../../../models/brand';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {
  brand: Brand;
  id;

  constructor(private brandService: BrandService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.brandService.get(this.id)
          .take(1)
          .subscribe((p) => {
            this.brand = p;
          });
    }
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate([this.commonService.getBrandsURL()]);
  }

}
