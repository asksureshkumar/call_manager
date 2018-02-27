import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../../services/common.service';
import { BrandService } from './../../../services/brand.service';
import { Brand } from './../../../models/brand';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {

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

  save(brand) {
    if (this.id) {
      this.brandService.udpate(this.id, brand);
    }
    this.router.navigate([this.commonService.getBrandsURL()]);
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate([this.commonService.getBrandsURL()]);
  }

}
