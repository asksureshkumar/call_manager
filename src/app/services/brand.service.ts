import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class BrandService {

  constructor(private db: AngularFireDatabase) { }

  create(brand) {
    return this.db.list('/brands').push(brand);
  }

  getAll() {
    return this.db.list('/brands');
  }

  get(brandId) {
    return this.db.object('/brands/' + brandId);
  }

  udpate(brandId, brand) {
    return this.db.object('/brands/' + brandId).update(brand);
  }

  delete(brandId) {
    return this.db.object('/brands/' + brandId).remove();
  }
}
