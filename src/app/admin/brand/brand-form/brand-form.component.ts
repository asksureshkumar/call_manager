import { Brand } from '../../../models/brand';
import { BrandService } from './../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css']
})
export class BrandFormComponent implements OnInit {
  brand: Brand = new Brand();
  id;

  constructor(
    private brandService: BrandService,
    private router: Router) { }

  ngOnInit() {
  }

  save(brand) {
    if (this.id) {
      this.brandService.udpate(this.id, brand);
    } else {
      this.brandService.create(brand);
    }
    this.router.navigate(['/admin/brands']);
  }

  cancel() {
    this.router.navigate(['/admin/brands']);
  }

}
